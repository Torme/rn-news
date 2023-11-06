import {
  useCallback,
  useRef,
  useState,
} from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Stack } from 'tamagui';

import PostManager from '../components/PostManager';
import { RouteName } from '../navigations/models/common';
import { RootStackParamList } from '../navigations/models/root';
import CustomInput from '../components/CustomInput';
import { SPACING } from '../constants';

type AllPostsProps = NativeStackScreenProps<RootStackParamList, RouteName.SIGNEDIN>;

const AllPosts: React.FC<AllPostsProps> = () => {
  const [search, setSearch] = useState<string>();

  const searchTimeout = useRef<NodeJS.Timeout>();

  const onSearch = useCallback((text: string) => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(() => {
      setSearch(text);
    }, 500);
  }, []);

  return (
    <Stack
      flex={1}
      justifyContent="center"
      alignContent="center"
      backgroundColor="$blue1"
    >
      <CustomInput
        margin={SPACING}
        mb={SPACING / 2}
        placeholder="Search for articles"
        onChangeText={onSearch}
      />
      <PostManager search={search} />
    </Stack>
  );
};

export default AllPosts;
