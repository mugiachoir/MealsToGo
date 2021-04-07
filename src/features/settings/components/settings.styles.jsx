import { Button, TextInput, List } from "react-native-paper";
import Text from "../../../components/typography/text.component";
import SafeArea from "../../../components/utility/safe-area.component";

import styled from "styled-components/native";

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const AvatarContainer = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const NoFavouritesArea = styled(SafeArea)`
  justify-content: center;
  align-items: center;
`;
