import { Button, TextInput, View } from 'react-native';

import useExpenseForm from '../../../hooks/useExpenseForm';

interface ExpenseFormProps {
  onSaveExpense: (data: any) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSaveExpense }) => {
  const {
    expenseData: { title, amount, date },
    handleTitleChange,
  } = useExpenseForm();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSaveExpense({
      title,
      amount,
      date,
    });
    // setTitle('');
    // setAmount('');
    // setDate('');
  };

  return (
    <View style={{ backgroundColor: 'red', padding: 16 }}>
      <TextInput value={title} onChangeText={handleTitleChange} />
      <Button title={'Add Expense'} onPress={handleSubmit} />
    </View>
  );
};

export default ExpenseForm;
