import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

interface StyledViewProps {
  style?: Pick<ViewProps, 'style'>;
}

export const StyledCard = styled.View((props: StyledViewProps) => {
  const defaultStyle = {
    width: '100%',
    height: '100%',
    border: 1,
    borderRadius: 12,
    padding: 16,
  };
  return props.style ? { ...defaultStyle, ...props.style } : defaultStyle;
});
