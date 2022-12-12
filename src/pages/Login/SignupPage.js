import React from 'react'
import axios from "axios";
import NotLoginNavBar from '../../components/TopNav/NotLoginNav/index';
import Join from '../../assets/JOIN.svg';
import styled from 'styled-components';
import AnimationBar from '../../components/AnimationBar';
import LoginButton from '../../components/commons/Button/LoginButton';
import colors from '../../styles/colors';
import {SignupButtonStyle} from '../../components/commons/Button/SignupButton';
import { useState } from 'react';
import { BaseUrl } from '../../privateKey';
import { requestSignup } from '../../apis/index';
import { useNavigate } from 'react-router-dom';


function SignupPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigate = useNavigate();

    const Btndisabled = username && email && (password === passwordConfirm);


  return (
      <>
        <NotLoginNavBar />
        <AnimationBar/>
        <FormStyle
            onSubmit={async (e) => {
                e.preventDefault();
                try{
                    const data = await axios({
                    url: `${BaseUrl}/auth/signup`,
                    method: "POST",
                    data: JSON.stringify({
                        username,
                        email,
                        password,
                    }),
                    headers: {
                        "Content-Type": "application/json; chaerset=utf-8",
                    }
                });
                setUsername("");
                setEmail("");
                setPassword("");
                alert("회원가입 성공!");
                navigate("/login");
                } catch (err) {
                    console.log(err);
                    alert("회원가입 실패")
                }
                console.log({username, email, password});
            }}>
            <JoinImg src={Join} alt='join' />
            <LoginNicknameBoxLayout>
            <div>닉네임</div>
            <PlaceholderStyle
                placeholder='멋쟁이사자'
                type='text'
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            </LoginNicknameBoxLayout>
            <LoginEmailBoxLayout>
                <div>이메일</div>
                <PlaceholderStyle
                    placeholder='example@example.com'
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </LoginEmailBoxLayout>
            <LoginPasswordBoxLayout>
                <div>비밀번호</div>
                <PlaceholderStyle
                    placeholder='••••••••'
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </LoginPasswordBoxLayout>
            <LoginPasswordBoxLayout2>
                <div>비밀번호 확인</div>
                <PlaceholderStyle
                    placeholder='••••••••'
                    type="password"
                    value={passwordConfirm}
                    onChange={(e) => {
                        setPasswordConfirm(e.target.value);
                    }}
                />
            </LoginPasswordBoxLayout2>
            <SignupButtonStyle type= "submit" disabled={Btndisabled ? false : true}>회원가입</SignupButtonStyle>
        </FormStyle>
      </>
  )
}

export default SignupPage

const FormStyle = styled.form`
    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
`

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
const LoginPasswordBoxLayout2 = styled.div`
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