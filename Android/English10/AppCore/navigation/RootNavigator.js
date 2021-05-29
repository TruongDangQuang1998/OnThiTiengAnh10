import * as React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import SignInScreen from '../screens/auth/SignInScreen';
import PermissionScreen from '../screens/auth/PermissionScreen';

const Stack = createStackNavigator();

export default function RootNavigator(params) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Permission"
        component={PermissionScreen}
        options={{
          title: 'Permission',
          header: () => <View />,
          //animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: 'Sign in',
          header: () => <View />,
        }}
      />
    </Stack.Navigator>
  );
}
