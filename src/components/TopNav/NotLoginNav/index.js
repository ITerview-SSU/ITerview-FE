import Reac, {useState} from 'react'
import { Logolayout, NavLayout, Logo2Layout, SignupButton, LogininButton, SignButtonLayout } from './styles';
import Logo from "../../../assets/Logo.svg"
import Logo2 from "../../../assets/Logo_2.svg"
import { NavLoginLayout, Nim, UserAndLogoutText, UserNickname, Boundary, LogoutText } from '../LoginNav/styles';
import { useNavigate } from 'react-router-dom';
import { userState } from '../../../recoil/user';
import SearchBar from '../../commons/SearchBar/SearchBar';
import { useRecoilValue, useRecoilState } from 'recoil';
import axios from 'axios';
import { BaseUrl } from '../../../privateKey';

function NotLoginNavBar() {

  const [isLogined, setIsLogined] = useState();
  const [user, setUser] = useRecoilState(userState);

  const navigate = useNavigate();

  const logoutHandler = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    axios.get(`${BaseUrl}/auth/logout`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization : `Bearer ${refreshToken}`
      },})
    .then((res) => {
      if(res.status === 200){
        setUser(null);
        localStorage.removeItem('refreshToken',)
        alert("로그아웃 성공!");
        navigate("/");

    } else {
        alert('Error')
    }
    })
  }

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
    {user?
      <>
      <SearchBar />
      <UserAndLogoutText>
          <UserNickname>유하은</UserNickname>
          <Nim>님</Nim>
          <Boundary>|</Boundary>
          <LogoutText onClick={logoutHandler}>로그아웃</LogoutText>
      </UserAndLogoutText>
    </> :
      (<>
        <SignButtonLayout>
            <LogininButton onClick={onClickLoginHandler}>로그인</LogininButton>
            <SignupButton onClick={onClickSignupHandler}>회원가입</SignupButton>
        </SignButtonLayout>
      </>)
      }
      </NavLoginLayout>
    </NavLayout> 
  )
}

export default NotLoginNavBar;