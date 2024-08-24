import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import styles from './App.css'; // Import the CSS module

const App = () => {
  return (
    <div className={styles.appContainer}>
      <h1>Expense Tracker</h1>
      <ExpenseSummary />
      <ExpenseList />
    </div>
  );
};

export default App;
