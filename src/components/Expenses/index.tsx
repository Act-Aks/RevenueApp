import ExpenseItem from './ExpenseItem';
import Card from '../Card';
import ExpensesFilter from './ExpenseFilter';
import { Text, View } from 'react-native';
import React from 'react';

interface ExpensesProps {
  items: Array<any>;
}

const Expenses: React.FC<ExpensesProps> = ({ items }) => {
  return (
    <Card>
      {/* {items.map(expense => (
        <ExpenseItem
          key={expense.date}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
      <View style={{ height: 100, width: '100%', backgroundColor: 'red' }}>
        <Text>{'sdjfkhdjhgjghj'}</Text>
      </View>
    </Card>
  );
};

export default Expenses;
