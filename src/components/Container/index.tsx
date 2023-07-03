import { ScrollViewProps, ViewProps } from 'react-native';
import {
  BaseAnimationBuilder,
  EntryExitAnimationFunction,
  FadeInLeft,
  FadeOutRight,
  Keyframe,
} from 'react-native-reanimated';

import {
  StyledAnimatedView,
  StyledContainer,
  StyledScrollViewContainer,
} from './style';

type Animations =
  | BaseAnimationBuilder
  | typeof BaseAnimationBuilder
  | EntryExitAnimationFunction
  | Keyframe;

interface ContainerProps extends ViewProps {}
interface ScrollableContainerProps extends ScrollViewProps {}
interface AnimatedViewProps {
  children: React.ReactNode;
  entring?: Animations;
  exiting?: Animations;
}

export const Container: React.FC<ContainerProps> = (props): JSX.Element => (
  <StyledContainer {...props}>{props.children}</StyledContainer>
);

export const AnimatedView: React.FC<AnimatedViewProps> = (
  props,
): JSX.Element => (
  <StyledAnimatedView entering={FadeInLeft} exiting={FadeOutRight} {...props}>
    {props.children}
  </StyledAnimatedView>
);

export const ScrollableContainer: React.FC<ScrollableContainerProps> = (
  props,
): JSX.Element => (
  <StyledScrollViewContainer {...props}>
    {props.children}
  </StyledScrollViewContainer>
);
