import styled from "styled-components";

export const MediaDiv = styled.div`
    min-height: calc(var(--vh, 1vh) * 100);
    width: 992px < x <= 1200px;
    min-width: 1200px;
    margin: 0 auto;
    background-color: #F5F5F7;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1200px) {
        width: 100%;
    }

    position: relative;
    min-height: 100%;
    height: 100%;
`;