import React from 'react';
import { ViewProps } from 'react-native';

import { StyledCard } from './style';

interface CardProps extends ViewProps {}

const Card: React.FC<CardProps> = props => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;
