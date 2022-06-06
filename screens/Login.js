import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Dimensions, KeyboardAvoidingView, Platform, Keyboard, Button } from 'react-native';

//formik
import { Formik } from 'formik';

//icon
import { Octicons, Ionicons } from '@expo/vector-icons';

//API client
import axios from 'axios';


import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  TitanLogo,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledButton,
  ButtonText,
  PageFooter,
  GearIcon,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from './../components/styles';

//SQLite
// import SQLite from 'react-native-sqlite-storage';
// import {openDatabase} from 'react-native-sqlite-storage';
// var SQLite = require('react-native-sqlite-storage')
import * as SQLite from 'expo-sqlite';
import initDb from '../navigators/initdb';

const win = Dimensions.get('screen');

//colors
const { darkLight, orange } = Colors;
// let db = openDatabase({
//   name: 'sqlite.db',
//   location: "default"
// });
// const db = SQLite.openDatabase('dbName', "1.0");

// // db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
// //   console.log('Foreign keys turned on')
// // );
// const query = `CREATE TABLE contacts (
// 	contact_id INTEGER PRIMARY KEY,
// 	first_name TEXT NOT NULL,
// 	last_name TEXT NOT NULL
// )`;
// //it looks fine to me



// db.transaction(
//       tx => {
//         tx.executeSql('select * from contacts where email=asdadsa', [], (trans, result) => {
//           console.log("11111111111111", result)
//         });
//       }
//     );

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const getUserFromEmail = (value) => {
    console.log(value)
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT EMAIL FROM Users WHERE email=?",
        [email],
        (tx, results) => {
          for (let i =0; i<=email.length; i++){
            if(results.email === email[i]){

            }else{

            }
          }

        }
      )
    })
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true); // or some other action
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false); // or some other action
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <View style={{ ...styles.container, width: win.width }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <InnerContainer style={{paddingTop: '20%'}}>
            <PageLogo source={require('../assets/image/logo_login.png')} />
            <TitanLogo source={require('../assets/image/Titan_Logo.png')} />
            <GearIcon source={require('../assets/image/gear.png')} /> 
            <ImageBackground
              style={{
                width: win.width,
                height: 300,
                position: 'absolute',
                bottom: isKeyboardVisible ? -400 : 0,
                left: 0,
              }}
              imageStyle={{
                resizeMode: 'stretch',
                alignSelf: 'flex-end',
              }}
              source={require('../assets/image/bg_login1.png')}
            ></ImageBackground>
            <View style={{width: '88%'}}>
              <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
              >
                {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
                  <StyledFormArea>
                    <MyTextInput
                      icon="mail"
                      placeholder="name@titandms.com.au"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      keyboardType="email-address"
                    />
                    <MyTextInput
                      icon="lock"
                      placeholder="********"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry={hidePassword}
                      isPassword={true}
                      hidePassword={hidePassword}
                      setHidePassword={setHidePassword}
                    />
                    <StyledButton onPress={handleSubmit}>
                      <ButtonText>Login</ButtonText>
                    </StyledButton>
                    <Line />
                    <ExtraView>
                      <ExtraText>Don't have an account? </ExtraText>
                      <TextLink onPress={() => navigation.navigate("Login Page")}>
                        <TextLinkContent>Sign up</TextLinkContent>
                      </TextLink>
                    </ExtraView>
                  </StyledFormArea>
                )}
              </Formik>
            </View>
          </InnerContainer>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={orange} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};


export default Login;
