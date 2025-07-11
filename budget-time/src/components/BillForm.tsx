import React, { useState } from 'react';
import { Bill } from '../types';

type BillFormProps = {
  onAddBill: (bill: Bill) => void;
};

const BillForm: React.FC<BillFormProps> = ({ onAddBill }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    const parsedDate = parseInt(date);

    if (!name || isNaN(parsedAmount) || isNaN(parsedDate)) return;

    const newBill: Bill = {
      name,
      amount: parsedAmount,
      date: parsedDate,
    };

    onAddBill(newBill);
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <h2>Add a Bill</h2>
      <input
        type="text"
        placeholder="Bill Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{ marginRight: '0.5rem', padding: '0.5rem' }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        style={{ marginRight: '0.5rem', padding: '0.5rem' }}
      />
      <input
        type="number"
        placeholder="Due Date (1-31)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={1}
        max={31}
        required
        style={{ marginRight: '0.5rem', padding: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.5rem 1rem' }}>
        Add
      </button>
    </form>
  );
};

export default BillForm;
