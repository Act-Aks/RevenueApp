import { View } from 'react-native';
import { StyledDay, StyledExpenseDate, StyledMonth, StyledYear } from './style';
import React from 'react';
interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate: React.FC<ExpenseDateProps> = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <StyledExpenseDate>
      <StyledMonth>{month}</StyledMonth>
      <StyledYear>{year}</StyledYear>
      <StyledDay>{day}</StyledDay>
    </StyledExpenseDate>
  );
};

export default ExpenseDate;
