import React from "react";

interface IncomeInputProps {
    income: number;
    setIncome: (income: number) => void;
}

const IncomeInput: React.FC<IncomeInputProps> = ({ income, setIncome }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setIncome(isNaN(value) ? 0 : value);
    }
        return (
            <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="income" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Monthly Income:
                </label>
                <input
                    type="number"
                    id="income"
                    value={income}
                    onChange={handleChange}
                    placeholder="e.g. 2500"
                    style={{ padding: '0.5rem', width: '200px' }}
                />
            </div>
        );
    }

    export default IncomeInput;