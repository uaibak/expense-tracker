import React, { useState, useEffect } from 'react';
import axios from './api';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';
import styles from './ExpenseList.module.css';

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('expenses/');
        setExpenses(response.data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, []);

  const handleAddExpense = async (expense) => {
    try {
      if (editingExpense) {
        const response = await axios.put(`expenses/${editingExpense.id}/`, expense);
        setExpenses(expenses.map(e => e.id === editingExpense.id ? response.data : e));
        setEditingExpense(null);
      } else {
        const response = await axios.post('expenses/', expense);
        setExpenses([...expenses, response.data]);
      }
    } catch (error) {
      console.error('Error adding or updating expense:', error);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await axios.delete(`expenses/${id}/`);
      setExpenses(expenses.filter(e => e.id !== id));
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
  };

  return (
    <div className={styles.listContainer}>
      <ExpenseForm initialExpense={editingExpense} onSubmit={handleAddExpense} />
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onEdit={handleEditExpense}
          onDelete={handleDeleteExpense}
          className={styles.expenseItem}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
