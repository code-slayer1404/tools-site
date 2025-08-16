// import { useState, useRef, useEffect } from 'react';
// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// export function usePdfReader() {
//     const [pdf, setPdf] = useState(null);
//     const [pageNum, setPageNum] = useState(1);
//     const canvasRef = useRef(null);

//     const loadPdf = async (file) => {
//         const arrayBuffer = await file.arrayBuffer();
//         const pdf = await pdfjs.getDocument(arrayBuffer).promise;
//         setPdf(pdf);
//         return pdf;
//     };

//     // ... rest of PDF rendering logic

//     return { canvasRef, loadPdf, pageNum, setPageNum };
// }