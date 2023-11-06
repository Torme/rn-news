import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ArrowRightToLine, Eye, EyeOff } from '@tamagui/lucide-icons';
import { useToastController } from '@tamagui/toast';
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native/types';
import { useDispatch } from 'react-redux';
import {
  Spacer,
  XStack,
  YStack,
} from 'tamagui';

import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import RNNewsLogo from '../components/RNNewsLogo';
import { SPACING } from '../constants';
import { RouteName } from '../navigations/models/common';
import { RootStackParamList } from '../navigations/models/root';
import { useLazyLoginQuery } from '../redux/services/auth';
import { setUser } from '../redux/slices/user';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const inputPasswordRef = useRef<TextInput>(null);
  const inputUsernameRef = useRef<TextInput>(null);

  const isButtonDisabled = useMemo(() => (
    !username || !password
  ), [username, password]);

  const [login, { data, error }] = useLazyLoginQuery();

  const toastController = useToastController();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const dispatch = useDispatch();

  useEffect(() => {
    if (error && 'data' in error) {
      const errorData = error.data as { message: string };

      toastController.show(errorData.message, { error: true });
    } else if (data) {
      toastController.show(data.message);
      dispatch(setUser({ username }));
      resetInputs();
      navigation.reset({ index: 0, key: null, routes: [{ name: RouteName.SIGNEDIN }] });
    }
  }, [data, error]);

  const resetInputs = () => {
    inputPasswordRef.current?.clear();
    inputUsernameRef.current?.clear();
    setUsername('');
    setPassword('');
  };

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
        <RNNewsLogo />
        <Spacer size={SPACING * 2} />
        <CustomInput
          ref={inputUsernameRef}
          placeholder="Username (Admin)"
          mb={SPACING}
          onChangeText={setUsername}
          onSubmitEditing={() => inputPasswordRef.current?.focus()}
        />
        <XStack>
          <CustomInput
            ref={inputPasswordRef}
            placeholder="Password (password)"
            flex={1}
            mb={SPACING * 2}
            secureTextEntry={!passwordVisible}
            mr={SPACING}
            onChangeText={setPassword}
            hoverStyle={{ borderColor: '$blue10' }}
            onSubmitEditing={onLoginPress}
          />
          <CustomButton
            icon={passwordVisible ? <EyeOff size="$1" color="#fff" /> : <Eye size="$1" color="#fff" />}
            onPressIn={onEyePressIn}
            onPressOut={onEyePressOut}
          />
        </XStack>
        <CustomButton
          onPress={onLoginPress}
          disabled={isButtonDisabled}
          opacity={isButtonDisabled ? 0.2 : 1}
          icon={<ArrowRightToLine />}
        >
          Login
        </CustomButton>
      </SafeAreaView>
    </YStack>
  );
};

export default Login;
