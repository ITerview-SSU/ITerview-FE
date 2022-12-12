import colors from '../../../styles/colors';
import styled from 'styled-components';

export const NavLoginLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 36px;

    justify-content: center;
    gap: 188px;
`

export const UserAndLogoutText = styled.div`
    color: ${colors.white_100};
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const UserNickname = styled.div`
    width: fit-content;
    height: 25px;

    font-weight: 700;
    font-size: 18.4932px;
    line-height: 25px;
    letter-spacing: 0.05em;
`

export const Nim = styled.div`
    width: 18px;
    height: 25px;

    font-size: 18.4932px;
    line-height: 25px;
    letter-spacing: 0.05em;
`

export const Boundary = styled.div`
    width: 11px;
    padding-left: 15.03px;
    padding-right: 5px;
`

export const LogoutText = styled.button`
    width: 71px;
    height: 25px;

    font-size: 18.4932px;
    line-height: 25px;
    letter-spacing: 0.05em;
    background-color: transparent;
    border: none;
    outline: none;

    color: white;

`