import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  textInputStyle: {
    borderWidth: moderateScale(1),
    borderColor: 'gray',
    padding: moderateScale(10),
    borderRadius: moderateScale(20),
    width: '90%',
    marginVertical: moderateScale(12),
    alignSelf: 'center',
  },
  resetPasswordStyle: {
    height: moderateScale(50),
    width: '60%',
    borderRadius: moderateScale(25),
    backgroundColor: '#0096FF',
    alignSelf: 'flex-end',
    marginTop: moderateScale(30),
    marginRight: moderateScale(18),
    padding: moderateScale(10),
  },
  resetPasswordTextStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: moderateScale(18),
  },
  bottomContainer: {
    alignItems: 'center',
    marginTop: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomeTextStyle1: {
    fontSize: moderateScale(18),
    color: 'black',
  },
  bottomeTextStyle2: {
    fontSize: moderateScale(18),
    color: '#0096FF',
  },
  resetPasswordInfoTextStyle: {
    textAlign: 'center',
    fontSize: moderateScale(18),
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(30),
    marginBottom: moderateScale(20),
    color: 'black',
  },
});

export const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.conatiner}>
      <Text style={styles.resetPasswordInfoTextStyle}>
        Enter the email address associated with your accounnt
      </Text>
      <TextInput
        value={email}
        style={styles.textInputStyle}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
      />
      <TouchableOpacity
        style={styles.resetPasswordStyle}
        onPress={() => navigation.navigate('')}>
        <Text style={styles.resetPasswordTextStyle}>RESET PASSWORD</Text>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomeTextStyle1}>Don't have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.bottomeTextStyle2}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
