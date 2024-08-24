import React, { useState, useEffect } from 'react';
import styles from './ExpenseForm.module.css';

const ExpenseForm = ({ initialExpense = {}, onSubmit }) => {
  const [expense, setExpense] = useState({
    amount: initialExpense?.amount || '',
    description: initialExpense?.description || '',
    category: initialExpense?.category || ''
  });

  useEffect(() => {
    setExpense({
      amount: initialExpense?.amount || '',
      description: initialExpense?.description || '',
      category: initialExpense?.category || ''
    });
  }, [initialExpense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.amount && expense.description && expense.category) {
      onSubmit(expense);
      setExpense({ amount: '', description: '', category: '' }); 
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="amount">Amount</label>
        <input
          className={styles.formInput}
          type="number"
          name="amount"
          id="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="description">Description</label>
        <input
          className={styles.formInput}
          type="text"
          name="description"
          id="description"
          value={expense.description}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="category">Category</label>
        <input
          className={styles.formInput}
          type="text"
          name="category"
          id="category"
          value={expense.category}
          onChange={handleChange}
        />
      </div>

      <button className={styles.submitButton} type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
