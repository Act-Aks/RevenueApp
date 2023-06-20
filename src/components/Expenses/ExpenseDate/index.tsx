import { Text, View } from 'react-native';
import { expenseDateStyle } from './style';

const ExpenseDate = ({ date }: { date: Date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <View style={expenseDateStyle.container}>
      <Text style={expenseDateStyle.month}>{month}</Text>
      <Text style={expenseDateStyle.year}>{year}</Text>
      <Text style={expenseDateStyle.day}>{day}</Text>
    </View>
  );
};

export default ExpenseDate;
