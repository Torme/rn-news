import { Toast, useToastState } from '@tamagui/toast';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Stack } from 'tamagui';

const DURATION_TOAST = 2000;

const CustomToast = () => {
  const currentToast = useToastState();
  const safeAreaInsets = useSafeAreaInsets();

  console.log('currentToast', currentToast);
  if (!currentToast || currentToast.isHandledNatively) {
    return null;
  }
  console.log('render');
  return (
    <Toast
      key={currentToast?.id}
      duration={DURATION_TOAST}
      enterStyle={{ opacity: 0, y: safeAreaInsets.top - 10 }}
      exitStyle={{ opacity: 0, y: safeAreaInsets.top }}
      y={safeAreaInsets.top}
      animation="100ms"
      viewportName={currentToast.viewportName}
      backgroundColor={currentToast.error ? '$red5' : '$green5'}
    >
      <Stack>
        <Toast.Title size="$5">{currentToast.title}</Toast.Title>
      </Stack>
    </Toast>
  );
};

export default CustomToast;
