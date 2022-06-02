import styled from "styled-components";
import {View, Text, Image,TextInput, TouchableOpacity} from 'react-native'
import Constants from "expo-constants";
// colors

const StatusBarHeight = Constants.statusBarHeight

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    orange: "#FF7642"

}

const {primary, secondary, tertiary, darkLight, orange} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px 25px 0px 25px ;
    padding-top: ${StatusBarHeight +10}px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageTitle = styled.Text`
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: ${orange};
    padding: 60px 30px 10px 30px;
`;

export const SubTitile = styled.Text`
    font-size: 15px;
    margin-bottom: 30px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${orange};
`;

export const PageLogo = styled.Image`
    width: 200px;
   
    top: 20px;
`;

export const PageFooter = styled.Image`
    position:absolute;
    bottom: 0;
    flex:1;
`;

export const GearIcon = styled.Image`
    flex:1;
    width:36px;
    height:36px;
    resizeMode: contain;
    position: absolute;
    right: 6%;
    top: 6%
`;

export const TitanLogo = styled.Image`
    flex:1;
    width: 120px;
    height:120px;
    resizeMode: contain;
    position: absolute;
    left: 6%;
`;

export const StyledFormArea = styled.View`
    width: 100%;
`;

export const StyledTextInput = styled.TextInput`
    background-color : ${secondary};
    padding: 10px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 4px;
    margin-bottom: 3px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 12px;
    background-color: ${orange};
    justify-content: center;
    align-items: center
    border-radius:5px;
    margin-vertical: 5px;
    height: 50px;
`;

export const ButtonText = styled.Text`
    color: ${primary}
    font-size: 16px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color : ${orange}
    margin-vertical: 5px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding:1px;
`;

export const ExtraText = styled.Text`
    justify-content: center; 
    align-content: center;
    color: ${orange};
    font-size: 15px
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${orange};
    font-size: 15px;
`;