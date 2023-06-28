import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';

import { Expenses, NewExpense } from '../../components';
import useAuthenticationContext from '../../services/auth/authContext';
import { LogoutButtonContainer, LogoutImage, StyledScreen } from './style';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { onLogout } = useAuthenticationContext();

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

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e6',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <StyledScreen>
      <NewExpense onAddExpense={() => {}} />
      <Expenses expenseList={expenses} />
    </StyledScreen>
  );
};

export default HomeScreen;
