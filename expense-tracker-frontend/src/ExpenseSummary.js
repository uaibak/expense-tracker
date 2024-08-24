import React, { useState, useEffect } from 'react';
import axios from './api';
import styles from './ExpenseSummary.module.css'; 
const ExpenseSummary = () => {
  const [summary, setSummary] = useState({ total: 0, byCategory: {} });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get('expenses/summary/');
        setSummary(response.data);
      } catch (error) {
        console.error('Error fetching summary:', error);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className={styles.summaryContainer}>
      <h2>Expense Summary</h2>
      <p>Total: PKR {summary.total}</p>
      <h3>By Category:</h3>
      <ul>
        {Object.entries(summary.byCategory).map(([category, amount]) => (
          <li key={category}>{category}: PKR {amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
