import { ImageBackground } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Text from "../../../components/typography/text.component";

import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(240, 240, 255, 0.2);
`;

export const AccountContainer = styled.View`
  background-color: rgba(240, 240, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  width: 80%;
  max-width: 400px;
  margin: 0px auto;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  border-width: 2px;
  border-color: ${(props) => props.theme.colors.brand.primary};
`;

export const AuthInput = styled(TextInput).attrs((props) => ({
  theme: {
    colors: {
      primary: props.theme.colors.brand.primary,
    },
  },
  selectionColor: props.theme.colors.brand.primary,
}))``;

export const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
`;

export const ErrorText = styled(Text).attrs({
  variant: "error",
})`
  text-align: center;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  position: absolute;
  top: 3%;
  height: 40%;
`;
