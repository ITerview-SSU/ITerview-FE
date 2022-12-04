import React from 'react'
import Accodian from '../../components/Accodian/accodian'
import AnimationBar from '../../components/AnimationBar'
import LoginNav from '../../components/TopNav/LoginNav'
import styled from 'styled-components';
import colors from '../../styles/colors';
import { useEffect, useState } from 'react';
import { requestRole } from '../../apis';
import axios from 'axios';
import { BaseUrl } from '../../privateKey';

function QuesitonPage() {

  const [roleId, setRoleId] = useState();
  const [iscount, setIsCount] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${BaseUrl}/api/questions?category=FE`)
        .then((res) => {
          console.log(res);
          setIsCount(res.data.questions.length);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        })
    } catch (err) {
      console.log(err);
    } 
  }, [])
  
  return (
    <>
      <LoginNav />
      <AnimationBar />
      <QuestionPageLayout>
        <TitleBox>
          <QuestionPageTitle>FE</QuestionPageTitle>

          <DescribeStyle>
            <div>질문을 선택해 질문에 대한 답을 준비해보세요.</div>
            <div>동영상 녹화를 통해 면접 영상을 확인할 수 있습니다. </div>
          </DescribeStyle>
          <CountLayout>
          <CountText>{iscount}</CountText>
          <CountDiv>개의 질문</CountDiv>
          </CountLayout>
        </TitleBox>
        <Accodian />
      </QuestionPageLayout>
    </>
  )
}

export default QuesitonPage

const QuestionPageTitle = styled.div`
  width: 80px;
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
const QuestionPageLayout = styled.div`
  display: flex;
  flex-direction: column;
`
const TitleBox = styled.div`
  width: 1204px;
  margin: 0 auto;
`
const CountDiv = styled.div`
  font-weight: 700;
  font-size: 19px;
  line-height: 200.2%;
  color: #666667;
  padding-left: 1px;

  display: flex;
  justify-items: flex-end;
  `
  
const CountText = styled.div`
  font-weight: 700;
  font-size: 19px;
  line-height: 200.2%;

  color: #303132;
`

const CountLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 20px;
`