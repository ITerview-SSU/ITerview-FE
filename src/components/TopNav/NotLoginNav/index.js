import React from 'react'
import { Logolayout, NavLayout, Logo2Layout, SignupButton, LogininButton, SignButtonLayout } from './styles';
import Logo from "../../../assets/Logo.svg"
import Logo2 from "../../../assets/Logo_2.svg"
import { NavLoginLayout } from '../LoginNav/styles';

function NotLoginNavBar() {
  return (
    <NavLayout>
      <NavLoginLayout>
        <Logolayout>
            <img src={Logo} alt="logo"/>
            <Logo2Layout>
              <img src={Logo2} alt="iTerview"/>
            </Logo2Layout>
        </Logolayout>
        <SignButtonLayout>
            <LogininButton>로그인</LogininButton>
            <SignupButton>회원가입</SignupButton>
        </SignButtonLayout>
      </NavLoginLayout>
    </NavLayout> 
  )
}

export default NotLoginNavBar;