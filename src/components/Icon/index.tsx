import { default as RNIcon } from 'react-native-vector-icons/FontAwesome';
import { IconProps as RNIconProps } from 'react-native-vector-icons/Icon';

interface IconProps extends RNIconProps {}

const Icon: React.FC<IconProps> = ({ name = 'question', ...props }) => {
  return <RNIcon name={name} {...props} />;
};

export default Icon;
