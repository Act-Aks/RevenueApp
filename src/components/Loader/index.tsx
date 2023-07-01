import AnimatedView from '../AnimatedView';
import { Bubble, BubbleContainer } from './style';

const Loader = () => {
  return (
    <AnimatedView>
      <BubbleContainer>
        <Bubble />
        <Bubble />
        <Bubble />
      </BubbleContainer>
    </AnimatedView>
  );
};

export default Loader;
