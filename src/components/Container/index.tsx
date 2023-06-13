import React from 'react';
import { StyledContainer } from './style';
import { Themes } from '../../constants/types';

interface ContainerProps {
  children: React.ReactNode;
  backgroundType?: Themes;
}
const Container: React.FC<ContainerProps> = ({
  children,
  backgroundType,
}): JSX.Element => (
  <StyledContainer background={backgroundType}>{children}</StyledContainer>
);

export default Container;
