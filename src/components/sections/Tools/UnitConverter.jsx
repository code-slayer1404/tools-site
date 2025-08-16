// import { useState } from 'react';
// import { useLanguage } from '../../../contexts/useLanguage';
// import '../../../styles/components/unitconverter.css';

// export default function UnitConverter() {
//     const { t } = useLanguage();
//     const [celsius, setCelsius] = useState('');
//     const [fahrenheit, setFahrenheit] = useState('');
//     const [kilograms, setKilograms] = useState('');
//     const [pounds, setPounds] = useState('');

//     const handleCelsiusChange = (e) => {
//         const value = e.target.value;
//         setCelsius(value);
//         setFahrenheit(value === '' ? '' : (parseFloat(value) * 9 / 5 + 32).toFixed(2));
//     };

//     const handleFahrenheitChange = (e) => {
//         const value = e.target.value;
//         setFahrenheit(value);
//         setCelsius(value === '' ? '' : ((parseFloat(value) - 32) * 5 / 9).toFixed(2));
//     };

//     const handleKilogramsChange = (e) => {
//         const value = e.target.value;
//         setKilograms(value);
//         setPounds(value === '' ? '' : (parseFloat(value) * 2.20462).toFixed(2));
//     };

//     const handlePoundsChange = (e) => {
//         const value = e.target.value;
//         setPounds(value);
//         setKilograms(value === '' ? '' : (parseFloat(value) / 2.20462).toFixed(2));
//     };

//     return (
//         <div className="tool-card">
//             <h3 className="tool-title">{t('unit-converter-title') || 'Unit Converter'}</h3>

//             <div className="unit-converter-content">
//                 {/* Temperature Converter Section */}
//                 <div className="converter-section">
//                     <h4 className="converter-subtitle">
//                         {t('temperature-converter') || 'Temperature Converter'}
//                     </h4>
//                     <div className="converter-row">
//                         <div className="converter-input-group">
//                             <input
//                                 type="number"
//                                 value={celsius}
//                                 onChange={handleCelsiusChange}
//                                 placeholder={t('celsius-placeholder') || 'Celsius'}
//                                 className="tool-input"
//                             />
//                             <span className="unit-label">°C</span>
//                         </div>
//                         <span className="converter-equals">=</span>
//                         <div className="converter-input-group">
//                             <input
//                                 type="number"
//                                 value={fahrenheit}
//                                 onChange={handleFahrenheitChange}
//                                 placeholder={t('fahrenheit-placeholder') || 'Fahrenheit'}
//                                 className="tool-input"
//                             />
//                             <span className="unit-label">°F</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Weight Converter Section */}
//                 <div className="converter-section">
//                     <h4 className="converter-subtitle">
//                         {t('weight-converter') || 'Weight Converter'}
//                     </h4>
//                     <div className="converter-row">
//                         <div className="converter-input-group">
//                             <input
//                                 type="number"
//                                 value={kilograms}
//                                 onChange={handleKilogramsChange}
//                                 placeholder={t('kg-placeholder') || 'Kilograms'}
//                                 className="tool-input"
//                             />
//                             <span className="unit-label">kg</span>
//                         </div>
//                         <span className="converter-equals">=</span>
//                         <div className="converter-input-group">
//                             <input
//                                 type="number"
//                                 value={pounds}
//                                 onChange={handlePoundsChange}
//                                 placeholder={t('pound-placeholder') || 'Pounds'}
//                                 className="tool-input"
//                             />
//                             <span className="unit-label">lb</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useState } from 'react';
import { useLanguage } from '../../../contexts/useLanguage';
import '../../../styles/components/unitconverter.css';

export default function UnitConverter() {
    const { t } = useLanguage();
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [kilograms, setKilograms] = useState('');
    const [pounds, setPounds] = useState('');

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);
        setFahrenheit(value === '' ? '' : (parseFloat(value) * 9 / 5 + 32).toFixed(2));
    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        setCelsius(value === '' ? '' : ((parseFloat(value) - 32) * 5 / 9).toFixed(2));
    };

    const handleKilogramsChange = (e) => {
        const value = e.target.value;
        setKilograms(value);
        setPounds(value === '' ? '' : (parseFloat(value) * 2.20462).toFixed(2));
    };

    const handlePoundsChange = (e) => {
        const value = e.target.value;
        setPounds(value);
        setKilograms(value === '' ? '' : (parseFloat(value) / 2.20462).toFixed(2));
    };

    return (
        <div className="calculator-container">
            <div className="calculator-display">
                <h3 className="unit-converter-title">{t('unit-converter-title') || 'Unit Converter'}</h3>
            </div>

            <div className="unit-converter-content">
                {/* Temperature Converter Section */}
                <div className="converter-section">
                    <h4 className="converter-subtitle">
                        {t('temperature-converter') || 'Temperature Converter'}
                    </h4>
                    <div className="converter-row">
                        <div className="converter-input-group">
                            <input
                                type="number"
                                value={celsius}
                                onChange={handleCelsiusChange}
                                placeholder={t('celsius-placeholder') || 'Celsius'}
                                className="calc-input"
                            />
                            <span className="unit-label">°C</span>
                        </div>
                        <span className="converter-equals">=</span>
                        <div className="converter-input-group">
                            <input
                                type="number"
                                value={fahrenheit}
                                onChange={handleFahrenheitChange}
                                placeholder={t('fahrenheit-placeholder') || 'Fahrenheit'}
                                className="calc-input"
                            />
                            <span className="unit-label">°F</span>
                        </div>
                    </div>
                </div>

                {/* Weight Converter Section */}
                <div className="converter-section">
                    <h4 className="converter-subtitle">
                        {t('weight-converter') || 'Weight Converter'}
                    </h4>
                    <div className="converter-row">
                        <div className="converter-input-group">
                            <input
                                type="number"
                                value={kilograms}
                                onChange={handleKilogramsChange}
                                placeholder={t('kg-placeholder') || 'Kilograms'}
                                className="calc-input"
                            />
                            <span className="unit-label">kg</span>
                        </div>
                        <span className="converter-equals">=</span>
                        <div className="converter-input-group">
                            <input
                                type="number"
                                value={pounds}
                                onChange={handlePoundsChange}
                                placeholder={t('pound-placeholder') || 'Pounds'}
                                className="calc-input"
                            />
                            <span className="unit-label">lb</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}