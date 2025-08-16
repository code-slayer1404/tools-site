import { useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { languageData } from '../utils/constants';

export default function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });

    const value = {
        language,
        t: (key, params) => {
            const translation = languageData[language][key];
            return typeof translation === 'function'
                ? translation(params)
                : translation;
        },
        changeLanguage: (lang) => {
            setLanguage(lang);
            localStorage.setItem('language', lang);
        }
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}