import React from 'react';
import ExpenseDate from '../ExpenseDate';
import { ItemDescription, ItemDescriptionText, ItemPrice } from './style';
import Card from '../../Card';

interface ExpenseItemProps {
  date: Date;
  title: string;
  amount: number;
}
const ExpenseItem: React.FC<ExpenseItemProps> = ({ date, title, amount }) => {
  return (
    <Card>
      {/* <ExpenseDate date={date} /> */}
      <ItemDescription>
        <ItemDescriptionText>{title}</ItemDescriptionText>
        <ItemPrice>{`Rs.${amount}`}</ItemPrice>
      </ItemDescription>
    </Card>
  );
};

export default ExpenseItem;
