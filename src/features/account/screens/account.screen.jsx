import React from "react";

import LottieView from "lottie-react-native";

import {
  AccountCover,
  AccountBackground,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account-background.style";

import Spacer from "../../../components/spacer/spacer.component";

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      <AccountContainer>
        <Title variant="heading">Meals To Go</Title>
        <Spacer position="bottom" size="large" />
        <AuthButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer position="bottom" size="medium" />
        <AuthButton
          icon="account-plus"
          mode="outlined"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
