import { QueryStatus } from '@reduxjs/toolkit/query';
import { Eye, EyeOff } from '@tamagui/lucide-icons';
import { useToastController } from '@tamagui/toast';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  H2,
  Input,
  Spacer,
  XStack,
  YStack,
} from 'tamagui';

import { SPACING } from '../constants';
import { useLazyLoginQuery } from '../redux/services/auth';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login, { data, error}] = useLazyLoginQuery();

  const toastController = useToastController();

  useEffect(() => {
    if (error) {
      toastController.show(error.data.message, { error: true, native: true });
    }
  }, [data, error]);

  const onEyePressIn = () => {
    setPasswordVisible(true);
  };

  const onEyePressOut = () => {
    setPasswordVisible(false);
  };

  const onLoginPress = () => {
    login({ username, password })
      .catch(console.warn);
  };

  return (
    <YStack
      fullscreen
      backgroundColor="$blue1"
      justifyContent="center"
      alignContent="center"
      padding={SPACING}
    >
      <SafeAreaView>
        <XStack justifyContent="center">
          <H2 color="$blue10" textAlign="center">RN</H2>
          <H2 color="black" textAlign="center">News </H2>
        </XStack>
        <Spacer size={SPACING * 2} />
        <Input
          placeholder="Username"
          placeholderTextColor="$gray9"
          backgroundColor="$blue2"
          color="black"
          mb={SPACING}
          onChangeText={setUsername}
        />
        <XStack>
          <Input
            placeholder="Password"
            placeholderTextColor="$gray9"
            backgroundColor="$blue2"
            color="black"
            mb={SPACING * 2}
            secureTextEntry={!passwordVisible}
            flex={1}
            mr={SPACING}
            onChangeText={setPassword}
          />
          <Button
            variant="outlined"
            icon={passwordVisible ? <EyeOff size="$1" /> : <Eye size="$1" />}
            onPressIn={onEyePressIn}
            onPressOut={onEyePressOut}
          />
        </XStack>
        <Button
          color="white"
          backgroundColor="$blue10"
          pressStyle={{ backgroundColor: '$blue9' }}
          onPress={onLoginPress}
        >
          Login
        </Button>
      </SafeAreaView>
    </YStack>
  );
};

export default Login;
