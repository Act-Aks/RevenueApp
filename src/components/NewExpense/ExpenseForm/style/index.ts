import { TextProps } from 'react-native';
import styled from 'styled-components/native';

import Card from '../../../Card';

export const NewExpenseCard = styled(Card)(props => ({
  background: props.theme.colors.light.onSecondaryContainer,
}));

export const StyledInputContainer = styled.View(props => ({
  background: props.theme.colors.light.onSecondaryContainer,
  gap: props.theme.spacing.x6,
}));

export const StyledFormInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.light.secondary,
}))(props => ({
  backgroundColor: props.theme.colors.light.background,
  color: props.theme.colors.light.onBackground,
  borderRadius: props.theme.spacing.x4,
  paddingLeft: props.theme.spacing.x4,
}));

export const StyledDateInputContainer = styled.TouchableOpacity(props => ({
  flexDirection: 'row',
  backgroundColor: props.theme.colors.light.background,
  borderRadius: props.theme.spacing.x4,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: props.theme.spacing.x6,
}));

export const DateText = styled.Text(props => ({
  backgroundColor: props.theme.colors.light.background,
  color: props.theme.colors.light.onSecondaryContainer,
  fontWeight: 'bold',
}));

export const StyledButtonContainer = styled.TouchableOpacity({});

export const ButtonLabel = styled.Text<TextProps>(props => ({
  backgroundColor: props.theme.colors.light.primary,
  color: props.theme.colors.light.background,
  padding: props.theme.spacing.x8,
  margin: props.theme.spacing.x8,
  borderRadius: props.theme.spacing.x2,
  textAlign: 'center',
}));
