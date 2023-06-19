import fontSize from './fontsize';
import spacing from './spacing';
import themes from './theme';

export type Spacing = (typeof spacing)[keyof typeof spacing];
export type FontSizes = (typeof fontSize)[keyof typeof fontSize];
export type Themes = keyof typeof themes;
