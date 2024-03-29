import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const StyledContainer = styled.View(props => ({
  flex: 1,
  padding: props.theme.spacing.x8,
  background: props.theme.colors.light.background,
}));

export const StyledAnimatedView = styled(Animated.View)(props => ({
  flex: 1,
  padding: props.theme.spacing.x8,
  background: props.theme.colors.light.background,
}));

export const StyledScrollViewContainer = styled.ScrollView(props => ({
  flexGrow: 1,
  background: props.theme.colors.light.background,
}));
