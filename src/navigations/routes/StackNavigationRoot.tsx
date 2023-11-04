import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import { RouteName } from '../models/common';
import { RootStackParamList } from '../models/root';

const Stack = createNativeStackNavigator<RootStackParamList>();

interface StackNavigationRootProps {
  signedIn: boolean;
}

const StackNavigationRoot: React.FC<StackNavigationRootProps> = (props) => (
  <Stack.Navigator
    initialRouteName={props.signedIn ? RouteName.HOME : RouteName.LOGIN}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={RouteName.LOGIN}
      component={Login}
      options={{
        title: 'Login',
      }}
    />
    <Stack.Screen
      name={RouteName.HOME}
      component={Home}
    />
  </Stack.Navigator>
);

export default StackNavigationRoot;
