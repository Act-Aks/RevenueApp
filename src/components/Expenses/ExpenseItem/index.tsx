import React from 'react';

import { ExpenseData } from '../../../types';
import Card from '../../Card';
import ExpenseDate from '../ExpenseDate';
import { expenseItemStyle, Price, StyledDataContainer, Title } from './style';

interface ExpenseItemProps extends ExpenseData {}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ title, amount, date }) => {
  return (
    <Card style={expenseItemStyle.card}>
      <ExpenseDate date={date} />
      <StyledDataContainer>
        <Title numberOfLines={2}>{title}</Title>
        <Price numberOfLines={1}>{`Rs. ${amount}`}</Price>
      </StyledDataContainer>
    </Card>
  );
};

export default ExpenseItem;
