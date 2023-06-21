import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { spacing } from '../../../constants';
import { NavigationScreens } from '../../../infrastructure';
import { Navigation } from '../../../infrastructure/type';
import useAuthenticationContext from '../../../services/auth/authContext';
import {
  ButtonContainer,
  ButtonLabel,
  ExtraInfo,
  Footer,
  IconContainer,
  IconImage,
  Input,
  InputContainer,
  LeftInputIcon,
  Link,
  RegisterButton,
  Separator,
  StyledContainer,
  StyledKeyboardAvoidingView,
  StyledRegisterBox,
  StyledTextInput,
} from './style';

interface RegistrationScreenProps {
  navigation: Navigation;
}

const RegistrationScreen = ({ navigation }: RegistrationScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { onRegister, isLoading } = useAuthenticationContext();

  const handleOnChangeEmail = (text: string) => setEmail(text);
  const handleOnChangePassword = (text: string) => setPassword(text);
  const handleOnChangeConfirmPassword = (text: string) =>
    setConfirmPassword(text);

  const onFooterLinkPress = () => {
    navigation.navigate(NavigationScreens.Login);
  };

  const dismisssKeyboard = () => {
    Keyboard.dismiss();
  };

  const onPressCreateAccount = () =>
    onRegister(email, password, confirmPassword);

  return (
    <TouchableWithoutFeedback onPress={dismisssKeyboard}>
      <StyledContainer loading={isLoading}>
        <StyledRegisterBox>
          <StyledKeyboardAvoidingView>
            <IconContainer>
              <IconImage source={require('../../../../assets/appIcon.png')} />
            </IconContainer>
            <InputContainer>
              <Input>
                <LeftInputIcon
                  source={require('../../../../assets/user.png')}
                />
                <StyledTextInput
                  placeholder={'E-mail'}
                  textContentType={'emailAddress'}
                  keyboardType={'default'}
                  autoCapitalize={'none'}
                  underlineColorAndroid={'transparent'}
                  onChangeText={handleOnChangeEmail}
                  value={email}
                />
              </Input>
              <Separator space={spacing.x6} />
              <Input>
                <LeftInputIcon
                  source={require('../../../../assets/password.png')}
                />
                <StyledTextInput
                  placeholder={'Password'}
                  textContentType={'password'}
                  autoCapitalize={'none'}
                  underlineColorAndroid={'transparent'}
                  multiline={false}
                  autoCorrect={false}
                  maxLength={10}
                  onChangeText={handleOnChangePassword}
                  value={password}
                  secureTextEntry
                />
              </Input>
              <Separator space={spacing.x6} />
              <Input>
                <LeftInputIcon
                  source={require('../../../../assets/password.png')}
                />
                <StyledTextInput
                  placeholder={'Confirm Password'}
                  textContentType={'password'}
                  autoCapitalize={'none'}
                  underlineColorAndroid={'transparent'}
                  multiline={false}
                  autoCorrect={false}
                  maxLength={10}
                  onChangeText={handleOnChangeConfirmPassword}
                  value={confirmPassword}
                  secureTextEntry
                />
              </Input>
            </InputContainer>
            <ButtonContainer>
              <RegisterButton onPress={onPressCreateAccount}>
                <ButtonLabel>{'Create account'}</ButtonLabel>
              </RegisterButton>
            </ButtonContainer>
            <Footer>
              <ExtraInfo>
                {'Already got an account? '}
                <Link onPress={onFooterLinkPress}>{'Log in'}</Link>
              </ExtraInfo>
            </Footer>
          </StyledKeyboardAvoidingView>
        </StyledRegisterBox>
      </StyledContainer>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
