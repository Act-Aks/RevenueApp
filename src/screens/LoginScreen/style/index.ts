import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Spacing, spacing } from '../../../constants/spacing';

export const StyledContainer = styled(LinearGradient).attrs({
  colors: ['#072d70', '#629ce3', '#133f75'],
  start: { x: 0.2, y: 0 },
  end: { x: 1, y: 1 },
})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const StyledLoginBox = styled(LinearGradient).attrs({
  colors: ['#06a0b8', '#f1c40f', '#06a0b8'],
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 1 },
})`
  background-color: #07d1f0;
  opacity: 0.8;
  border-radius: 12px;
  border-color: #07d1f0;
  padding: 16px;
  border-width: 3px;
  width: 70%;
  height: 280px;
`;
export const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 30%;
`;
export const AvatarImage = styled.Image`
  height: 50px;
  width: 50px;
  resize-mode: stretch;
`;
export const InputContainer = styled.View`
  height: 50%;
`;
export const LeftInputIcon = styled.Image`
  width: 20%;
  height: 60%;
  resize-mode: contain;
  align-self: center;
`;
export const StyledTextInput = styled.TextInput`
  width: 80%;
  color: white;
  height: 100%;
`;
export const LoginButton = styled.TouchableOpacity`
  height: 20%;
  width: 100%;
  background-color: #0a3a6b;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;
export const ButtonLabel = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;
export const Separator = styled.View<{ space: Spacing }>`
  margin-bottom: ${props => props.space ?? spacing.x1};
`;
