import styled from 'styled-components/native';
import { themes } from '../../../constants';
import { Themes } from '../../../constants/types';

export const StyledContainer = styled.View(
  (props: { background?: Themes }) => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: props.background
      ? themes[props.background].BACKGROUND_COLOR
      : themes.light['BACKGROUND_COLOR'],
  }),
);
