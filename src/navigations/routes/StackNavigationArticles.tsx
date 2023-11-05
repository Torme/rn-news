import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderRight from '../../components/HeaderRight';
import RNNewsLogo from '../../components/RNNewsLogo';

import Home from '../../screens/Home';
import PostDetail from '../../screens/PostDetail';
import { ArticlesStackParamList } from '../models/articles';
import { RouteName } from '../models/common';

const Stack = createNativeStackNavigator<ArticlesStackParamList>();

const StackNavigationArticles = () => (
  <Stack.Navigator
    initialRouteName={RouteName.ALLPOSTS}
    screenOptions={{
      headerStyle: {
        backgroundColor: 'hsl(206, 100%, 99.2%)',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        color: '#000',
      },
      headerRight: HeaderRight,
    }}
  >
    <Stack.Screen
      name={RouteName.ALLPOSTS}
      component={Home}
      options={{
        headerTitle: RNNewsLogo,
      }}
    />
    <Stack.Screen
      name={RouteName.POSTDETAIL}
      component={PostDetail}
      options={({ route }) => ({
        title: route.params?.article.title,
      })}
    />
  </Stack.Navigator>
);

export default StackNavigationArticles;
