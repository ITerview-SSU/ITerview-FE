import React from 'react'
import AnimationBar from '../../components/AnimationBar'
import NotLoginNavBar from '../../components/TopNav/NotLoginNav'
import styled from 'styled-components';
import colors from '../../styles/colors';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/user';
import Iterview from "../../assets/Iterview.svg";
import { StartButtonLayout } from '../../components/commons/Button/styles';
import { useNavigate } from 'react-router-dom';

function Mypage() {

  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const onClickHome = () => {
    navigate("/");
  }

  return (
    <>
    { user ?
    <>
      <NotLoginNavBar/>
      <AnimationBar/>
      <QuestionPageLayout>
        <TitleBox>
          <QuestionPageTitle>MY PAGE</QuestionPageTitle>
          <DescribeStyle>
            <div>내 답변과 면접 영상을 확인해 보세요.</div>
            <div>스스로 피드백 하는 시간을 가질 수 있습니다.</div>
          </DescribeStyle>
        </TitleBox>
      </QuestionPageLayout>
    </>
    :
    <>
        <NotLoginNavBar />
        <AnimationBar />
        <img style={{width:"250px", height:"100px", margin:"0 auto", marginTop:"100px"}} src={Iterview} />
        <div
          style={{
            margin:"0 auto",
            fontSize:"40px",
            fontWeight:"600px",
            marginTop:"50px"
          }}
        >회원이 아니시군요!</div>
        <div
          style={{
            margin:"0 auto",
            fontSize:"20px",
            fontWeight:"600px",
            marginTop:"90px"
        }}>계속 이용하시려면 로그인 해주세요</div>
        <div
          style={{
            margin:"0 auto",
            fontSize:"20px",
            fontWeight:"600px",
            marginTop:"20px"
        }}>이 페이지는 회원가입한 멤버만 볼 수 있습니다.</div>
        <StartButtonLayout style={{
          margin:"0 auto",
          marginTop:"80px",
          marginBottom:"250px"
        }}
        onClick={onClickHome}>홈으로</StartButtonLayout>
    </>
}
  </>
  )
}

export default Mypage

const QuestionPageLayout = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleBox = styled.div`
  width: 1204px;
  margin: 0 auto;
`

const QuestionPageTitle = styled.div`
  width: 593px;
  height: 73px;
  font-family: 'Gotham';
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  color: ${colors.black_100};

  padding-top: 71px;
`

const DescribeStyle = styled.div`
  padding-top: 43px;
  padding-bottom: 71px;
  width: 408px;
  height: 76px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-weight: 700;
  font-size: 19px;
  line-height: 200.2%;
  color: ${colors.black_70};
`