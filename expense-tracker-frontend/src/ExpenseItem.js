import React from 'react';
import styles from './ExpenseItem.module.css'; // Import the CSS module

const ExpenseItem = ({ expense, onEdit, onDelete }) => {
  return (
    <div className={styles.expenseItem}>
      <h3>{expense.category}</h3>
      <p className={styles.amount}>Amount: PKR {expense.amount}</p>
      <p>Date: {expense.date}</p>
      <p>Description: {expense.description}</p>
      <div className={styles.buttons}>
        <button className={styles.editButton} onClick={() => onEdit(expense)}>Edit</button>
        <button className={styles.deleteButton} onClick={() => onDelete(expense.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
