// import React, { useRef, useState, useEffect, useCallback } from 'react';
// import { useLanguage } from '../../../contexts/useLanguage';
// import { languageData } from '../../../utils/constants';
// import * as pdfjsLib from 'pdfjs-dist';
// import '../../../styles/components/pdfreader.css';

// pdfjsLib.GlobalWorkerOptions.workerSrc =
//     'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

// const PdfReader = () => {
//     const { language } = useLanguage();
//     const [pdfDoc, setPdfDoc] = useState(null);
//     const [pageNum, setPageNum] = useState(1);
//     const [numPages, setNumPages] = useState(0);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [scale, setScale] = useState(1.0);
//     const [baseScale, setBaseScale] = useState(1.0);
//     const canvasRef = useRef(null);
//     const containerRef = useRef(null);
//     const renderTaskRef = useRef(null);

//     const loadPdf = async (file) => {
//         try {
//             setIsLoading(true);
//             setError(null);

//             const arrayBuffer = await file.arrayBuffer();
//             const pdf = await pdfjsLib.getDocument({
//                 data: arrayBuffer,
//                 cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/cmaps/',
//                 cMapPacked: true
//             }).promise;

//             setPdfDoc(pdf);
//             setNumPages(pdf.numPages);
//             setPageNum(1);
//             setScale(1.0); // Reset user zoom when loading new PDF
//         } catch (err) {
//             console.error('PDF loading error:', err);
//             setError(languageData[language]['pdf-error'] || 'Failed to load PDF');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const renderPage = useCallback(async () => {
//         if (!pdfDoc || !canvasRef.current || !containerRef.current) return;

//         // Cancel any ongoing render
//         if (renderTaskRef.current) {
//             renderTaskRef.current.cancel();
//         }

//         try {
//             const page = await pdfDoc.getPage(pageNum);
//             const viewport = page.getViewport({ scale: 1.0 });

//             // Calculate base scale to fit container
//             const container = containerRef.current;
//             const padding = 40;
//             const availableWidth = container.clientWidth - padding;
//             const availableHeight = container.clientHeight - padding;

//             const newBaseScale = Math.min(
//                 availableWidth / viewport.width,
//                 availableHeight / viewport.height,
//                 1.0 // Don't scale up beyond 100%
//             );

//             setBaseScale(newBaseScale);

//             // Apply both base and user scale
//             const effectiveScale = newBaseScale * scale;
//             const scaledViewport = page.getViewport({ scale: effectiveScale });

//             const canvas = canvasRef.current;
//             canvas.height = scaledViewport.height;
//             canvas.width = scaledViewport.width;

//             const renderContext = {
//                 canvasContext: canvas.getContext('2d'),
//                 viewport: scaledViewport
//             };

//             renderTaskRef.current = page.render(renderContext);
//             await renderTaskRef.current.promise;
//             renderTaskRef.current = null;
//         } catch (err) {
//             if (err.name !== 'RenderingCancelledException') {
//                 console.error('Render error:', err);
//                 setError(languageData[language]['pdf-render-error'] || 'Failed to render page');
//             }
//         }
//     }, [pdfDoc, pageNum, scale, language]);

//     useEffect(() => {
//         renderPage();
//     }, [renderPage]);

//     useEffect(() => {
//         const handleResize = () => {
//             if (pdfDoc) renderPage();
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, [pdfDoc, renderPage]);

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         if (file.type !== 'application/pdf') {
//             setError(languageData[language]['pdf-invalid-type'] || 'Please select a PDF file');
//             return;
//         }
//         loadPdf(file);
//     };

//     const goToPrevPage = () => pageNum > 1 && setPageNum(p => p - 1);
//     const goToNextPage = () => pageNum < numPages && setPageNum(p => p + 1);

//     const zoomIn = () => setScale(s => Math.min(s + 0.25, 3.0));
//     const zoomOut = () => setScale(s => Math.max(s - 0.25, 0.5));
//     const resetZoom = () => setScale(1.0);

//     useEffect(() => {
//         return () => {
//             if (pdfDoc) pdfDoc.destroy();
//             if (renderTaskRef.current) renderTaskRef.current.cancel();
//         };
//     }, [pdfDoc]);

//     return (
//         <div className="pdf-reader">
//             <div className="pdf-header">
//                 <h2>{languageData[language]['pdf-title'] || 'PDF Viewer'}</h2>
//                 <label className="pdf-upload-btn">
//                     {languageData[language]['pdf-upload-label'] || 'Select PDF'}
//                     <input
//                         type="file"
//                         accept="application/pdf"
//                         onChange={handleFileChange}
//                         className="pdf-file-input"
//                         disabled={isLoading}
//                     />
//                 </label>
//             </div>

//             {error && <div className="pdf-error">{error}</div>}
//             {isLoading && <div className="pdf-loading">Loading...</div>}

//             <div className="pdf-viewer-container" ref={containerRef}>
//                 <div className="pdf-controls">
//                     <button onClick={zoomOut} disabled={!pdfDoc || isLoading}>
//                         {languageData[language]['zoom-out'] || 'Zoom Out'}
//                     </button>
//                     <button onClick={resetZoom} disabled={!pdfDoc || isLoading}>
//                         {languageData[language]['zoom-reset'] || 'Reset'} ({(baseScale * scale).toFixed(1)}x)
//                     </button>
//                     <button onClick={zoomIn} disabled={!pdfDoc || isLoading}>
//                         {languageData[language]['zoom-in'] || 'Zoom In'}
//                     </button>
//                     <span className="page-info">
//                         {pdfDoc ? `${pageNum} / ${numPages}` : languageData[language]['no-pdf'] || 'No PDF loaded'}
//                     </span>
//                 </div>

//                 <div className="pdf-canvas-container">
//                     <canvas ref={canvasRef} className="pdf-canvas" />
//                 </div>

//                 <div className="pdf-nav-buttons">
//                     <button onClick={goToPrevPage} disabled={!pdfDoc || pageNum <= 1 || isLoading}>
//                         {languageData[language]['prev-page'] || 'Previous'}
//                     </button>
//                     <button onClick={goToNextPage} disabled={!pdfDoc || pageNum >= numPages || isLoading}>
//                         {languageData[language]['next-page'] || 'Next'}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PdfReader;

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../../../contexts/useLanguage';
import { languageData } from '../../../utils/constants';
import * as pdfjsLib from 'pdfjs-dist';
import '../../../styles/components/pdfreader.css';

pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

const PdfReader = () => {
    const { language } = useLanguage();
    const [pdfDoc, setPdfDoc] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [numPages, setNumPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [scale, setScale] = useState(1.0);
    const [baseScale, setBaseScale] = useState(1.0);
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const renderTaskRef = useRef(null);
    const fileInputRef = useRef(null);

    const loadPdf = async (file) => {
        try {
            setIsLoading(true);
            setError(null);

            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({
                data: arrayBuffer,
                cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/cmaps/',
                cMapPacked: true
            }).promise;

            setPdfDoc(pdf);
            setNumPages(pdf.numPages);
            setPageNum(1);
            setScale(1.0);
        } catch (err) {
            console.error('PDF loading error:', err);
            setError(languageData[language]['pdf-error'] || 'Failed to load PDF');
        } finally {
            setIsLoading(false);
        }
    };

    const renderPage = useCallback(async () => {
        if (!pdfDoc || !canvasRef.current || !containerRef.current) return;

        if (renderTaskRef.current) {
            renderTaskRef.current.cancel();
        }

        try {
            const page = await pdfDoc.getPage(pageNum);
            const viewport = page.getViewport({ scale: 1.0 });

            const container = containerRef.current;
            const padding = 40;
            const availableWidth = container.clientWidth - padding;
            const availableHeight = container.clientHeight - padding;

            const newBaseScale = Math.min(
                availableWidth / viewport.width,
                availableHeight / viewport.height,
                1.0
            );

            setBaseScale(newBaseScale);

            const effectiveScale = newBaseScale * scale;
            const scaledViewport = page.getViewport({ scale: effectiveScale });

            const canvas = canvasRef.current;
            canvas.height = scaledViewport.height;
            canvas.width = scaledViewport.width;

            const renderContext = {
                canvasContext: canvas.getContext('2d'),
                viewport: scaledViewport
            };

            renderTaskRef.current = page.render(renderContext);
            await renderTaskRef.current.promise;
            renderTaskRef.current = null;
        } catch (err) {
            if (err.name !== 'RenderingCancelledException') {
                console.error('Render error:', err);
                setError(languageData[language]['pdf-render-error'] || 'Failed to render page');
            }
        }
    }, [pdfDoc, pageNum, scale, language]);

    useEffect(() => {
        renderPage();
    }, [renderPage]);

    useEffect(() => {
        const handleResize = () => {
            if (pdfDoc) renderPage();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [pdfDoc, renderPage]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.type !== 'application/pdf') {
            setError(languageData[language]['pdf-invalid-type'] || 'Please select a PDF file');
            return;
        }
        loadPdf(file);
    };

    const triggerFileInput = () => fileInputRef.current.click();
    const goToPrevPage = () => pageNum > 1 && setPageNum(p => p - 1);
    const goToNextPage = () => pageNum < numPages && setPageNum(p => p + 1);
    const zoomIn = () => setScale(s => Math.min(s + 0.25, 3.0));
    const zoomOut = () => setScale(s => Math.max(s - 0.25, 0.5));
    const resetZoom = () => setScale(1.0);

    useEffect(() => {
        return () => {
            if (pdfDoc) pdfDoc.destroy();
            if (renderTaskRef.current) renderTaskRef.current.cancel();
        };
    }, [pdfDoc]);

    return (
        <div className="calculator-container">
            <div className="calculator-display">
                <h3 className="pdf-title">{languageData[language]['pdf-title'] || 'PDF Viewer'}</h3>
            </div>

            <div className="pdf-content">
                <button
                    onClick={triggerFileInput}
                    className="calc-btn calc-btn-number"
                    disabled={isLoading}
                >
                    {languageData[language]['pdf-upload-label'] || 'Select PDF'}
                </button>
                <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="pdf-file-input"
                    disabled={isLoading}
                />

                {error && <div className="calc-error">{error}</div>}
                {isLoading && <div className="pdf-loading">Loading...</div>}

                <div className="pdf-viewer-container" ref={containerRef}>
                    <div className="pdf-controls">
                        <button
                            onClick={zoomOut}
                            disabled={!pdfDoc || isLoading}
                            className="calc-btn calc-btn-number"
                        >
                            {languageData[language]['zoom-out'] || 'Zoom Out'}
                        </button>
                        <button
                            onClick={resetZoom}
                            disabled={!pdfDoc || isLoading}
                            className="calc-btn calc-btn-operator"
                        >
                            {languageData[language]['zoom-reset'] || 'Reset'} ({(baseScale * scale).toFixed(1)}x)
                        </button>
                        <button
                            onClick={zoomIn}
                            disabled={!pdfDoc || isLoading}
                            className="calc-btn calc-btn-number"
                        >
                            {languageData[language]['zoom-in'] || 'Zoom In'}
                        </button>
                        <span className="page-info">
                            {pdfDoc ? `${pageNum} / ${numPages}` : languageData[language]['no-pdf'] || 'No PDF loaded'}
                        </span>
                    </div>

                    <div className="pdf-canvas-container">
                        <canvas ref={canvasRef} className="pdf-canvas" />
                    </div>

                    <div className="pdf-nav-buttons">
                        <button
                            onClick={goToPrevPage}
                            disabled={!pdfDoc || pageNum <= 1 || isLoading}
                            className="calc-btn calc-btn-function"
                        >
                            {languageData[language]['prev-page'] || 'Previous'}
                        </button>
                        <button
                            onClick={goToNextPage}
                            disabled={!pdfDoc || pageNum >= numPages || isLoading}
                            className="calc-btn calc-btn-function"
                        >
                            {languageData[language]['next-page'] || 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PdfReader;
