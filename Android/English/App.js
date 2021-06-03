import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

// import { DrawerContent } from './screens/DrawerContent';
import RootNavigator from './AppCore/navigation/RootNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationServices from './AppCore/utils/NavigationServices';
import {AuthContext, dataUser} from './AppCore/constants/AuthContext';
import store from './AppCore/store';
import {Provider} from 'react-redux';
import {Colors} from './AppCore/constants/Styles';
import NetworkProvider from './AppCore/components/network/NetworkProvider';
import AlertComponent from './AppCore/components/alert/Alert';
import ToasterComponent from './AppCore/components/toaster/Toaster';
import TabBottomNavigator from './AppCore/navigation/TabBottomNavigator';
const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  // const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    isDarkTheme: false,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      isDarkTheme: false,
      backgroundSecondary: Colors.gray_3,
      text: Colors.blackTheme1,
      primary: Colors.primary,
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      isDarkTheme: true,
      background: Colors.blackTheme1,
      backgroundSecondary: Colors.black,
      text: '#ffffff',
      primary: Colors.primary,
    },
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
          isDarkTheme: action.isDarkTheme,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          userId: action.userId,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          userId: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          userId: null,
          isLoading: false,
        };
      case 'CHANGE_THEME':
        return {
          ...prevState,
          isDarkTheme: action.isDarkTheme,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        // setUserToken('fgkj');
        // setIsLoading(false);
        debugger
        const userToken = String(foundUser.id);
        const userName = foundUser.userName;

        const userData = {
          id: userName,
          token: userToken,
          userId: userToken,
        };
        console.log(userData, 'userData');
        try {
          await AsyncStorage.setItem(
            '@DATA_CURRENT_USER',
            JSON.stringify(userData),
          );
        } catch (e) {
          console.log(e, 'e');
        }
         console.log('user token: ', userToken);

        dataUser.currentUser = userData;

        dispatch({
          type: 'LOGIN',
          id: userName,
          token: userToken,
          userId: userToken,
        });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('@DATA_CURRENT_USER');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        // setUserToken('fgkj');
        // setIsLoading(false);
      },
      toggleTheme: async (_isDarkTheme) => {
        await AsyncStorage.setItem(
          '@IS_DARK_THEME',
          JSON.stringify(_isDarkTheme),
        );

        dispatch({type: 'CHANGE_THEME', isDarkTheme: _isDarkTheme});

        // setIsDarkTheme(isSetDarkTheme);
      },
    }),
    [],
  );

  useEffect(async () => {
    let userData = null,
      _isDarkTheme = loginState.isDarkTheme;

    try {
      userData = await AsyncStorage.getItem('@DATA_CURRENT_USER');
      const _darkThemeData = await AsyncStorage.getItem('@IS_DARK_THEME');

      if (userData !== null) {
        userData = JSON.parse(userData);
        dataUser.currentUser = userData;
      }

      // if (_darkThemeData !== null) {
      //   _isDarkTheme = JSON.parse(_darkThemeData);
      // }
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: 'RETRIEVE_TOKEN',
      token: userData ? userData.token : null,
      isDarkTheme: _isDarkTheme,
    });
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const theme = loginState.isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <ToasterComponent />
        <AuthContext.Provider value={authContext}>
          <NavigationContainer
            theme={theme}
            ref={(Drawercontainer) =>
              NavigationServices.setNavigationcontainer(Drawercontainer)
            }>
            {loginState.userToken !== null ? (
              <TabBottomNavigator />
            ) : (
              <RootNavigator />
            )}
          </NavigationContainer>
        </AuthContext.Provider>

        <AlertComponent />
        <NetworkProvider />
      </PaperProvider>
      {/* Cac components */}
    </Provider>
  );
};

export default App;
