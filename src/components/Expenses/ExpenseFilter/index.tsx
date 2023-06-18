import React from 'react';
import {
  ExpenseFilterControl,
  ExpenseFilterLabel,
  StyledExpenseFilter,
} from './style';

const ExpensesFilter = () => {
  // const handleSelect = event => {
  //   props.onChangeYear(event.target.value);
  // };

  return (
    <StyledExpenseFilter>
      <ExpenseFilterControl>
        <ExpenseFilterLabel>{'Filter by year'}</ExpenseFilterLabel>
      </ExpenseFilterControl>
    </StyledExpenseFilter>
  );
};

export default ExpensesFilter;
