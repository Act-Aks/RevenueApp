import { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { Bubble, BubbleContainer } from './style';

const Loader = () => {
  const animation = useSharedValue(0);

  useEffect(() => {
    animation.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1000 }),
        withTiming(0, { duration: 1000 }),
      ),
      -1,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loaderAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: animation.value,
    };
  });

  return (
    <Animated.View style={loaderAnimationStyle}>
      <BubbleContainer>
        <Bubble />
        <Bubble />
        <Bubble />
      </BubbleContainer>
    </Animated.View>
  );
};

export default Loader;
