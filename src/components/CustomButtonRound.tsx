import {
  Button,
  ButtonProps,
  Stack,
} from 'tamagui';

interface CustomButtonRoundProps {
  icon: ButtonProps['icon'];
  onPress: ButtonProps['onPress']
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const defaultProps = {
  top: undefined,
  bottom: undefined,
  left: undefined,
  right: undefined,
};

const CustomButtonRound: React.FC<CustomButtonRoundProps> = (props) => (
  <Button
    position="absolute"
    height={50}
    width={50}
    backgroundColor="#fff"
    borderRadius={25}
    enterStyle={{ opacity: 0, scale: 0.9 }}
    exitStyle={{ opacity: 0, scale: 0.9 }}
    animation="100ms"
    elevation={2}
    top={props.top}
    bottom={props.bottom}
    left={props.left}
    right={props.right}
    onPress={props.onPress}
  >
    <Stack
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      {props.icon}
    </Stack>

  </Button>
);

CustomButtonRound.defaultProps = defaultProps;

export default CustomButtonRound;
