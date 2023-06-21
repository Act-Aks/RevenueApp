import React from 'react';
import { Text, View } from 'react-native';

import { ExpenseData } from '..';
import Card from '../../Card';
import ExpenseDate from '../ExpenseDate';
import { expenseItemStyle } from './style';

interface ExpenseItemProps extends ExpenseData {}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ title, amount, date }) => {
  return (
    <Card style={expenseItemStyle.card}>
      <ExpenseDate date={date} />
      <View style={expenseItemStyle.textContainer}>
        <Text style={expenseItemStyle.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={expenseItemStyle.price} numberOfLines={1}>
          {`Rs. ${amount}`}
        </Text>
      </View>
    </Card>
  );
};

export default ExpenseItem;
