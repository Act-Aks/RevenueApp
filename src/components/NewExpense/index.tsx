import { View } from 'react-native';

import { ExpenseData } from '../../types';
import ExpenseForm, { ExpenseFormData } from './ExpenseForm';

interface NewExpenseProps {
  onAddExpense: (data: ExpenseData) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({ onAddExpense }) => {
  const handleOnSaveExpense = (expenseFormData: ExpenseFormData) => {
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
