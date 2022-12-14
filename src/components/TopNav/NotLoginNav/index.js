import Reac, {useState, useEffect} from 'react'
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
import styled from 'styled-components';

function NotLoginNavBar() {

  const [isLogined, setIsLogined] = useState();
  const [user, setUser] = useRecoilState(userState);

  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  const [isNikname, setIsNikname] = useState("");

  useEffect(() => {
    if (user !== null)
      axios.get(`${BaseUrl}/auth/info`,{
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
      },})
      .then ((res) => {
        // axios.defaults.headers.common['Authorization'] = `Bearer ${res.payload.accessToken}`
        console.log(res.data);
        setIsNikname(res.data.username);
      })
      .catch ((err) => {
        console.log(err);
      })
  })

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

  const onClickGoRolePage = () => {
    navigate("/select/role");
  }

  const onClickGoCommonPage = () => {
    navigate("/question/common");
  }

  const onClickGoMyPage = () => {
    navigate("/mypage");
  }

  const onClickFEPage = () => {
    navigate("/question/fe");
  }
  const onClickBEPage = () => {
    navigate("/question/be");
  }
  const onClickIOSPage = () => {
    navigate("/question/ios");
  }
  const onClickAndroidPage = () => {
    navigate("/question/android");
  }
  const onClickUIUXPage = () => {
    navigate("/question/uiux");
  }
  const onClickPMPage = () => {
    navigate("/question/pm");
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
          <NiknameFlex>
          <UserNickname>{isNikname}</UserNickname>
          <Nim>님</Nim>
          </NiknameFlex>
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
      {user &&
      <DropDown>
      <SiteMap>
      <SiteMapBtn onClick={onClickGoCommonPage}>공통별 질문</SiteMapBtn>
      <Boundary style={{fontWeight:"500px", fontSize:"18px", lineHeight:"200.2%", color:"white"}}>|</Boundary>
      <SiteMapBtn onClick={onClickGoRolePage}>직종별 질문</SiteMapBtn>
      <Boundary style={{fontWeight:"500px", fontSize:"18px", lineHeight:"200.2%", color:"white"}}>|</Boundary>
      <SiteMapBtn onClick={onClickGoMyPage}>마이페이지</SiteMapBtn>
      </SiteMap>
      <DropDownMenu>
        <MenuLi onClick={onClickFEPage}>Front-End</MenuLi>
        <MenuLi onClick={onClickBEPage}>Back-End</MenuLi>
        <MenuLi onClick={onClickIOSPage}>IOS</MenuLi>
        <MenuLi onClick={onClickAndroidPage}>Android</MenuLi>
        <MenuLi onClick={onClickUIUXPage}>UI/UX Designer</MenuLi>
        <MenuLi onClick={onClickPMPage}>Product Manager</MenuLi>
      </DropDownMenu>
      </DropDown> 
}
    </NavLayout> 
  )
}

export default NotLoginNavBar;

const SiteMap = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;

  margin-top: 17px;
`
const SiteMapBtn = styled.button`
  font-weight: 400;
  font-size: 18px;
  line-height: 200.2%;

  color: white;

  border: none;
  background-color: transparent;

  :hover {
    font-weight: 700;
  }
`
const DropDownMenu = styled.li`
  padding-top: 13px;
  color: white;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 10px;

  justify-content: center;
  text-align: center;
`

const DropDown = styled.li`
  z-index: 1;
  list-style: none;
  &:hover ${DropDownMenu} {
  z-index: 1;
  display: block;

  position: absolute;
  background-color: #303132;
  width: 100%;
  height: 170px;
  }

  ${DropDownMenu} {
    z-index: 1;
    display: none;
    list-style: none;
  }
`
const MenuLi = styled.li`
  margin-bottom: 10px;
  color: #C0C0C0;
  :hover {
    color: white;
  }
  font-family: "Gotham";
`
const NiknameFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`