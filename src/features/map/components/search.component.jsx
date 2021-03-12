import React, { useState, useContext, useEffect } from "react";
import { View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  width: 100%;
`;

const Search = () => {
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
        placeholder="Search location"
        icon="map"
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
