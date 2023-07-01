import styled from 'styled-components/native';

export const BubbleContainer = styled.View(props => ({
  justifyContent: 'center',
  alignItems: 'center',
  gap: props.theme.spacing.x6,
  flexDirection: 'row',
}));

export const Bubble = styled.View(props => ({
  backgroundColor: props.theme.colors.light.primary,
  height: 20,
  width: 20,
  borderRadius: 10,
}));
