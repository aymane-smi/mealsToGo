import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper } from "../components/account.styles";
import LottieView from "lottie-react-native";

export const AccountScreen = ({navigation}) => {
    return <AccountBackground>
        <AccountCover />
        <AnimationWrapper>
            <LottieView key="animation"
            style={{flex: 1}}
                        autoPlay
                        loop
                        resizeMode="cover"
                        source={require("../../../../assets/watermelon.json")}
            />
        </AnimationWrapper>
        <AccountContainer>
            <Title>Meals To Go</Title>
            <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={() => {
                    navigation.navigate("Login")
                }}
            >
                Login
            </AuthButton>
            <AuthButton
                icon="email"
                mode="contained"
                onPress={() => {
                    navigation.navigate("Register")
                }}
            >
                Register
            </AuthButton>
        </AccountContainer>
    </AccountBackground>
};