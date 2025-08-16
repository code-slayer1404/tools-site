import { useState, useEffect } from 'react';

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

