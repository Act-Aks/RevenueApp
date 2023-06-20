import { StyleSheet } from 'react-native';

export const expenseDateStyle = StyleSheet.create({
  container: {
    width: '25%',
    borderWidth: 1,
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: '#ececec',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#2a2a2a',
  },
  month: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  year: {
    fontSize: 12,
    color: 'white',
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
