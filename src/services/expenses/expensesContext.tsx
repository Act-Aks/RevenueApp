import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

import { ExpensesActions } from '../../reducers/expenses/actions';
import {
  ExpensesReducer,
  expensesReducer,
} from '../../reducers/expenses/reducer';
import { ExpensesState } from '../../reducers/States';
import { ExpenseData } from '../../types';
import {
  clearExpenses,
  getExpenses,
  saveExpense,
} from '../../utils/AsyncStorage';
import useAuthenticationContext from '../auth/authContext';

const initialState: ExpensesState = {
  expenses: [],
  addNewExpense: () => {},
  setExpenses: () => {},
};

interface Context {
  state: ExpensesState;
  dispatch?: React.Dispatch<ExpensesActions>;
}

const ExpensesContext = createContext<Context>({
  state: initialState,
});

interface ExpensesProviderProps {
  children: React.ReactNode;
}

export const ExpensesProvider = ({ children }: ExpensesProviderProps) => {
  const { user } = useAuthenticationContext();
  const [state, dispatch] = useReducer<ExpensesReducer>(
    expensesReducer,
    initialState,
  );
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user && user.uid) {
      loadExpenses(user.uid);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (user && user.uid && state.expenses.length) {
      saveExpense(user.uid, state.expenses);
    }
    console.log(state.expenses);
  }, [user, state.expenses]);

  const addNewExpense = (expense: ExpenseData) => {
    dispatch({ type: 'AddExpense', payload: expense });
  };

  const setExpenses = (expenses: ExpenseData[]) => {
    dispatch({ type: 'SetExpense', payload: expenses });
  };

  const loadExpenses = async (id: string) => {
    setLoading(true);
    const savedExpenses = await getExpenses(id);
    if (savedExpenses) {
      setExpenses(savedExpenses);
    }
    setLoading(false);
  };

  const clearAllExpenses = (id: string) => {
    clearExpenses(id);
  };

  const contextValue: ExpensesState = {
    ...state,
    addNewExpense,
    setExpenses,
    clearAllExpenses,
    isLoading,
  };

  return (
    <ExpensesContext.Provider value={{ state: contextValue, dispatch }}>
      {children}
    </ExpensesContext.Provider>
  );
};

const useExpensesContext = () => {
  const context = useContext(ExpensesContext);

  if (context === null) {
    throw new Error('Error in ExpensesContext');
  }

  return context;
};

export default useExpensesContext;
