import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

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
});

export const StyledDataContainer = styled.View(props => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: props.theme.spacing.x6,
  color: props.theme.colors.bg.primary,
  columnGap: props.theme.spacing.x6,
}));

export const Title = styled.Text(props => ({
  width: '60%',
  color: props.theme.colors.bg.primary,
  fontSize: props.theme.fontSize.x7,
  fontWeight: '500',
}));

export const Price = styled.Text(props => ({
  width: '40%',
  color: props.theme.colors.bg.primary,
  padding: props.theme.spacing.x4,
  fontSize: props.theme.spacing.x6,
  borderWidth: 1,
  borderRadius: props.theme.spacing.x6,
  backgroundColor: '#40005d',
  borderColor: props.theme.colors.bg.primary,
  borderStyle: 'solid',
  fontWeight: 'bold',
}));
