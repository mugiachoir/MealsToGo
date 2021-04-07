import React, { useContext } from "react";
import { NoFavouritesArea } from "../components/settings.styles";
import { TouchableOpacity } from "react-native";
import RestaurantList from "../../restaurants/components/restaurant-styles.component";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card/restaurant-info-card.component";

import SafeArea from "../../../components/utility/safe-area.component";
import Text from "../../../components/typography/text.component";
import Spacer from "../../../components/spacer/spacer.component";

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import FadeInView from "../../../components/animations/fade.animation";

const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
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
  ) : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};

export default FavouritesScreen;
