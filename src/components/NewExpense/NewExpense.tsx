import React from 'react';
import { View } from 'react-native';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({
  onAddExpense,
}: {
  onAddExpense: (data: any) => void;
}) => {
  const handleOnSaveExpense = expenseFormData => {
    const expenseData = {
      ...expenseFormData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <View>
      <ExpenseForm onSaveExpense={handleOnSaveExpense} />
    </View>
  );
};

export default NewExpense;
