import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  textInputStyle: {
    borderWidth: moderateScale(1),
    borderColor: 'gray',
    padding: moderateScale(10),
    borderRadius: moderateScale(25),
    width: '90%',
    marginVertical: moderateScale(12),
    alignSelf: 'center',
  },
  createAccountStyle: {
    height: moderateScale(50),
    width: '60%',
    borderRadius: moderateScale(25),
    backgroundColor: '#0096FF',
    alignSelf: 'flex-end',
    marginTop: moderateScale(30),
    marginRight: moderateScale(18),
    padding: moderateScale(10),
  },
  createAccountTextStyle: {
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
});

export const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User created!');
      })
      .catch(error => {
        console.log('Error:', error);
      });
  };

  return (
    <View style={styles.conatiner}>
      <TextInput
        value={name}
        style={styles.textInputStyle}
        onChangeText={text => setName(text)}
        placeholder="Full Name"
      />
      <TextInput
        value={email}
        style={styles.textInputStyle}
        onChangeText={text => setEmail(text)}
        placeholder="Email"
      />
      <TextInput
        value={password}
        style={styles.textInputStyle}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        value={confirmPassword}
        style={styles.textInputStyle}
        onChangeText={text => setConfirmPassword(text)}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.createAccountStyle}
        onPress={() => handleSignup()}>
        <Text style={styles.createAccountTextStyle}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomeTextStyle1}>Already have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.bottomeTextStyle2}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
