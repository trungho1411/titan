import React, {useState} from "react";

//formik
import { Formik } from "formik";

//icon
import {Octicons, Ionicons} from '@expo/vector-icons'

//keyboard avoiding wrapper
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'

import {
    StyledContainer,
    InnerContainer,
    PageTitle, SubTitile,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon, 
    Colors,
    StyledButton,
    ButtonText,
    Line, 
    ExtraText, ExtraView, TextLink, TextLinkContent

} from './../components/styles'

import {Keyboard, View} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";

//SQlite
import {insertUser,getUser}  from './../navigators/initdb'

// //colors
 const { darkLight, orange} = Colors


const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)
    const signUp = (value) => {
        console.log("signup@@@@@@@@@@@@@@@@@values", value);
        insertUser(value.email, value.fullName, value.password);

        getUser(value.email, (u)=>{
            console.log("1223123123123123123", u);
        });
    }
    return (
        <StyledContainer>
            <KeyboardAvoidingWrapper>
                <InnerContainer>
                    <PageTitle>Welcome to TitanDMS</PageTitle>
                    <SubTitile>Account Signup</SubTitile>
                    <Formik
                        initialValues={{email: '', fullName: '', password: ''}}
                        onSubmit={(value) => {
                            console.log(value);
                            navigation.navigate('Welcome')
                        }}
                    >{
                        ({handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledFormArea>
                                <MyTextInput 
                                    label="Email Address"
                                    icon='mail'
                                    placeholder = 'name@titandms.com.au'
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                />
                                <MyTextInput 
                                    label="LastName/FirstName"
                                    icon='person'
                                    placeholder = 'Your Full Name'
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('fullName')}
                                    onBlur={handleBlur('fullName')}
                                    value={values.fullName}
                                />
                                <MyTextInput 
                                    label='Password'
                                    icon='lock'
                                    placeholder = '********'
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword = {hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MyTextInput 
                                    label='Confirm Password'
                                    icon='lock'
                                    placeholder = '********'
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword = {hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <StyledButton>
                                    <ButtonText onPress={signUp(values)}>
                                        Sign Up
                                    </ButtonText>
                                </StyledButton>
                                <Line />
                                <ExtraView>
                                    <ExtraText>Already have an account ? </ExtraText>
                                    <TextLink onPress={() => navigation.navigate('.') }>
                                        <TextLinkContent>Login</TextLinkContent>
                                    </TextLink>
                                </ExtraView>
                            </StyledFormArea>
                        )
                    }
                    </Formik>
                </InnerContainer>
            </KeyboardAvoidingWrapper>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={orange} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={ () => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}  />
                </RightIcon>
            )}
        </View>
    )
}


export default Signup;