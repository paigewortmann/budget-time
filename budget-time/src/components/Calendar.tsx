import React from "react";
import { Bill } from "../types";

type CalendarProps = {
  bills: Bill[];
};

const Calendar: React.FC<CalendarProps> = ({ bills }) => {
    const daysInMonth = 31; // simplified

    const billsByDate: Record<number, Bill[]> = {};
    bills.forEach(bill => {
        if (!billsByDate[bill.date]) {
            billsByDate[bill.date] = [];
        }
        billsByDate[bill.date].push(bill);
    });

    return (
         <div>
      <h2>Calendar View</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '10px',
        }}
      >
        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const billsForDay = billsByDate[day] || [];

          return (
            <div
              key={day}
              style={{
                border: '1px solid #ccc',
                padding: '0.5rem',
                minHeight: '60px',
                backgroundColor: billsForDay.length ? '#f9f9f9' : '#fff',
              }}
            >
              <strong>{day}</strong>
              {billsForDay.map((bill, idx) => (
                <div key={idx} style={{ fontSize: '0.8rem' }}>
                  💸 {bill.name} (${bill.amount})
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
    )
};

export default Calendar;