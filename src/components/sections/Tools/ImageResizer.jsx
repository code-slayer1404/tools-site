
// import { useState, useRef } from 'react';
// import { useLanguage } from '../../../contexts/useLanguage';
// import '../../../styles/components/imageresizer.css';

// export default function ImageResizer() {
//     const { t } = useLanguage();
//     const [image, setImage] = useState(null);
//     const [width, setWidth] = useState('');
//     const [height, setHeight] = useState('');
//     const [resizedImage, setResizedImage] = useState(null);
//     const [error, setError] = useState('');
//     const [conversionHistory, setConversionHistory] = useState([]);
//     const canvasRef = useRef(null);
//     const fileInputRef = useRef(null);

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         if (!file.type.match('image.*')) {
//             setError(t('alert-image-type'));
//             return;
//         }

//         const reader = new FileReader();
//         reader.onload = (event) => {
//             const img = new Image();
//             img.onload = () => {
//                 setImage(img);
//                 setWidth(img.width);
//                 setHeight(img.height);
//                 setResizedImage(null);
//                 setError('');
//             };
//             img.src = event.target.result;
//         };
//         reader.readAsDataURL(file);
//     };

//     const handleResize = () => {
//         if (!image) {
//             setError(t('alert-image-required'));
//             return;
//         }

//         const newWidth = parseInt(width);
//         const newHeight = parseInt(height);

//         if (isNaN(newWidth) || isNaN(newHeight) || newWidth <= 0 || newHeight <= 0) {
//             setError(t('alert-invalid-dimensions'));
//             return;
//         }

//         const canvas = canvasRef.current;
//         canvas.width = newWidth;
//         canvas.height = newHeight;
//         const ctx = canvas.getContext('2d');
//         ctx.drawImage(image, 0, 0, newWidth, newHeight);
//         const imageData = canvas.toDataURL('image/png');
//         setResizedImage(imageData);

//         // Add to conversion history
//         setConversionHistory(prev => [
//             ...prev,
//             {
//                 original: `${image.width}×${image.height}`,
//                 resized: `${newWidth}×${newHeight}`,
//                 timestamp: new Date().toLocaleString()
//             }
//         ].slice(-3)); // Keep only last 3 conversions

//         setError('');
//     };

//     const triggerFileInput = () => fileInputRef.current.click();

//     const handleDownload = () => {
//         const link = document.createElement('a');
//         link.href = resizedImage;
//         link.download = 'resized_image.png';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <div className="tool-card">
//             <h3 className="tool-title">{t('image-resizer-title') || 'Image Resizer'}</h3>

//             <div className="image-resizer-content">
//                 <div className="tool-description">
//                     {t('image-resizer-description') || 'Resize images to specific dimensions while maintaining aspect ratio'}
//                 </div>

//                 <button
//                     onClick={triggerFileInput}
//                     className="tool-button"
//                 >
//                     <i className="fas fa-upload"></i> {t('image-upload-label') || 'Select Image'}
//                 </button>
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     ref={fileInputRef}
//                     className="image-file-input"
//                 />

//                 {error && <div className="tool-error">{error}</div>}

//                 <div className="dimension-inputs">
//                     <div className="dimension-group">
//                         <input
//                             type="number"
//                             value={width}
//                             onChange={(e) => setWidth(e.target.value)}
//                             placeholder={t('width-placeholder') || 'Width (px)'}
//                             className="tool-input"
//                         />
//                         <span className="dimension-separator">×</span>
//                         <input
//                             type="number"
//                             value={height}
//                             onChange={(e) => setHeight(e.target.value)}
//                             placeholder={t('height-placeholder') || 'Height (px)'}
//                             className="tool-input"
//                         />
//                     </div>
//                 </div>

//                 <button
//                     onClick={handleResize}
//                     className="tool-button"
//                     disabled={!image}
//                 >
//                     <i className="fas fa-expand"></i> {t('resize-btn') || 'Resize Image'}
//                 </button>

//                 <div className="canvas-container">
//                     <canvas
//                         ref={canvasRef}
//                         className="resized-canvas"
//                         style={{ display: 'none' }}
//                     />
//                     {resizedImage && (
//                         <>
//                             <img src={resizedImage} alt="Resized" className="resized-image" />
//                             <button
//                                 onClick={handleDownload}
//                                 className="tool-button download-btn"
//                             >
//                                 <i className="fas fa-download"></i> {t('download-btn') || 'Download Image'}
//                             </button>
//                         </>
//                     )}
//                 </div>

//                 {conversionHistory.length > 0 && (
//                     <div className="conversion-history">
//                         <h4>{t('conversion-history') || 'Recent Conversions'}</h4>
//                         <ul>
//                             {conversionHistory.map((item, index) => (
//                                 <li key={index}>
//                                     {item.original} → {item.resized} ({item.timestamp})
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// import { useState, useRef } from 'react';
// import { useLanguage } from '../../../contexts/useLanguage';
// import '../../../styles/components/imageresizer.css';

// export default function ImageResizer() {
//     const { t } = useLanguage();
//     const [image, setImage] = useState(null);
//     const [width, setWidth] = useState('');
//     const [height, setHeight] = useState('');
//     const [resizedImage, setResizedImage] = useState(null);
//     const [error, setError] = useState('');
//     const [conversionHistory, setConversionHistory] = useState([]);
//     const canvasRef = useRef(null);
//     const fileInputRef = useRef(null);

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (!file) return;

//         if (!file.type.match('image.*')) {
//             setError(t('alert-image-type'));
//             return;
//         }

//         const reader = new FileReader();
//         reader.onload = (event) => {
//             const img = new Image();
//             img.onload = () => {
//                 setImage(img);
//                 setWidth(img.width);
//                 setHeight(img.height);
//                 setResizedImage(null);
//                 setError('');
//             };
//             img.src = event.target.result;
//         };
//         reader.readAsDataURL(file);
//     };

//     const handleResize = () => {
//         if (!image) {
//             setError(t('alert-image-required'));
//             return;
//         }

//         const newWidth = parseInt(width);
//         const newHeight = parseInt(height);

//         if (isNaN(newWidth) || isNaN(newHeight) || newWidth <= 0 || newHeight <= 0) {
//             setError(t('alert-invalid-dimensions'));
//             return;
//         }

//         const canvas = canvasRef.current;
//         canvas.width = newWidth;
//         canvas.height = newHeight;
//         const ctx = canvas.getContext('2d');
//         ctx.drawImage(image, 0, 0, newWidth, newHeight);
//         const imageData = canvas.toDataURL('image/png');
//         setResizedImage(imageData);

//         // Add to conversion history
//         setConversionHistory(prev => [
//             ...prev,
//             {
//                 original: `${image.width}×${image.height}`,
//                 resized: `${newWidth}×${newHeight}`,
//                 timestamp: new Date().toLocaleString()
//             }
//         ].slice(-3));

//         setError('');
//     };

//     const triggerFileInput = () => fileInputRef.current.click();

//     const handleDownload = () => {
//         const link = document.createElement('a');
//         link.href = resizedImage;
//         link.download = 'resized_image.png';
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     return (
//         <div className="image-resizer-container">
//             <div className="image-resizer-display">
//                 <h3 className="image-resizer-title">{t('image-resizer-title') || 'Image Resizer'}</h3>
//                 <div className="image-resizer-description">
//                     {t('image-resizer-description') || 'Resize images to specific dimensions while maintaining aspect ratio'}
//                 </div>
//             </div>

//             <div className="image-resizer-buttons">
//                 <button
//                     onClick={triggerFileInput}
//                     className="calc-btn calc-btn-number"
//                 >
//                     <i className="fas fa-upload"></i> {t('image-upload-label') || 'Select Image'}
//                 </button>
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     ref={fileInputRef}
//                     className="image-file-input"
//                 />

//                 {error && <div className="calc-error">{error}</div>}

//                 <div className="dimension-inputs">
//                     <div className="dimension-group">
//                         <input
//                             type="number"
//                             value={width}
//                             onChange={(e) => setWidth(e.target.value)}
//                             placeholder={t('width-placeholder') || 'Width (px)'}
//                             className="calc-input"
//                         />
//                         <span className="dimension-separator">×</span>
//                         <input
//                             type="number"
//                             value={height}
//                             onChange={(e) => setHeight(e.target.value)}
//                             placeholder={t('height-placeholder') || 'Height (px)'}
//                             className="calc-input"
//                         />
//                     </div>
//                 </div>

//                 <button
//                     onClick={handleResize}
//                     className="calc-btn calc-btn-operator"
//                     disabled={!image}
//                 >
//                     <i className="fas fa-expand"></i> {t('resize-btn') || 'Resize Image'}
//                 </button>

//                 <div className="canvas-container">
//                     <canvas
//                         ref={canvasRef}
//                         className="resized-canvas"
//                         style={{ display: 'none' }}
//                     />
//                     {resizedImage && (
//                         <>
//                             <img src={resizedImage} alt="Resized" className="resized-image" />
//                             <button
//                                 onClick={handleDownload}
//                                 className="calc-btn calc-btn-equals"
//                             >
//                                 <i className="fas fa-download"></i> {t('download-btn') || 'Download Image'}
//                             </button>
//                         </>
//                     )}
//                 </div>

//                 {conversionHistory.length > 0 && (
//                     <div className="conversion-history">
//                         <h4>{t('conversion-history') || 'Recent Conversions'}</h4>
//                         <ul>
//                             {conversionHistory.map((item, index) => (
//                                 <li key={index}>
//                                     {item.original} → {item.resized} ({item.timestamp})
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

import { useState, useRef } from 'react';
import { useLanguage } from '../../../contexts/useLanguage';
import '../../../styles/components/imageresizer.css';

export default function ImageResizer() {
    const { t } = useLanguage();
    const [image, setImage] = useState(null);
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [resizedImage, setResizedImage] = useState(null);
    const [error, setError] = useState('');
    const [conversionHistory, setConversionHistory] = useState([]);
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.match('image.*')) {
            setError(t('alert-image-type'));
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                setImage(img);
                setWidth(img.width);
                setHeight(img.height);
                setResizedImage(null);
                setError('');
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    const handleResize = () => {
        if (!image) {
            setError(t('alert-image-required'));
            return;
        }

        const newWidth = parseInt(width);
        const newHeight = parseInt(height);

        if (isNaN(newWidth) || isNaN(newHeight) || newWidth <= 0 || newHeight <= 0) {
            setError(t('alert-invalid-dimensions'));
            return;
        }

        const canvas = canvasRef.current;
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, newWidth, newHeight);
        const imageData = canvas.toDataURL('image/png');
        setResizedImage(imageData);

        // Add to conversion history
        setConversionHistory(prev => [
            ...prev,
            {
                original: `${image.width}×${image.height}`,
                resized: `${newWidth}×${newHeight}`,
                timestamp: new Date().toLocaleString()
            }
        ].slice(-3));

        setError('');
    };

    const triggerFileInput = () => fileInputRef.current.click();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resizedImage;
        link.download = 'resized_image.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="image-resizer-container">
            <div className="image-resizer-display">
                <h3 className="image-resizer-title">{t('image-resizer-title') || 'Image Resizer'}</h3>
                <div className="image-resizer-description">
                    {t('image-resizer-description') || 'Resize images to specific dimensions while maintaining aspect ratio'}
                </div>
            </div>

            <div className="image-resizer-buttons">
                <button
                    onClick={triggerFileInput}
                    className="calc-btn calc-btn-number"
                >
                    <i className="fas fa-upload"></i> {t('image-upload-label') || 'Select Image'}
                </button>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    className="image-file-input"
                />

                {error && <div className="calc-error">{error}</div>}

                <div className="dimension-inputs">
                    <div className="dimension-group">
                        <input
                            type="number"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                            placeholder={t('width-placeholder') || 'Width (px)'}
                            className="calc-input"
                            min="1"
                        />
                        <span className="dimension-separator">×</span>
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder={t('height-placeholder') || 'Height (px)'}
                            className="calc-input"
                            min="1"
                        />
                    </div>
                </div>

                <button
                    onClick={handleResize}
                    className="calc-btn calc-btn-operator"
                    disabled={!image}
                >
                    <i className="fas fa-expand"></i> {t('resize-btn') || 'Resize Image'}
                </button>

                <div className="canvas-container">
                    <canvas
                        ref={canvasRef}
                        className="resized-canvas"
                        style={{ display: 'none' }}
                    />
                    {resizedImage && (
                        <>
                            <img src={resizedImage} alt="Resized" className="resized-image" />
                            <button
                                onClick={handleDownload}
                                className="calc-btn calc-btn-equals"
                            >
                                <i className="fas fa-download"></i> {t('download-btn') || 'Download Image'}
                            </button>
                        </>
                    )}
                </div>

                {conversionHistory.length > 0 && (
                    <div className="conversion-history">
                        <h4>{t('conversion-history') || 'Recent Conversions'}</h4>
                        <ul>
                            {conversionHistory.map((item, index) => (
                                <li key={index}>
                                    {item.original} → {item.resized} ({item.timestamp})
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}