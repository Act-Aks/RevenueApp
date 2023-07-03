import { NavigationProp } from '@react-navigation/native';

// import { User } from 'firebase/auth';

type Navigation = NavigationProp<ReactNavigation.RootParamList>;
type Login = undefined;
type Registration = undefined;
type DashBoard = undefined;
type Account = undefined;
type Tabs = 'DashBoardTab' | 'AccountTab';

export type { Account, DashBoard, Login, Navigation, Registration, Tabs };
