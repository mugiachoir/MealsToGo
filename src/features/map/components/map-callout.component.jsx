import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import Text from "../../../components/typography/text.component";
import CompactRestaurantInfo from "../../../components/restaurant/compact-restaurant-info.component";

const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo restaurant={restaurant} />
);

export default MapCallout;
