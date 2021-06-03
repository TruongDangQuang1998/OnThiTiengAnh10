import * as React from 'react';
import {Image, View, StyleSheet, StatusBar} from 'react-native';
import {Colors, Size} from '../../constants/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationServices from '../../utils/NavigationServices';

export default function PermissionScreen({navigation}) {
  const [isLogin, setIsLogin] = React.useState(false);
  // const [password, setPassword] = React.useState('');

  // const { signIn } = React.useContext(AuthContext);

  const handelPermission = async () => {
    try {
      try {
        const dataStorage = await AsyncStorage.getItem('@DATA_CURRENT_USER');
        if (dataStorage !== null) {
          // da login
          const _dataCurrentUser = JSON.parse(dataStorage);
          //NavigationServices.navigate('SignIn');
        } else {
          // chưa login
          NavigationServices.navigate('SignIn');
        }
      } catch (e) {
        console.log(e);
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    console.log('did month');
    handelPermission();
    // navigation.navigate('Main');
  }, []);

  return (
    <View style={styles.BackgroundLogin}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <Image
        source={require('../../assets/images/Xbox-Logo.wine.png')}
        style={styles.sizeLogo}
        resizeMode={'contain'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  BackgroundLogin: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    width: Size.deviceWidth,
    backgroundColor: Colors.white,
  },
  sizeLogo: {
    height: 191 * (Size.deviceWidth / 537),
    maxWidth: Size.deviceWidth * 0.56,
  },
});
