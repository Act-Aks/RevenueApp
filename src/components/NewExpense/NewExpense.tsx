import React from 'react';
import { View } from 'react-native';

import ExpenseForm from './ExpenseForm';

interface NewExpenseProps {
  onAddExpense: (data: any) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({ onAddExpense }) => {
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
