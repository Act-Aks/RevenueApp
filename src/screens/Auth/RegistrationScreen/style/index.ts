import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Spacing } from '../../../../constants/types';
import { fontSize, spacing } from '../../../../constants';

export const StyledContainer = styled(LinearGradient).attrs({
  colors: ['#072d70', '#629ce3', '#133f75'],
  start: { x: 0.2, y: 0 },
  end: { x: 1, y: 1 },
})<{ loading?: boolean }>(props => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  opacity: props.loading ? 0.5 : 1,
}));
export const StyledRegisterBox = styled(LinearGradient).attrs({
  colors: ['#06a0b8', '#f1c40f', '#06a0b8'],
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 1 },
})`
  background-color: #07d1f0;
  opacity: 0.8;
  border-color: #07d1f0;
  border-radius: ${spacing.x6};
  padding: ${spacing.x8};
  border-width: 3px;
  width: 70%;
  height: 380px;
`;
export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView({
  flex: 1,
  width: '100%',
});
export const IconContainer = styled.View({
  justifyContent: 'center',
  alignItems: 'center',
  height: '20%',
});
export const IconImage = styled.Image`
  height: 50px;
  width: 50px;
  resize-mode: stretch;
`;
export const InputContainer = styled.View({
  height: '50%',
});
export const Input = styled.View({
  flexDirection: 'row',
  backgroundColor: '#0a3a6b',
  height: '28%',
  width: '100%',
  borderRadius: 2,
});
export const LeftInputIcon = styled.Image`
  width: 20%;
  height: 60%;
  resize-mode: contain;
  align-self: center;
`;
export const StyledTextInput = styled.TextInput.attrs({
  placeholderTextColor: 'white',
  underlineColorAndroid: 'transparent',
})`
  width: 80%;
  color: white;
  height: 100%;
`;
export const ButtonContainer = styled(LinearGradient).attrs({
  colors: ['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF'],
  start: { x: 0.0, y: 1.0 },
  end: { x: 1.0, y: 1.0 },
})({
  height: '15%',
  marginTop: 12,
  borderRadius: `${spacing.x3}`,
});
export const RegisterButton = styled.TouchableOpacity({
  flex: 1,
  width: '99%',
  alignSelf: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  borderRadius: `${spacing.x3}`,
  margin: 1,
});
export const ButtonLabel = styled.Text({
  textAlign: 'center',
  color: '#4C64FF',
  alignSelf: 'center',
});
export const Separator = styled.View<{ space: Spacing }>(props => ({
  marginBottom: props.space ?? spacing.x1,
}));
export const Footer = styled.View({
  marginTop: 12,
  alignItems: 'center',
});
export const ExtraInfo = styled.Text({
  fontSize: `${fontSize.x7}`,
  color: '#2e2e2d',
});
export const Link = styled.Text({
  color: '#5b2ffa',
  fontWeight: 'bold',
  fontSize: `${fontSize.x8}`,
});
