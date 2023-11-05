import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Power } from '@tamagui/lucide-icons';
import { useDispatch } from 'react-redux';
import { RouteName } from '../navigations/models/common';
import { RootStackParamList } from '../navigations/models/root';

import { clearUser } from '../redux/slices/user';

const HeaderRight = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onLogoutPress = () => {
    dispatch(clearUser());
    navigation.reset({ index: 0, key: null, routes: [{ name: RouteName.LOGIN }] });
  };

  return (
    <Power
      onPress={onLogoutPress}
    />
  );
};

export default HeaderRight;
