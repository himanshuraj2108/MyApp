import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const AccountTab = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text> Account Tab</Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};
