import React from 'react'
import AnimationBar from '../../components/AnimationBar'
import NotLoginNavBar from '../../components/TopNav/NotLoginNav'
import styled from 'styled-components';
import colors from '../../styles/colors';

function Mypage() {
  return (
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