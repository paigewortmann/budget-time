import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Bill } from './types';
import IncomeInput from './components/IncomeInput';
import BillForm from './components/BillForm';
import Summary from './components/Summary';
import Calendar from './components/Calendar';

function App() {
  const [income, setIncome] = useState<number>(0);
  const [bills, setBills] = useState<Bill[]>([]);

  const addBill = (bill: Bill) => setBills([...bills, bill]);

  const totalBills = bills.reduce((sum, b) => sum + b.amount, 0);
  const remaining = income - totalBills;

  return (
     <div style={{ padding: "1rem" }}>
      <h1>Monthly Budget Calendar</h1>
      <IncomeInput income={income} setIncome={setIncome} />
      <BillForm onAddBill={addBill} />
      <Summary income={income} totalBills={totalBills} remaining={remaining} />
      <Calendar bills={bills} />
    </div>
  );
}

export default App;
