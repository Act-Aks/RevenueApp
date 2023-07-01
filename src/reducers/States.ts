import { ExpenseData } from '../types';

export interface ExpensesState {
  expenses: Array<ExpenseData>;
  setExpenses: (data: Array<ExpenseData>) => void;
  addNewExpense: (expense: ExpenseData) => void;
  isLoading?: boolean;
}
