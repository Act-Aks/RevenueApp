import fontSize from './fontsize';
import spacing from './spacing';

export type Spacing = (typeof spacing)[keyof typeof spacing];
export type FontSizes = (typeof fontSize)[keyof typeof fontSize];
