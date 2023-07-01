import { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

const AnimatedView = ({ children }: { children?: React.ReactNode }) => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAnimation = () => {
    const animations = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          delay: 100,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          delay: 100,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]),
    );

    animations.start();
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const opacity = animatedValue.interpolate({
    inputRange: [0.1, 1],
    outputRange: [0.5, 1],
  });

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        opacity,
      }}>
      {children}
    </Animated.View>
  );
};

export default AnimatedView;
