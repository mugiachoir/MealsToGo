import styled from "styled-components/native";
import { Image, View } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card.Content)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[0]};
`;

export const Info = styled(Card.Content)`
  padding-vertical: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
  flex-direction: row;
`;

export const Icons = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Image)`
  height: 20px;
  width: 20px;
`;

export const Row = styled(View)`
  flex-direction: row;
  margin-vertical: ${(props) => props.theme.space[2]};
  justify-content: space-between;
  align-items: center;
`;
