/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/Home';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  backgroundImageStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(50),
    paddingVertical: moderateScale(100),
  },
});

const App = () => {
  return (
    <View style={styles.conatiner}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </View>
  );
};

export default App;
