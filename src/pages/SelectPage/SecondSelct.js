import React, {useState} from 'react'
import AnimationBar from '../../components/AnimationBar';
import { Smallbutton } from '../../components/commons/Button/styles';
import LoginNav from '../../components/TopNav/LoginNav/index';
import styled from 'styled-components';
import colors from '../../styles/colors';
import { useNavigate } from 'react-router-dom';
import NotLoginNavBar from '../../components/TopNav/NotLoginNav/index';

function SecondSelct() {

  const category = ["FE","BE","IOS","ANDROID","UIUX","PM"]
  const [roleBtn, setRoleBtn] = useState();

  const navigate = useNavigate();
  const RoleClickHandler = (role) => {
      navigate("/question");
  }

  // useEffect(() => {
  //   const 
  // })
  return (
    <>
      <NotLoginNavBar />
      <AnimationBar />
      <TitleRoldSelect>
        <div>원하는 직무를 선택해보세요. </div>
        <div>더 세분화된 직무별 질문을 확인할 수 있습니다. </div>
      </TitleRoldSelect>
      <RoleSmallButtonLayout>
        {/* { roleBtn.map((i, index) => {

        })} */}
        <Smallbutton onClick={RoleClickHandler}>ForntEnd</Smallbutton>
        <Smallbutton onClick={RoleClickHandler}>BackEnd</Smallbutton>
        <Smallbutton onClick={RoleClickHandler}>IOS<br/><strong>Developer</strong></Smallbutton>
        <Smallbutton onClick={RoleClickHandler}>Android Developer</Smallbutton>
        <Smallbutton onClick={RoleClickHandler}>UI/UX<br/><strong>Designer</strong></Smallbutton>
        <Smallbutton onClick={RoleClickHandler}>Product<br/><strong>Manager</strong></Smallbutton>
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