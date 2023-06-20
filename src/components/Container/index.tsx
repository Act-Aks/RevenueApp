import { ScrollViewProps, StyleProp, ViewProps } from 'react-native';
import { Themes } from '../../constants/types';
import { StyledContainer, StyledScrollViewContainer } from './style';

interface ContainerProps extends ViewProps {
  backgroundType?: Themes;
}
const Container: React.FC<ContainerProps> = (props): JSX.Element => (
  <StyledContainer {...props} background={props.backgroundType}>
    {props.children}
  </StyledContainer>
);

export const ScrollableContainer: React.FC<ScrollViewProps> = (
  props,
): JSX.Element => (
  <StyledScrollViewContainer {...props}>
    {props.children}
  </StyledScrollViewContainer>
);

export default Container;
