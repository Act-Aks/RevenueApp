import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const Account = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button onPress={() => navigation.navigate('DashBoardTab')}>
        Account
      </Button>
    </View>
  );
};

export default Account;
