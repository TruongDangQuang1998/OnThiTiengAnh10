import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import HomeScreen from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/setting/SettingCreeen';
import {IconHome, IconSetting} from '../constants/Icons';
import TextView from '../components/textView/TextView';
import {Size, StyleSheets} from '../constants/Styles';

const Tab = createBottomTabNavigator();
export default function TabBottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: ({color, size}) => (
            <TextView
              i18nKey="App_Home"
              style={[StyleSheets.H5 - 5, {color: color}]}
            />
          ),
          tabBarIcon: ({color, size}) => (
            <IconHome color={color} size={Size.iconSize2} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: ({color, size}) => (
            <TextView
              i18nKey="App_Setting"
              style={[StyleSheets.H5 - 5, {color: color}]}
            />
          ),
          tabBarIcon: ({color, size}) => (
            <IconSetting color={color} size={Size.iconSize2} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
