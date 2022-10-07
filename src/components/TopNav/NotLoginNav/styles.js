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
    padding-left: 118px;
    padding-top: 36px;
`

export const Logo2Layout = styled.div`
    padding-left: 20px;
`

export const SignupButton = styled.button`
    position: absolute;
    width: 82px;
    height: 32px;
    left: 1240px;
    top: 40px;

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
    position: absolute;
    width: 67px;
    height: 32px;
    left: 1156px;
    top: 40px;

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