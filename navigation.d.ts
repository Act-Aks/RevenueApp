// navigation.d.ts
import { RootStackParamList } from './src/infrastructure/index';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
