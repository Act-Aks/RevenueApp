import { ScrollViewProps, ViewProps } from 'react-native';

import { StyledContainer, StyledScrollViewContainer } from './style';

interface ContainerProps extends ViewProps {}
interface ScrollableContainerProps extends ScrollViewProps {}

export const Container: React.FC<ContainerProps> = (props): JSX.Element => (
  <StyledContainer {...props}>{props.children}</StyledContainer>
);

export const ScrollableContainer: React.FC<ScrollableContainerProps> = (
  props,
): JSX.Element => (
  <StyledScrollViewContainer {...props}>
    {props.children}
  </StyledScrollViewContainer>
);
