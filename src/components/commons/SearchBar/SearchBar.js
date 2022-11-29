import React from 'react'
import { StyleSearchBar, MagnifierImg, SearchBoxStyle } from './styles';
import Magnifier from "../../../assets/magnifier.svg";

const SearchBar = () => {

    return (
        <>
            <SearchBoxStyle>
                <StyleSearchBar placeholder="검색어를 입력하세요">
                </StyleSearchBar>
                <MagnifierImg src={Magnifier}></MagnifierImg>
            </SearchBoxStyle>
        </>
    );
};

export default SearchBar