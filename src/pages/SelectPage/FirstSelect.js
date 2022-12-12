import React from 'react'
import { BigButton } from '../../components/commons/Button/styles';
import LoginNav from '../../components/TopNav/LoginNav/index';
import styled from 'styled-components';
import colors from '../../styles/colors';
import AnimationBar from '../../components/AnimationBar';
import { useNavigate } from 'react-router-dom';
import NotLoginNavBar from '../../components/TopNav/NotLoginNav/index';

function FirstSelect() {

  const navigate = useNavigate();
  const CommonSelectClickHandler = () => {
    navigate("/question/common");
  }
  const RoleSelectClickHandler = () => {
    navigate("/select/role");
  }

  return (
    <>
      <NotLoginNavBar />
      <AnimationBar />
      <DiscribeFirstSelect>
        <div>공통별 질문은 직무에 관계없이 보편적으로 제시되는 질문을,</div>
        <div>직무별 질문은 직무에 따라 세분화된 면접 질문을 확인할 수 있습니다.</div>
      </DiscribeFirstSelect>
      <SelectBigButtonLayout>
        <BigButton onClick={CommonSelectClickHandler}>공통별</BigButton>
        <BigButton onClick={RoleSelectClickHandler}>직무별</BigButton>
      </SelectBigButtonLayout>
    </>
  )
}

export default FirstSelect

const DiscribeFirstSelect = styled.div`
  width: 540px;
  height: 76px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${colors.black_70};
  font-weight: 700;
  font-size: 19px;
  line-height: 200.2%;

  padding-top: 115px;
`
const SelectBigButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 79px;
  margin: 0 auto;

  padding-top: 101px;
  padding-bottom: 236px;
`