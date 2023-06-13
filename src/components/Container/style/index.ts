import styled from 'styled-components/native';
import { Themes } from '../../../constants/types';
import { COLOR_THEMES } from '../../../constants/theme';

export const StyledContainer = styled.View<{ background?: Themes }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background ?? COLOR_THEMES.Dark};
`;
