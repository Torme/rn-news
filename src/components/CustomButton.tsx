import { Button, styled } from 'tamagui';

const CustomButton = styled(Button, {
  color: '#fff',
  backgroundColor: '$blue10',
  pressStyle: { backgroundColor: '$blue9' },
  animation: '100ms',
});

export default CustomButton;
