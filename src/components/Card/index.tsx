import { ViewStyle } from 'react-native';
import { StyledCard } from './style';

interface CardProps {
  children: React.ReactNode;
  cardStyle?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ children, cardStyle }) => {
  return <StyledCard style={cardStyle}>{children}</StyledCard>;
};

export default Card;
