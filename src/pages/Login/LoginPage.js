import React from 'react'
import NotLoginNavBar from '../../components/TopNav/NotLoginNav/index';
import Login from '../../assets/LOGIN.svg'
import styled from 'styled-components';
import AnimationBar from '../../components/AnimationBar';
import {LoginButtonStyle} from '../../components/commons/Button/LoginButton';
import colors from '../../styles/colors';
import axios from 'axios';
import { BaseUrl } from '../../privateKey';
import { useState } from 'react';
import { requestLogin, requestRefreshToken } from '../../apis/index';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/user';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useRecoilState(userState);

    const btndisabled = email && password;

    const navigate = useNavigate();

    const LoginClickHandler = () => {
        navigate("/");
      }

  return (
      <>
        <NotLoginNavBar />
        <AnimationBar/>
        <FormStyle
            onSubmit={async (e) => {
                e.preventDefault();
                await axios({
                    url: `${BaseUrl}/auth/login`,
                    method: "post",
                    data: JSON.stringify({
                        email,
                        password,
                    }),
                    headers: {
                        "Content-Type": "application/json; chaerset=utf-8",
                    }
                }).then((res) => {
                    console.log(res);
                    const { accessToken } = res.data;
                    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                    localStorage.setItem('refreshToken', res.data['refreshToken']);
                    localStorage.setItem('accessToken', res.data['accessToken']);
                    setEmail("");
                    setPassword("");
                    setUser(res.data);
                    alert("로그인 성공!")
                    navigate("/");
                }).catch((err) => {
                    console.log(err);
                    if (err.message == "비밀번호를 잘못 입력하였습니다.") {
                        requestRefreshToken();
                    }
                    alert("로그인 실패")
                })
            }}>
            <LoginImg src={Login} alt='login' />
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
            <LoginButtonStyle type= "submit" disabled={btndisabled ? false : true}>로그인</LoginButtonStyle>
        </FormStyle>
      </>
  )
}

export default LoginPage

const FormStyle = styled.form`
    margin: 0 auto;
    align-items: center;
    display: flex;
    flex-direction: column;
`
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