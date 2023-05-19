import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomePage} from './HomePage';
import {SignUp} from './SignUp';
import {ForgotPassword} from './ForgotPassword';
import {moderateScale} from 'react-native-size-matters';
import {HomeTab} from './Home/HomeTab';
import {ManageTab} from './Home/ManageTab';
import {AccountTab} from './Home/AccountTab';

const Tab = createBottomTabNavigator();

export const HomeTabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0096FF',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: moderateScale(20),
        },
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        options={() => {
          return {
            headerTitle: 'HOME',
          };
        }}
        name="Home"
        component={HomeTab}
      />
      <Tab.Screen name="Manage" component={ManageTab} />
      <Tab.Screen name="Account" component={AccountTab} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
export const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={() => {
          return {
            title: '',
            headerShown: false,
          };
        }}
        name="HomePage"
        component={HomePage}
      />
      <Stack.Screen
        options={() => {
          return {
            title: 'Sign Up',
            headerStyle: {
              backgroundColor: '#0096FF',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: moderateScale(20),
            },
            headerTitleAlign: 'center',
          };
        }}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={() => {
          return {
            title: 'Forgot Password',
            headerStyle: {
              backgroundColor: '#0096FF',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: moderateScale(20),
            },
            headerTitleAlign: 'center',
          };
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={() => {
          return {
            headerShown: false,
          };
        }}
        name="HomeTabbar"
        component={HomeTabbar}
      />
    </Stack.Navigator>
  );
};
