import { Toast, useToastState } from '@tamagui/toast';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Stack } from 'tamagui';

import { SPACING } from '../constants';

const DURATION_TOAST = 2000;

const CustomToast = () => {
  const currentToast = useToastState();
  const safeAreaInsets = useSafeAreaInsets();

  if (currentToast && !currentToast.isHandledNatively) {
    return (
      <Toast
        key={currentToast?.id}
        duration={DURATION_TOAST}
        enterStyle={{ opacity: 0, y: safeAreaInsets.top + SPACING - 5 }}
        exitStyle={{ opacity: 0, y: safeAreaInsets.top }}
        y={safeAreaInsets.top + SPACING}
        animation="100ms"
        viewportName={currentToast.viewportName}
        backgroundColor={currentToast.error ? '$red5' : '$green5'}
        borderRadius={10}
      >
        <Stack>
          <Toast.Title size="$5">{currentToast.title}</Toast.Title>
        </Stack>
      </Toast>
    );
  }

  return null;
};

export default CustomToast;
