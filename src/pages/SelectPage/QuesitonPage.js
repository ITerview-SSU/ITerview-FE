import React from 'react'
import Accodian from '../../components/Accodian/accodian'
import AnimationBar from '../../components/AnimationBar'
import LoginNav from '../../components/TopNav/LoginNav'
import styled from 'styled-components';
import colors from '../../styles/colors';

function QuesitonPage() {
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