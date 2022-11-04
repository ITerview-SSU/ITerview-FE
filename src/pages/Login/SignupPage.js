import React from 'react'
import NotLoginNavBar from '../../components/TopNav/NotLoginNav/index';
import Join from '../../assets/JOIN.svg';
import styled from 'styled-components';
import AnimationBar from '../../components/AnimationBar';
import LoginButton from '../../components/commons/Button/LoginButton';
import colors from '../../styles/colors';
import SignupButton from '../../components/commons/Button/SignupButton';

function SignupPage() {
  return (
      <>
        <NotLoginNavBar />
        <AnimationBar/>
        <JoinImg src={Join} alt='join' />
        <LoginNicknameBoxLayout>
          <div>닉네임</div>
          <PlaceholderStyle placeholder='멋쟁이사자' type='text'/>
        </LoginNicknameBoxLayout>
        <LoginEmailBoxLayout>
            <div>이메일</div>
            <PlaceholderStyle placeholder='example@example.com' type="email"/>
        </LoginEmailBoxLayout>
        <LoginPasswordBoxLayout>
            <div>비밀번호</div>
            <PlaceholderStyle placeholder='••••••••' type="password" />
        </LoginPasswordBoxLayout>
        <SignupButton/>
      </>
  )
}

export default SignupPage

const JoinImg = styled.img`
    padding-top: 124px;

    margin: 0 auto;

    width: 113px;
    height: 52px;
`
const LoginNicknameBoxLayout = styled.div`
    padding-top: 93px;
    margin: 0 auto;
`
const LoginEmailBoxLayout = styled.div`
    padding-top: 30px;
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