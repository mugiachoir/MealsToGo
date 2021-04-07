import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

import styled from "styled-components/native";

import { LocationContext } from "../../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Search = ({ isFavouritesToggled, onFavouritesToggled }) => {
  const onChangeSearch = (query) => {
    setSearchKeyword(query);
  };
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggled}
        placeholder="Search location"
        value={searchKeyword}
        onChangeText={onChangeSearch}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
