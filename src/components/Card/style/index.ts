import styled from 'styled-components/native';

export const StyledCard = styled.View(props => ({
  flexShrink: 1,
  border: 1,
  borderRadius: props.theme.spacing.x6,
  padding: props.theme.spacing.x8,
  boxShadow: '0 1px 8px rgba(0, 0, 0, 0.25)',
}));
