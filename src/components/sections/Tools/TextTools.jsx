

import { useState, useEffect } from 'react';
import { useLanguage } from '../../../contexts/useLanguage';
import '../../../styles/components/texttools.css';

export default function TextTools() {
    const { t } = useLanguage();
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        setWordCount(words.length);
        setCharCount(text.length);
    }, [text]);

    const changeCase = (caseType) => {
        switch (caseType) {
            case 'upper':
                setText(text.toUpperCase());
                break;
            case 'lower':
                setText(text.toLowerCase());
                break;
            case 'title':
                setText(text.toLowerCase().split(' ').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' '));
                break;
            default:
                break;
        }
    };

    return (
        <div className="calculator-container">
            <div className="calculator-display">
                <h3 className="text-tools-title">{t('text-tools-title')}</h3>
            </div>

            <div className="text-tools-content">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={t('text-tools-placeholder')}
                    className="calculator-display tool-textarea"
                    rows="8"
                    dir="auto" // Added to fix text direction
                />

                <div className="text-counts">
                    <span>{t('word-count')} <strong>{wordCount}</strong></span>
                    <span>{t('char-count')} <strong>{charCount}</strong></span>
                </div>

                <div className="text-tools-buttons">
                    <button
                        onClick={() => changeCase('upper')}
                        className="calc-btn calc-btn-number"
                    >
                        UPPERCASE
                    </button>
                    <button
                        onClick={() => changeCase('lower')}
                        className="calc-btn calc-btn-number"
                    >
                        lowercase
                    </button>
                    <button
                        onClick={() => changeCase('title')}
                        className="calc-btn calc-btn-number"
                    >
                        Title Case
                    </button>
                </div>
            </div>
        </div>
    );
}

