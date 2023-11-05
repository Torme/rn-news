import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Book, Power } from '@tamagui/lucide-icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  H2,
  Stack,
  XStack,
  YStack,
  Text,
} from 'tamagui';

import CustomButton from '../components/CustomButton';
import RNNewsLogo from '../components/RNNewsLogo';
import { SPACING } from '../constants';
import { RouteName } from '../navigations/models/common';
import { RootStackParamList } from '../navigations/models/root';
import { selectIsUserSignedIn } from '../redux/selectors/user';
import { clearUser } from '../redux/slices/user';

type HomeProps = NativeStackScreenProps<RootStackParamList, RouteName.SIGNEDIN>;

const Home: React.FC<HomeProps> = (props) => {
  const isUserSignedIn = useSelector(selectIsUserSignedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isUserSignedIn) {
      onLogoutPress();
    }
  }, [isUserSignedIn]);

  const onStartPress = () => {
    props.navigation.navigate(RouteName.ALLPOSTS);
  };

  const onLogoutPress = () => {
    dispatch(clearUser());
    props.navigation.reset({ index: 0, key: null, routes: [{ name: RouteName.LOGIN }] });
  };

  return (
    <YStack fullscreen justifyContent="center" alignItems="center" padding={SPACING}>
      <XStack mb={SPACING}>
        <H2>Welcome to </H2>
        <RNNewsLogo />
        <H2>!</H2>
      </XStack>
      <YStack
        mb={SPACING * 2}
        width="100%"
        backgroundColor="#fff"
        padding={SPACING}
        borderRadius={10}
        elevation={1}
      >
        <Text textAlign="center">
          RN News is a simple news app built with React Native.
          Discover fresh articles from France
          or search for any topic to discover the most pertinent articles.
        </Text>
      </YStack>
      <Stack width="100%">
        <CustomButton
          onPress={onStartPress}
          mb={SPACING}
          icon={<Book />}
        >
          Start browsing articles
        </CustomButton>
        <CustomButton
          onPress={onLogoutPress}
          backgroundColor="$gray12"
          icon={<Power />}
        >
          Logout
        </CustomButton>
      </Stack>
    </YStack>
  );
};

export default Home;
