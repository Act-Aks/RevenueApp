import { StyleSheet } from 'react-native';

export const expenseItemStyle = StyleSheet.create({
  card: {
    height: 110,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: -2,
      height: 4,
    },
    backgroundColor: '#4b4b4b',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    color: 'white',
    columnGap: 12,
  },
  title: {
    width: '60%',
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  price: {
    width: '40%',
    color: 'white',
    padding: 8,
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#40005d',
    borderColor: 'white',
    borderStyle: 'solid',
    fontWeight: 'bold',
  },
});
