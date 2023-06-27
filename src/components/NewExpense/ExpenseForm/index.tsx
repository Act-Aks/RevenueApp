import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { useRef } from 'react';

import useExpenseForm from '../../../hooks/useExpenseForm';
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

interface ExpenseFormProps {
  onSaveExpense: (data: any) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSaveExpense }) => {
  const inputContainerRef = useRef(null);
  const {
    expenseData: { title, amount, date },
    handleTitleChange,
    handleDateChange,
    handleAmountChange,
    isPickerShow,
    showPicker,
  } = useExpenseForm();

  const handleSubmit = () => {
    onSaveExpense({
      title,
      amount,
      date,
    });
    console.log('event');
    // setTitle('');
    // setAmount('');
    // setDate('');
  };

  return (
    <NewExpenseCard>
      <StyledInputContainer ref={inputContainerRef}>
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
            inputContainerRef?.current?.blur();
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
  );
};

export default ExpenseForm;
