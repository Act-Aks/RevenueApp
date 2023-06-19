import React from 'react';
import { Text, View } from 'react-native';
import Card from '../Card';

interface ExpenseProps {
  items: Array<{
    id: string;
    title: string;
    amount: number;
    date: Date;
  }>;
}

const Expenses: React.FC<ExpenseProps> = ({ items }) => {
  return (
    <Card cardStyle={{}}>
      {items.map(expense => (
        <View key={expense.id}>
          <Text>{expense.id}</Text>
          <Text>{expense.title}</Text>
          <Text>{expense.amount}</Text>
          <Text>{expense.date.toDateString()}</Text>
        </View>
      ))}
    </Card>
  );
};

export default Expenses;
