import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {bgURL} from './Constant';
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImageStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(50),
    paddingVertical: moderateScale(100),
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
  loginButtonStyle: {
    height: moderateScale(50),
    width: '40%',
    borderRadius: moderateScale(25),
    backgroundColor: '#0096FF',
    alignSelf: 'flex-end',
    marginTop: moderateScale(30),
    marginRight: moderateScale(18),
    padding: moderateScale(10),
  },
  headerTextStyle: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  loginTextStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: moderateScale(18),
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomeTextStyle1: {
    fontSize: moderateScale(14),
    color: 'black',
  },
  bottomeTextStyle2: {
    fontSize: moderateScale(14),
    color: '#0096FF',
  },
  passwordTextStyle: {
    fontSize: moderateScale(14),
    color: '#0096FF',
    alignSelf: 'flex-end',
    marginRight: moderateScale(15),
  },
});

export const HomePage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('HomeTabbar');
      })
      .catch(error => {
        if (error.message.includes('auth/user-not-found')) {
          Alert.alert('Alert', 'User not found');
        }
        console.log('Error:', error);
      });
  };

  return (
    <ImageBackground
      source={{uri: bgURL}}
      resizeMode="cover"
      style={styles.backgroundImageStyle}>
      <View style={styles.container}>
        <Text style={styles.headerTextStyle}> Login</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.passwordTextStyle}>Forgot password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButtonStyle}
          onPress={() => handleLogin()}>
          <Text style={styles.loginTextStyle}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomeTextStyle1}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.bottomeTextStyle2}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
