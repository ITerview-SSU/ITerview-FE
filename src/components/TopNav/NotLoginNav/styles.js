import styled from "styled-components";
import colors from '../../../styles/colors';

export const NavLayout = styled.div`
    width: 100%;
    height: 104px;
    background-color: ${colors.black_100};
`
export const Logolayout = styled.div`
    display: flex;
    align-items: center;
`

export const Logo2Layout = styled.div`
    padding-left: 20px;
`

export const SignupButton = styled.button`
    width: 82px;
    height: 32px;

    text-align: center;

    background-color: ${colors.white_100};
    border-radius: 34px;

    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.05em;
    border: none;
`

export const LogininButton = styled.button`
    width: 67px;
    height: 32px;

    text-align: center;

    background-color: ${colors.black_100};
    color: ${colors.white_100};
    border-radius: 34px;

    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.05em;
    border: none;
`

export const SignButtonLayout = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 118px;
`