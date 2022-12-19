import styled from "styled-components";

export const ModalLayout = styled.div`
    z-index: 999;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* max-height: 50%; */
    width: 1000px;
    height: 600px;
    box-shadow: 0px 0px 12.92px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    background: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    h1 {
        margin-top: 30px;
        margin-bottom: 28px;
        font-weight: 700;
        font-size: 20px;
        line-height: 29px;
    }
`;

export const ModalCloseButton = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
    width: 1.2rem;
    height: 1.2rem;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1.2rem;
    &:active {
        background-color: white;
        filter: brightness(80%);
    }
`;

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;