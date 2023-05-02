import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "src/services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.size_16};
`;

const SearchbarStyled = styled(Searchbar)`
  background: ${(props) => props.theme.colors.bg.primary};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <SearchbarStyled
        value={searchKeyword}
        placeholder="Search for a location"
        onSubmitEditing={() => searchKeyword.length && search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
        onFocus={() => searchKeyword === keyword && setSearchKeyword("")}
      />
    </SearchContainer>
  );
};
