import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

interface ViewProps {
  style?: ViewStyle;
}

const defaultStyle = {
  flex: 1,
  border: 1,
  borderRadius: 12,
  boxShadow: '0 1px 8px rgba(0, 0, 0, 0.25)',
};
export const StyledCard = styled.View<ViewProps>(props =>
  props.style ? defaultStyle : props.style & { ...defaultStyle },
);
