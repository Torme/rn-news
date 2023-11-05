import { NavigationContainer } from '@react-navigation/native';
import { ToastProvider, ToastViewport } from '@tamagui/toast';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { TamaguiProvider, YStack } from 'tamagui';
import CustomToast from './src/components/CustomToast';

import StackNavigationRoot from './src/navigations/routes/StackNavigationRoot';
import store from './src/redux/configureStore';
import tamaguiConfig from './tamagui.config';

const App = () => {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
          <SafeAreaProvider>
            <StatusBar />
            <ToastProvider
              swipeDirection="down"
            >
              <YStack flex={1}>
                <NavigationContainer>
                  <StackNavigationRoot />
                </NavigationContainer>
              </YStack>
              <CustomToast />
              <ToastViewport
                width="100%"
              />
            </ToastProvider>
          </SafeAreaProvider>
        </TamaguiProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
