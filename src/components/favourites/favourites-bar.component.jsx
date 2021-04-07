import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

import Spacer from "../spacer/spacer.component";
import CompatctRestaurantInfo from "../restaurant/compact-restaurant-info.component";
import Text from "../typography/text.component";

const FavouritesWrapper = styled(Card)`
  padding: ${(props) => props.theme.space[2]};
  z-index: 999;
  border-radius: ${(props) => props.theme.space[3]};
`;

const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper elevation={3}>
      <Spacer position="left" size="medium">
        <Text>Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split(" ").join("");
          return (
            <Spacer key={key} position="right" size="medium">
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <CompatctRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
