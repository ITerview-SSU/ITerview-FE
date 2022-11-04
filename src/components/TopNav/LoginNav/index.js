import React from 'react'
import Logo from "../../../assets/Logo.svg"
import Logo2 from "../../../assets/Logo_2.svg"
import SearchBar from '../../commons/SearchBar/SearchBar'
import { Logolayout, NavLayout, Logo2Layout } from '../NotLoginNav/styles';
import { NavLoginLayout, UserAndLogoutText, UserNickname, Nim, Boundary, LogoutText } from '../../TopNav/LoginNav/styles';

function LoginNav() {
  return (
    <NavLayout>
        <NavLoginLayout>
            <Logolayout>
                <img src={Logo} alt="logo"/>
                <Logo2Layout>
                <img src={Logo2} alt="iTerview"/>
                </Logo2Layout>
            </Logolayout>
            <SearchBar />
            <UserAndLogoutText>
                <UserNickname>유하은</UserNickname>
                <Nim>님</Nim>
                <Boundary>|</Boundary>
                <LogoutText>로그아웃</LogoutText>
            </UserAndLogoutText>
        </NavLoginLayout>
    </NavLayout>
  )
}

export default LoginNav;