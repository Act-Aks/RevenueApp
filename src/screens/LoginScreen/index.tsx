import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  AvatarContainer,
  AvatarImage,
  ButtonLabel,
  InputContainer,
  LeftInputIcon,
  LoginButton,
  Separator,
  StyledContainer,
  StyledLoginBox,
  StyledTextInput,
} from './style';
import { spacing } from '../../constants/spacing';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChangeUserName = (text: string) => setUserName(text);
  const handleOnChangePassword = (text: string) => setPassword(text);

  return (
    <StyledContainer>
      <StyledLoginBox>
        <AvatarContainer>
          <AvatarImage source={require('../../../assets/camera.png')} />
        </AvatarContainer>
        <InputContainer>
          <View style={styles.textInputView}>
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
          <Separator space={spacing.x6} />
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
      </StyledLoginBox>
    </StyledContainer>
  );
};
const styles = StyleSheet.create({
  textInputView: {
    flexDirection: 'row',
    backgroundColor: '#0a3a6b',
    height: '40%',
    width: '100%',
    borderRadius: 2,
  },
  separator: {
    marginBottom: 12,
  },
});

export default LoginScreen;
