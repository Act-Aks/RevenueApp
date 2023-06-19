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
    <Card>
      {items.map(expense => (
        <View>
          <Text>{expense.title}</Text>
        </View>
      ))}
    </Card>
  );
};

export default Expenses;
