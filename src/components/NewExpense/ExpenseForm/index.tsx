import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import useExpenseForm from '../../../hooks/useExpenseForm';
import { ExpenseData } from '../../../types';
import Icon from '../../Icon';
import {
  ButtonLabel,
  DateText,
  NewExpenseCard,
  StyledButtonContainer,
  StyledDateInputContainer,
  StyledFormInput,
  StyledInputContainer,
} from './style';

export type ExpenseFormData = Pick<ExpenseData, 'amount' | 'date' | 'title'>;

interface ExpenseFormProps {
  onSaveExpense: (data: ExpenseFormData) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSaveExpense }) => {
  const {
    expenseData: { title, amount, date },
    handleTitleChange,
    handleDateChange,
    handleAmountChange,
    isPickerShow,
    showPicker,
    clearFormData,
  } = useExpenseForm();

  const handleSubmit = () => {
    onSaveExpense({
      title,
      amount: parseFloat(amount),
      date: moment(date).toISOString(),
    });
    clearFormData();
  };

  const dismissKetboard = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback onPress={dismissKetboard}>
      <NewExpenseCard>
        <StyledInputContainer>
          <StyledFormInput
            value={title}
            placeholder={'Title'}
            onChangeText={handleTitleChange}
          />
          <StyledFormInput
            value={amount}
            keyboardType={'numeric'}
            placeholder={'Amount spent'}
            onChangeText={handleAmountChange}
          />
          <StyledDateInputContainer
            onPress={() => {
              showPicker();
              Keyboard.dismiss();
            }}
            activeOpacity={1}>
            <DateText>{moment(date).format('DD/MM/YYYY')}</DateText>
            <Icon name="calendar" size={24} />
          </StyledDateInputContainer>
        </StyledInputContainer>
        {isPickerShow && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={'default'}
            is24Hour={true}
            onChange={handleDateChange}
          />
        )}
        <StyledButtonContainer onPress={handleSubmit} activeOpacity={0.5}>
          <ButtonLabel>{'Add Expense'}</ButtonLabel>
        </StyledButtonContainer>
      </NewExpenseCard>
    </TouchableWithoutFeedback>
  );
};

export default ExpenseForm;
