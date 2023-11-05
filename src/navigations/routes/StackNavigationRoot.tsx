import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { selectIsUserSignedIn } from '../../redux/selectors/user';
import Login from '../../screens/Login';
import { RouteName } from '../models/common';
import { RootStackParamList } from '../models/root';
import StackNavigationArticles from './StackNavigationArticles';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigationRoot = () => {
  const signedIn = useSelector(selectIsUserSignedIn);

  return (
    <Stack.Navigator
      initialRouteName={signedIn ? RouteName.SIGNEDIN : RouteName.LOGIN}
    >
      <Stack.Screen
        name={RouteName.LOGIN}
        component={Login}
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RouteName.SIGNEDIN}
        component={StackNavigationArticles}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigationRoot;
