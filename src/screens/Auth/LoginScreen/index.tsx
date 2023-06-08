import React, { useState } from 'react';
import {
  AvatarContainer,
  AvatarImage,
  ButtonContainer,
  ButtonLabel,
  ExtraInfo,
  Footer,
  Input,
  InputContainer,
  LeftInputIcon,
  Link,
  LoginButton,
  Separator,
  StyledContainer,
  StyledLoginBox,
  StyledTextInput,
} from './style';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { spacing } from '../../../constants';
import {
  FIREBASE_AUTH,
  signInWithEmailAndPassword,
} from '../../../../firebase/config';
import { Navigation } from '../../../navigation/type';
import { NavigationScreens } from '../../../navigation';

interface LoginScreenProps {
  navigation: Navigation;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleOnChangeUserName = (text: string) => setEmail(text);
  const handleOnChangePassword = (text: string) => setPassword(text);

  const onFooterLinkPress = () => {
    navigation.navigate(NavigationScreens.Registration);
  };

  const dismisssKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log({ res });
    } catch (error: any) {
      console.log({ error });
      Alert.alert('Sign in failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismisssKeyboard}>
      <StyledContainer loading={loading}>
        <StyledLoginBox>
          <AvatarContainer>
            <AvatarImage source={require('../../../../assets/camera.png')} />
          </AvatarContainer>
          <InputContainer>
            <Input>
              <LeftInputIcon source={require('../../../../assets/user.png')} />
              <StyledTextInput
                placeholder={'E-mail'}
                textContentType={'emailAddress'}
                keyboardType={'default'}
                autoCapitalize={'none'}
                onChangeText={handleOnChangeUserName}
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
                multiline={false}
                secureTextEntry={true}
                autoCorrect={false}
                maxLength={10}
                onChangeText={handleOnChangePassword}
                value={password}
              />
            </Input>
          </InputContainer>
          <ButtonContainer>
            <LoginButton onPress={handleLogin}>
              <ButtonLabel>{'LOGIN'}</ButtonLabel>
            </LoginButton>
          </ButtonContainer>
        </StyledLoginBox>
        <Footer>
          <ExtraInfo>
            {"Don't have an account? "}
            <Link onPress={onFooterLinkPress}>{'Sign up'}</Link>
          </ExtraInfo>
        </Footer>
      </StyledContainer>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
