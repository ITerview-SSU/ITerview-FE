import React, {useState, useEffect} from 'react'
import AnimationBar from '../../components/AnimationBar';
import { Smallbutton } from '../../components/commons/Button/styles';
import LoginNav from '../../components/TopNav/LoginNav/index';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import NotLoginNavBar from '../../components/TopNav/NotLoginNav/index';
import { BaseUrl } from '../../privateKey';
import axios from 'axios';

function SecondSelct() {

  const category = [
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ]

  const [roleBtn, setRoleBtn] = useState([]);
  const [roleId, setRoleId] = useState();

  const navigate = useNavigate();
  const feClickHandler = (role) => {
      navigate("/question/fe");
  }

  const beClickHandler = (role) => {
    navigate("/question/be");
  }
const iosClickHandler = (role) => {
  navigate("/question/ios");
  }
const androidClickHandler = (role) => {
  navigate("/question/android");
  }
const uiuxClickHandler = (role) => {
  navigate("/question/uiux");
  }
const pmClickHandler = (role) => {
  navigate("/question/pm");
  }

  // useEffect(() => {
  //   try {
  //     axios.get(`${BaseUrl}/api/questions?category=${category}`)
  //     .then((res) => {
  //       console.log(res);
  //       return res.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },[])

  return (
    <>
      <NotLoginNavBar />
      <AnimationBar />
      <TitleRoldSelect>
        <div>원하는 직무를 선택해보세요. </div>
        <div>더 세분화된 직무별 질문을 확인할 수 있습니다. </div>
      </TitleRoldSelect>
      <RoleSmallButtonLayout>
        {/* { roleBtn && roleBtn.questions?.map((questions, categoryIds) => {
          <Smallbutton key={categoryIds} title={questions.categories}>{questions.categories}</Smallbutton>
        })} */}
        <Smallbutton onClick={feClickHandler} style={{paddingTop:"20px"}}>Front-End</Smallbutton>
        <Smallbutton onClick={beClickHandler} style={{paddingTop:"20px"}}>Back-End</Smallbutton>
        <Smallbutton onClick={iosClickHandler} style={{paddingTop:"30px"}}>IOS</Smallbutton>
        <Smallbutton onClick={androidClickHandler} style={{paddingTop:"20px"}}>Android</Smallbutton>
        <Smallbutton onClick={uiuxClickHandler} style={{paddingTop:"20px"}}>UI/UX<br/><strong>Designer</strong></Smallbutton>
        <Smallbutton onClick={pmClickHandler} style={{paddingTop:"20px"}}>Product<br/><strong>Manager</strong></Smallbutton>
      </RoleSmallButtonLayout>
    </>
  )
}

export default SecondSelct

const TitleRoldSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 700;
  font-size: 19px;
  line-height: 200.2%;
  color: ${colors.black_70};

  padding-top: 90px;
  padding-bottom: 89px;
`
const RoleSmallButtonLayout = styled.div`
  margin: 0 auto;
  display: grid;
  column-gap: 95px;
  row-gap: 49px;
  grid-template-columns: repeat(3, 0.1fr);
  padding-bottom: 79px;
`