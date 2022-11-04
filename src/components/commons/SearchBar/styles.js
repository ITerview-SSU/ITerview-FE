import styled from "styled-components";

export const SearchBoxStyle = styled.div`
    height: 30px;
    position: relative;
    
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    width: 100%;
    margin-left: 189px;
`

export const StyleSearchBar = styled.input`
    
    width: 419px;
    height: 40px;

    background: #F5F5F7;
    border-radius: 42px;
    border: none;
    padding-left: 22px;
    :focus {
        outline: 0;
        font-size: 15px;
        ::placeholder {
            color: transparent;
        }
    }

    box-sizing: border-box;
`

export const MagnifierImg = styled.img`
    margin-right: 19px;
    width: 16px;
    height: 16px;
    position: absolute;
`
