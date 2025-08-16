import { useState } from 'react';
import '../../../styles/components/calculator.css';

export default function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');
    const [prevValue, setPrevValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const clearDisplay = () => {
        setDisplayValue('0');
        setPrevValue(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    const inputDigit = (digit) => {
        if (waitingForOperand) {
            setDisplayValue(String(digit));
            setWaitingForOperand(false);
        } else {
            setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
        }
    };

    const inputDecimal = () => {
        if (waitingForOperand) {
            setDisplayValue('0.');
            setWaitingForOperand(false);
            return;
        }

        if (!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.');
        }
    };

    const performOperation = (nextOperation) => {
        const inputValue = parseFloat(displayValue);

        if (prevValue === null) {
            setPrevValue(inputValue);
        } else if (operation) {
            const currentValue = prevValue || 0;
            let newValue;

            switch (operation) {
                case '+':
                    newValue = currentValue + inputValue;
                    break;
                case '-':
                    newValue = currentValue - inputValue;
                    break;
                case '*':
                    newValue = currentValue * inputValue;
                    break;
                case '/':
                    newValue = currentValue / inputValue;
                    break;
                default:
                    newValue = inputValue;
            }

            setPrevValue(newValue);
            setDisplayValue(String(newValue));
        }

        setWaitingForOperand(true);
        setOperation(nextOperation);
    };

    const handleEquals = () => {
        if (!operation || prevValue === null) return;

        performOperation(null);
        setOperation(null);
    };

    const backspace = () => {
        if (displayValue.length === 1) {
            setDisplayValue('0');
        } else {
            setDisplayValue(displayValue.slice(0, -1));
        }
    };

    return (
        <div className="calculator-container">
            <div className="calculator-display" id="calcDisplay">
                {displayValue}
            </div>

            <div className="calculator-buttons">
                {/* Row 1 */}
                <button
                    onClick={clearDisplay}
                    className="calc-btn calc-btn-function calc-btn-clear"
                >
                    AC
                </button>
                <button
                    onClick={backspace}
                    className="calc-btn calc-btn-function"
                >
                    ←
                </button>
                <button
                    onClick={() => performOperation('/')}
                    className="calc-btn calc-btn-operator"
                >
                    ÷
                </button>

                {/* Row 2 */}
                <button
                    onClick={() => inputDigit(7)}
                    className="calc-btn calc-btn-number"
                >
                    7
                </button>
                <button
                    onClick={() => inputDigit(8)}
                    className="calc-btn calc-btn-number"
                >
                    8
                </button>
                <button
                    onClick={() => inputDigit(9)}
                    className="calc-btn calc-btn-number"
                >
                    9
                </button>
                <button
                    onClick={() => performOperation('*')}
                    className="calc-btn calc-btn-operator"
                >
                    ×
                </button>

                {/* Row 3 */}
                <button
                    onClick={() => inputDigit(4)}
                    className="calc-btn calc-btn-number"
                >
                    4
                </button>
                <button
                    onClick={() => inputDigit(5)}
                    className="calc-btn calc-btn-number"
                >
                    5
                </button>
                <button
                    onClick={() => inputDigit(6)}
                    className="calc-btn calc-btn-number"
                >
                    6
                </button>
                <button
                    onClick={() => performOperation('-')}
                    className="calc-btn calc-btn-operator"
                >
                    -
                </button>

                {/* Row 4 */}
                <button
                    onClick={() => inputDigit(1)}
                    className="calc-btn calc-btn-number"
                >
                    1
                </button>
                <button
                    onClick={() => inputDigit(2)}
                    className="calc-btn calc-btn-number"
                >
                    2
                </button>
                <button
                    onClick={() => inputDigit(3)}
                    className="calc-btn calc-btn-number"
                >
                    3
                </button>
                <button
                    onClick={() => performOperation('+')}
                    className="calc-btn calc-btn-operator"
                >
                    +
                </button>

                {/* Row 5 */}
                <button
                    onClick={() => inputDigit(0)}
                    className="calc-btn calc-btn-number calc-btn-zero"
                >
                    0
                </button>
                <button
                    onClick={inputDecimal}
                    className="calc-btn calc-btn-number"
                >
                    .
                </button>
                <button
                    onClick={handleEquals}
                    className="calc-btn calc-btn-equals"
                >
                    =
                </button>
            </div>
        </div>
    );
}