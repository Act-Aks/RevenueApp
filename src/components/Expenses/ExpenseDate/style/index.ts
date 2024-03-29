import styled from 'styled-components/native';

export const StyledExpenseDate = styled.View(props => ({
  width: '25%',
  borderRadius: props.theme.spacing.x6,
  borderStyle: 'solid',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: props.theme.colors.light.onSecondaryContainer,
}));

export const StyledMonth = styled.Text(props => ({
  fontSize: props.theme.fontSize.x6,
  fontWeight: 'bold',
  color: props.theme.colors.light.onSecondary,
}));

export const StyledYear = styled.Text(props => ({
  fontSize: props.theme.fontSize.x6,
  color: props.theme.colors.light.onSecondary,
}));

export const StyledDay = styled.Text(props => ({
  fontSize: props.theme.fontSize.x9,
  color: props.theme.colors.light.onSecondary,
  fontWeight: 'bold',
}));
