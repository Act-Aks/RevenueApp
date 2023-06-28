import { StyledDay, StyledExpenseDate, StyledMonth, StyledYear } from './style';

const ExpenseDate = ({ date }: { date: Date }) => {
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
