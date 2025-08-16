// import { useState, useRef, useEffect, useCallback } from 'react';
// import { FaBold, FaItalic, FaUnderline, FaListUl, FaUndo, FaRedo } from 'react-icons/fa';
// import { useLanguage } from '../../../contexts/useLanguage';
// import '../../../styles/components/texteditor.css';

// export default function TextEditor({ initialContent = '', onContentChange }) {
//     const { t } = useLanguage();
//     const editorRef = useRef(null);
//     const [isFocused, setIsFocused] = useState(false);
//     const [history, setHistory] = useState([]);
//     const [historyIndex, setHistoryIndex] = useState(-1);

//     const saveState = useCallback((html) => {
//         const newHistory = [...history.slice(0, historyIndex + 1), html];
//         setHistory(newHistory);
//         setHistoryIndex(newHistory.length - 1);
//         if (onContentChange) onContentChange(html);
//     }, [history, historyIndex, onContentChange]);

//     const formatText = (command) => {
//         document.execCommand(command, false, null);
//         editorRef.current.focus();
//     };

//     const undo = () => {
//         if (historyIndex > 0) {
//             setHistoryIndex(prev => prev - 1);
//             editorRef.current.innerHTML = history[historyIndex - 1];
//         }
//     };

//     const redo = () => {
//         if (historyIndex < history.length - 1) {
//             setHistoryIndex(prev => prev + 1);
//             editorRef.current.innerHTML = history[historyIndex + 1];
//         }
//     };

//     useEffect(() => {
//         if (initialContent) {
//             editorRef.current.innerHTML = initialContent;
//             saveState(initialContent);
//         } else if (!isFocused && editorRef.current.innerHTML === '') {
//             editorRef.current.innerHTML = t('text-editor-placeholder');
//         }
//     }, [t, isFocused, initialContent, saveState]);

//     return (
//         <div className="calculator-container">
//             <h3 className="tool-title">{t('text-editor-title')}</h3>

//             <div className="text-editor-content">
//                 <div className="editor-toolbar">
//                     <button
//                         onClick={() => formatText('bold')}
//                         className="calc-btn calc-btn-number"
//                         aria-label={t('format-bold')}
//                     >
//                         <FaBold />
//                     </button>
//                     <button
//                         onClick={() => formatText('italic')}
//                         className="calc-btn calc-btn-number"
//                         aria-label={t('format-italic')}
//                     >
//                         <FaItalic />
//                     </button>
//                     <button
//                         onClick={() => formatText('underline')}
//                         className="calc-btn calc-btn-number"
//                         aria-label={t('format-underline')}
//                     >
//                         <FaUnderline />
//                     </button>
//                     <button
//                         onClick={() => formatText('insertUnorderedList')}
//                         className="calc-btn calc-btn-number"
//                         aria-label={t('format-list')}
//                     >
//                         <FaListUl />
//                     </button>
//                     <button
//                         onClick={undo}
//                         disabled={historyIndex <= 0}
//                         className="calc-btn calc-btn-function"
//                         aria-label={t('undo')}
//                     >
//                         <FaUndo />
//                     </button>
//                     <button
//                         onClick={redo}
//                         disabled={historyIndex >= history.length - 1}
//                         className="calc-btn calc-btn-function"
//                         aria-label={t('redo')}
//                     >
//                         <FaRedo />
//                     </button>
//                 </div>

//                 <div
//                     ref={editorRef}
//                     contentEditable
//                     onFocus={() => {
//                         setIsFocused(true);
//                         if (editorRef.current.innerHTML === t('text-editor-placeholder')) {
//                             editorRef.current.innerHTML = '';
//                         }
//                     }}
//                     onBlur={() => {
//                         setIsFocused(false);
//                         if (editorRef.current.innerHTML === '') {
//                             editorRef.current.innerHTML = t('text-editor-placeholder');
//                         }
//                     }}
//                     onInput={(e) => saveState(e.currentTarget.innerHTML)}
//                     className="calculator-display editor-area"
//                     aria-label={t('text-editor-aria-label')}
//                 />
//             </div>
//         </div>
//     );
// }


import { useState, useRef, useEffect, useCallback } from 'react';
import { FaBold, FaItalic, FaUnderline, FaListUl, FaUndo, FaRedo } from 'react-icons/fa';
import { useLanguage } from '../../../contexts/useLanguage';
import '../../../styles/components/texteditor.css';

export default function TextEditor({ initialContent = '', onContentChange }) {
    const { t } = useLanguage();
    const editorRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const saveState = useCallback((html) => {
        const newHistory = [...history.slice(0, historyIndex + 1), html];
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
        if (onContentChange) onContentChange(html);
    }, [history, historyIndex, onContentChange]);

    const formatText = (command) => {
        document.execCommand(command, false, null);
        editorRef.current.focus();
    };

    const undo = () => {
        if (historyIndex > 0) {
            setHistoryIndex(prev => prev - 1);
            editorRef.current.innerHTML = history[historyIndex - 1];
        }
    };

    const redo = () => {
        if (historyIndex < history.length - 1) {
            setHistoryIndex(prev => prev + 1);
            editorRef.current.innerHTML = history[historyIndex + 1];
        }
    };

    useEffect(() => {
        if (initialContent) {
            editorRef.current.innerHTML = initialContent;
            saveState(initialContent);
        } else if (!isFocused && editorRef.current.innerHTML === '') {
            editorRef.current.innerHTML = t('text-editor-placeholder');
        }
    }, [t, isFocused, initialContent, saveState]);

    return (
        <div className="calculator-container">
            <div className="calculator-display">
                <h3 className="text-editor-title">{t('text-editor-title')}</h3>
            </div>

            <div className="text-editor-content">
                <div className="editor-toolbar">
                    <button
                        onClick={() => formatText('bold')}
                        className="calc-btn calc-btn-number"
                        aria-label={t('format-bold')}
                        title={t('format-bold')}
                    >
                        <FaBold />
                    </button>
                    <button
                        onClick={() => formatText('italic')}
                        className="calc-btn calc-btn-number"
                        aria-label={t('format-italic')}
                        title={t('format-italic')}
                    >
                        <FaItalic />
                    </button>
                    <button
                        onClick={() => formatText('underline')}
                        className="calc-btn calc-btn-number"
                        aria-label={t('format-underline')}
                        title={t('format-underline')}
                    >
                        <FaUnderline />
                    </button>
                    <button
                        onClick={() => formatText('insertUnorderedList')}
                        className="calc-btn calc-btn-number"
                        aria-label={t('format-list')}
                        title={t('format-list')}
                    >
                        <FaListUl />
                    </button>
                    <button
                        onClick={undo}
                        disabled={historyIndex <= 0}
                        className="calc-btn calc-btn-function"
                        aria-label={t('undo')}
                        title={t('undo')}
                    >
                        <FaUndo />
                    </button>
                    <button
                        onClick={redo}
                        disabled={historyIndex >= history.length - 1}
                        className="calc-btn calc-btn-function"
                        aria-label={t('redo')}
                        title={t('redo')}
                    >
                        <FaRedo />
                    </button>
                </div>

                <div
                    ref={editorRef}
                    contentEditable
                    onFocus={() => {
                        setIsFocused(true);
                        if (editorRef.current.innerHTML === t('text-editor-placeholder')) {
                            editorRef.current.innerHTML = '';
                        }
                    }}
                    onBlur={() => {
                        setIsFocused(false);
                        if (editorRef.current.innerHTML === '') {
                            editorRef.current.innerHTML = t('text-editor-placeholder');
                        }
                    }}
                    onInput={(e) => saveState(e.currentTarget.innerHTML)}
                    className="calculator-display editor-area"
                    aria-label={t('text-editor-aria-label')}
                    placeholder={t('text-editor-placeholder')}
                />
            </div>
        </div>
    );
}