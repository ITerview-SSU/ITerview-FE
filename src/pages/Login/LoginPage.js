import React from 'react'
import NotLoginNavBar from '../../components/TopNav/NotLoginNav/index';
import Login from '../../assets/LOGIN.svg'
import styled from 'styled-components';
import AnimationBar from '../../components/AnimationBar';
import LoginButton from '../../components/commons/Button/LoginButton';
import colors from '../../styles/colors';

function LoginPage() {
  return (
      <>
        <NotLoginNavBar />
        <AnimationBar/>
        <LoginImg src={Login} alt='login' />
        <LoginEmailBoxLayout>
            <div>이메일</div>
            <PlaceholderStyle placeholder='example@example.com' type="email"/>
        </LoginEmailBoxLayout>
        <LoginPasswordBoxLayout>
            <div>비밀번호</div>
            <PlaceholderStyle placeholder='••••••••' type="password" />
        </LoginPasswordBoxLayout>
        <LoginButton />
      </>
  )
}

export default LoginPage

const LoginImg = styled.img`
    padding-top: 124px;

    margin: 0 auto;

    width: 149px;
    height: 52px;
`
const LoginEmailBoxLayout = styled.div`
    padding-top: 93px;
    margin: 0 auto;
`
const LoginPasswordBoxLayout = styled.div`
    padding-top: 30px;
    margin: 0 auto;
`
const PlaceholderStyle = styled.input`
    width: 435px;
    height: 65px;
    margin-top: 10px;
    
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    border: 1px solid #C0C0C0;
    border-radius: 10px;
    padding-left: 25px;

    ::placeholder {
        color: ${colors.black_20};
    }

    :focus::placeholder {
        color: transparent;
    }
`