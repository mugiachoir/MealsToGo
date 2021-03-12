import React from "react";
import { TouchableOpacity, Platform } from "react-native";
import WebView from "react-native-webview";
import styled from "styled-components/native";
import Text from "../typography/text.component";
import Spacer from "../spacer/spacer.component";

const CompactWebView = styled(WebView)`
  border-radius: ${(props) => props.theme.space[2]};
  width: 120px;
  height: 100px;
`;

const CompactImage = styled.Image`
  border-radius: ${(props) => props.theme.space[2]};
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: ${(props) => props.theme.space[2]};
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Spacer position="bottom" size="medium" />
      <Text variant="caption">{restaurant.name}</Text>
    </Item>
  );
};

export default CompactRestaurantInfo;
