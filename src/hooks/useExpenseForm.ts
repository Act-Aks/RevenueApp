import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useState } from 'react';

const useExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({
    title: '',
    amount: '',
    date: new Date(Date.now()),
  });

  const [isPickerShow, setIsPickerShow] = useState(false);

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const hidePicker = () => {
    setIsPickerShow(false);
  };

  const handleTitleChange = (title: string) => {
    setExpenseData(prevValue => ({
      ...prevValue,
      title,
    }));
  };

  const handleAmountChange = (amount: string) => {
    setExpenseData(prevValue => ({
      ...prevValue,
      amount: amount,
    }));
  };

  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    if (date) {
      setExpenseData(prevValue => ({
        ...prevValue,
        date,
      }));
    }
    hidePicker();
  };

  const clearFormData = () =>
    setExpenseData(prevData => ({
      ...prevData,
      amount: '',
      title: '',
      date: new Date(),
    }));

  return {
    expenseData,
    isPickerShow,
    handleTitleChange,
    handleAmountChange,
    handleDateChange,
    setExpenseData,
    showPicker,
    clearFormData,
  };
};

export default useExpenseForm;
