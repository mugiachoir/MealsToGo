import React, { useContext, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-card/restaurant-info-card.component";
import Search from "../components/search/search.component";
import RestaurantList from "../components/restaurant-styles.component";
import FadeInView from "../../../components/animations/fade.animation";

import SafeArea from "../../../components/utility/safe-area.component";
import Spacer from "../../../components/spacer/spacer.component";
import FavouritesBar from "../../../components/favourites/favourites-bar.component";

import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const LoadingContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          onNavigate={navigation.navigate}
          favourites={favourites}
        />
      )}
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator
            size={50}
            animating={true}
            color={Colors.redA700}
          />
        </LoadingContainer>
      )}

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
