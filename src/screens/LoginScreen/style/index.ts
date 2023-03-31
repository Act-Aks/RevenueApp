import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
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
