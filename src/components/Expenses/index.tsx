import { StyleSheet, Text } from 'react-native';

import { colors } from '../../infrastructure/theme';
import useExpensesContext from '../../services/expenses/expensesContext';
import Card from '../Card';
import { ScrollableContainer } from '../Container';
import ExpenseItem from './ExpenseItem';

const Expenses = () => {
  const {
    state: { expenses },
  } = useExpensesContext();

  if (expenses.length === 0) {
    return (
      <Card>
        <Text style={styles.emptyState}>{'No Expenses Added'}</Text>
      </Card>
    );
  }

  return (
    <Card style={styles.card}>
      <ScrollableContainer
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {expenses?.map(expense => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </ScrollableContainer>
    </Card>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light.onSecondaryContainer,
  },
  scrollView: {
    gap: 12,
    backgroundColor: colors.light.onSecondaryContainer,
  },
  emptyState: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: colors.light.onPrimaryContainer,
    fontWeight: 'bold',
  },
});
