import styled from 'styled-components/native';

export const StyledCard = styled.View((props: {}) => {
  return {
    width: '100%',
    height: '100%',
    border: 1,
    borderRadius: 12,
    padding: 16,
    ...props,
  };
});
