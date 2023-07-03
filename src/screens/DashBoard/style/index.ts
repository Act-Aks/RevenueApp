import styled from 'styled-components/native';

import { AnimatedView } from '../../../components/Container';

export const StyledScreen = styled(AnimatedView)(props => ({
  gap: props.theme.spacing.x8,
}));

export const LogoutButtonContainer = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: props.activeOpacity ?? 0.5,
}))(props => ({
  backgroundColor: props.theme.colors.bg.secondary,
  padding: props.theme.spacing.x4,
  borderRadius: props.theme.spacing.x6,
  borderWidth: '1px',
  height: '40px',
  width: '40px',
}));

export const LogoutImage = styled.Image({
  resizeMode: 'contain',
  width: '100%',
  height: '100%',
  alignSelf: 'center',
});
