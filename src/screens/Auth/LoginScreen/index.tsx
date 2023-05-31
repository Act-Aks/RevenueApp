import React, { useState } from 'react';
import {
  AvatarContainer,
  AvatarImage,
  ButtonLabel,
  Input,
  InputContainer,
  LeftInputIcon,
  LoginButton,
  Separator,
  StyledContainer,
  StyledLoginBox,
  StyledTextInput,
} from './style';
import { View, Text, Alert } from 'react-native';
import { spacing } from '../../../constants';
import {
  FIREBASE_AUTH,
  signInWithEmailAndPassword,
} from '../../../../firebase/config';
import { Navigation } from '../../../navigation/type';

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
    navigation.navigate('Registration');
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
    <StyledContainer>
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
        <LoginButton onPress={handleLogin}>
          <ButtonLabel>{'LOGIN'}</ButtonLabel>
        </LoginButton>
      </StyledLoginBox>
      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          position: 'relative',
          backgroundColor: 'grey',
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#2e2e2d',
          }}>
          Don't have an account?{' '}
          <Text
            onPress={onFooterLinkPress}
            style={{
              color: '#788eec',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Sign up
          </Text>
        </Text>
      </View>
    </StyledContainer>
  );
};

export default LoginScreen;
