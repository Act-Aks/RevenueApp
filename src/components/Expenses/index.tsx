import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Card from '../Card';
import { ScrollableContainer } from '../Container';
import ExpenseItem from './ExpenseItem';

export interface ExpenseData {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

interface ExpenseProps {
  expenseList: Array<ExpenseData>;
}

const Expenses: React.FC<ExpenseProps> = ({ expenseList }) => {
  return (
    <Card style={styles.card}>
      <ScrollableContainer
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {expenseList.map(expense => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </ScrollableContainer>
    </Card>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgb(31, 31, 31)',
  },
  scrollView: {
    gap: 12,
    backgroundColor: 'rgb(31, 31, 31)',
  },
});
