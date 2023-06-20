import styled from 'styled-components/native';
import { themes } from '../../../constants';
import { Themes } from '../../../constants/types';

export const StyledContainer = styled.View(
  (props: { background?: Themes }) => ({
    flex: 1,
    padding: 16,
    background: props.background
      ? themes[props.background].BACKGROUND_COLOR
      : themes.light['BACKGROUND_COLOR'],
  }),
);

export const StyledScrollViewContainer = styled.ScrollView(
  (props: { background?: Themes }) => ({
    flex: 1,
    background: props.background
      ? themes[props.background].BACKGROUND_COLOR
      : themes.light['BACKGROUND_COLOR'],
  }),
);
