import React from "react";

type SummaryProps = {
    income: number;
    totalBills: number;
    remaining: number;
};

const Summary: React.FC<SummaryProps> = ({ income, totalBills, remaining }) => {
    return (
        <div style={{ marginBottom: '2rem' }}>
            <h2>Summary</h2>
            <p><strong>Income:</strong> ${income.toFixed(2)}</p>
            <p><strong>Total Bills:</strong> ${totalBills.toFixed(2)}</p>
            <p style={{ color: remaining < 0 ? 'red' : 'green' }}>
                <strong>Remaining:</strong> ${remaining.toFixed(2)}
            </p>
        </div>
    );
}

export default Summary;