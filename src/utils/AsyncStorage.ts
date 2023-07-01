import AsyncStorage from '@react-native-async-storage/async-storage';

import { ExpenseData } from '../types';

enum KEYS {
  EXPENSE_DATA = 'ExpenseData',
}

export const saveExpense = async (userId: string, data: ExpenseData[]) => {
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem(`${KEYS.EXPENSE_DATA}-${userId}`, jsonData);
  } catch (e) {
    console.error('Could not save the expenses to storage', e);
  }
};

export const getExpenses = async (userId: string) => {
  try {
    const jsonData = await AsyncStorage.getItem(
      `${KEYS.EXPENSE_DATA}-${userId}`,
    );
    return jsonData !== null ? JSON.parse(jsonData) : null;
  } catch (e) {
    console.error('Could not load the expenses from storage', e);
  }
};
