import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';

import { Expenses, Loader, NewExpense } from '../../components';
import useAuthenticationContext from '../../services/auth/authContext';
import useExpensesContext from '../../services/expenses/expensesContext';
import { LogoutButtonContainer, LogoutImage, StyledScreen } from './style';

const DashBoard = () => {
  const navigation = useNavigation();
  const { onLogout } = useAuthenticationContext();
  const {
    state: { addNewExpense, isLoading },
  } = useExpensesContext();

  const headerRight = useCallback(
    () => (
      <LogoutButtonContainer onPress={onLogout}>
        <LogoutImage source={require('../../../assets/log_out.png')} />
      </LogoutButtonContainer>
    ),
    [onLogout],
  );

  useEffect(() => {
    navigation.setOptions({
      headerRight,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledScreen>
      <NewExpense onAddExpense={addNewExpense} />
      {isLoading ? <Loader /> : <Expenses />}
    </StyledScreen>
  );
};

export default DashBoard;
