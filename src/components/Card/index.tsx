import { StyledCard } from './style';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
