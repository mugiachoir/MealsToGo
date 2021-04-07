import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AccountCover,
  AccountBackground,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorText,
} from "../components/account-background.style";

import Spacer from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import FadeInView from "../../../components/animations/fade.animation";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  return (
    <FadeInView>
      <AccountBackground>
        <AccountCover />

        <AccountContainer>
          <Title variant="heading">Login</Title>
          <AuthInput
            label="Email"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(e) => setEmail(e)}
          />
          <Spacer position="bottom" size="medium" />
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />

          {error && (
            <Spacer position="top" size="medium">
              <ErrorText>{error}</ErrorText>
            </Spacer>
          )}

          <Spacer position="bottom" size="medium" />
          {!isLoading ? (
            <AuthButton
              icon="login"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator
              size={40}
              animating={true}
              color={Colors.redA700}
            />
          )}
        </AccountContainer>

        <Spacer position="bottom" size="large" />
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Go Back
        </AuthButton>
      </AccountBackground>
    </FadeInView>
  );
};

export default LoginScreen;
