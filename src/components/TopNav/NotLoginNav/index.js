import React from 'react'
import { Logolayout, NavLayout, Logo2Layout, SignupButton, LogininButton, SignButtonLayout } from './styles';
import Logo from "../../../assets/Logo.svg"
import Logo2 from "../../../assets/Logo_2.svg"
import { NavLoginLayout } from '../LoginNav/styles';
import { useNavigate } from 'react-router-dom';

function NotLoginNavBar() {
  const navigate = useNavigate();

  const onClickLogoHandler = () => {
    navigate("/");
  }
  
  const onClickLoginHandler = () => {
    navigate("/login");
  }

  const onClickSignupHandler = () => {
    navigate("/signup");
  }

  return (
    <NavLayout>
      <NavLoginLayout>
        <Logolayout onClick={onClickLogoHandler}>
            <img src={Logo} alt="logo"/>
            <Logo2Layout>
              <img src={Logo2} alt="iTerview"/>
            </Logo2Layout>
        </Logolayout>
        <SignButtonLayout>
            <LogininButton onClick={onClickLoginHandler}>로그인</LogininButton>
            <SignupButton onClick={onClickSignupHandler}>회원가입</SignupButton>
        </SignButtonLayout>
      </NavLoginLayout>
    </NavLayout> 
  )
}

export default NotLoginNavBar;