import * as React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import DetailScreen from '../screens/home/DetailScreen';
import ResultScreen from '../screens/home/ResultScreen';

const Stack = createStackNavigator();

export default function HomeNavigator(params) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'HomeScreen',
          header: () => <View />,
          //animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}
      />

      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          title: 'DetailScreen',
          header: () => <View />,
          //animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}
      />

      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{
          title: 'ResultScreen',
          header: () => <View />,
          //animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}
      />
    </Stack.Navigator>
  );
}
