import styled from "styled-components/native";
import { FlatList } from "react-native";
import transform from "css-to-react-native";

const RestaurantList = styled(FlatList).attrs((props) => ({
  contentContainerStyle: transform([["padding", props.theme.space[3]]]),
}))``;

export default RestaurantList;
