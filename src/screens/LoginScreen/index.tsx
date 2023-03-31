import React, { useState } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  AvatarContainer,
  AvatarImage,
  ButtonLabel,
  Container,
  InputContainer,
  LeftInputIcon,
  LoginButton,
  StyledTextInput,
} from './style';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChangeUserName = (text: string) => setUserName(text);
  const handleOnChangePassword = (text: string) => setPassword(text);

  return (
    <LinearGradient
      colors={['#072d70', '#629ce3', '#133f75']}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}>
      <Container>
        <LinearGradient
          colors={['#06a0b8', '#f1c40f', '#06a0b8']}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={{
            backgroundColor: '#07d1f0',
            opacity: 0.8,
            borderRadius: 12,
            borderColor: '#07d1f0',
            padding: 16,
            borderWidth: 3,
            width: '70%',
            height: 280,
          }}>
          <AvatarContainer>
            <AvatarImage source={require('../../../assets/camera.png')} />
          </AvatarContainer>
          <InputContainer>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#0a3a6b',
                height: '40%',
                width: '100%',
                marginBottom: 12,
                borderRadius: 2,
              }}>
              <LeftInputIcon source={require('../../../assets/user.png')} />
              <StyledTextInput
                placeholder={'Username'}
                placeholderTextColor={'white'}
                textContentType={'username'}
                keyboardType={'default'}
                underlineColorAndroid={'transparent'}
                autoCapitalize={'none'}
                value={userName}
                onChangeText={handleOnChangeUserName}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#0a3a6b',
                height: '40%',
                width: '100%',
                borderRadius: 2,
              }}>
              <LeftInputIcon source={require('../../../assets/password.png')} />
              <StyledTextInput
                placeholder={'Password'}
                placeholderTextColor={'white'}
                underlineColorAndroid={'transparent'}
                textContentType={'password'}
                multiline={false}
                value={password}
                secureTextEntry={true}
                autoCorrect={false}
                maxLength={10}
                onChangeText={handleOnChangePassword}
              />
            </View>
          </InputContainer>
          <LoginButton>
            <ButtonLabel>LOGIN</ButtonLabel>
          </LoginButton>
        </LinearGradient>
      </Container>
    </LinearGradient>
  );
};

export default LoginScreen;
