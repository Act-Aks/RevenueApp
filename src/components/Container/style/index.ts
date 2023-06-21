import styled from 'styled-components/native';

export const StyledContainer = styled.View(props => ({
  flex: 1,
  padding: 16,
  background: props.theme.colors.ui.secondary,
}));

export const StyledScrollViewContainer = styled.ScrollView(props => ({
  flex: 1,
  background: props.theme.colors.ui.primary,
}));
