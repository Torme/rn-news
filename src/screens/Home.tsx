import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native/types';
import { Stack } from 'tamagui';

import PostManager from '../components/PostManager';
import { RouteName } from '../navigations/models/common';
import { RootStackParamList } from '../navigations/models/root';

type HomeProps = NativeStackScreenProps<RootStackParamList, RouteName.HOME>;

const Home: React.FC<HomeProps> = (props) => {
  const [search, setSearch] = useState<string>();

  const searchTimeout = useRef<NodeJS.Timeout>();

  const onSearch = useCallback((
    { nativeEvent: { text } }: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(() => {
      setSearch(text);
    }, 500);
  }, []);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search for articles',
        onChangeText: onSearch,
      },
    });
  }, [props.navigation]);

  return (
    <Stack
      flex={1}
      justifyContent="center"
      alignContent="center"
    >
      <PostManager
        search={search}
      />
    </Stack>
  );
};

export default Home;
