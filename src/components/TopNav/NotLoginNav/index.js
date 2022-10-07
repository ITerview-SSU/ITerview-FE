import React from 'react'
import { Logolayout, NavLayout, Logo2Layout, SignupButton, LogininButton } from './styles';
import Logo from "../../../assets/Logo.svg"
import Logo2 from "../../../assets/Logo_2.svg"

function NotLoginNavBar() {
  return (
    <NavLayout>
      <Logolayout>
        <img src={Logo} alt="logo"/>
        <Logo2Layout>
          <img src={Logo2} alt="iTerview"/>
        </Logo2Layout>
      </Logolayout>
      <LogininButton>로그인</LogininButton>
      <SignupButton>회원가입</SignupButton>
    </NavLayout>
  )
}

export default NotLoginNavBar;