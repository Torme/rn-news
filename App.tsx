import { NavigationContainer } from '@react-navigation/native';
import { ToastProvider, ToastViewport } from '@tamagui/toast';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { Stack, TamaguiProvider, YStack } from 'tamagui';
import CustomToast from './src/components/CustomToast';

import StackNavigationRoot from './src/navigations/routes/StackNavigationRoot';
import store from './src/redux/configureStore';
import tamaguiConfig from './tamagui.config';

const App = () => (
  <Provider store={store}>
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaProvider>
        <StatusBar />
        <ToastProvider>
          <YStack flex={1}>
            <NavigationContainer>
              <StackNavigationRoot signedIn={false} />
            </NavigationContainer>
          </YStack>
          <CustomToast />
          <ToastViewport />
        </ToastProvider>
      </SafeAreaProvider>
    </TamaguiProvider>
  </Provider>
);

export default App;
