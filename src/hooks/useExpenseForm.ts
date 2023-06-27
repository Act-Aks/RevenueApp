import { useState } from 'react';

const useExpenseForm = () => {
  const [expenseData, setExpenseData] = useState({
    title: '',
    amount: 0,
    date: '',
  });
  const [open, setOpen] = useState<boolean>(false);

  const handleTitleChange = (title: string) => {
    setExpenseData(prevValue => ({
      ...prevValue,
      title,
    }));
  };

  const handleAmountChange = (amount: string) => {
    setExpenseData(prevValue => ({
      ...prevValue,
      amount: parseInt(amount),
    }));
  };

  const handleDateChange = (date: Date) => {
    setExpenseData(prevValue => ({
      ...prevValue,
      date: date.toISOString(),
    }));
  };

  const handleClosePopup = () => {
    setOpen(false);
  };

  return {
    expenseData,
    open,
    handleTitleChange,
    handleAmountChange,
    handleDateChange,
    handleClosePopup,
    setExpenseData,
    setOpen,
  };
};

export default useExpenseForm;
