import React from 'react'
import AnimationBar from '../components/AnimationBar';
import NotLoginNavBar from '../components/TopNav/NotLoginNav/index';
import styled from 'styled-components';
import colors from '../styles/colors';
import QImg from '../assets/Q..svg';
import RecordView from '../components/Accodian/Recorder/Recorder';
import { useNavigate } from 'react-router-dom';

function Random() {

    const navigate = useNavigate();
    const RandomBackClickHandler = (role) => {
        navigate("/question");
    }

  return (
    <>
        <NotLoginNavBar/>
        <AnimationBar/>
        <QuestionPageLayout>
            <TitleBox>
                <QuestionPageTitle>RANDOM TEST - FE</QuestionPageTitle>
                <DescribeStyle>
                    <div>화면에 나오는 무작위 질문에 맞춰 대답해 보세요.</div>
                    <div>실제 면접을 대비할 수 있습니다.</div>
                </DescribeStyle>
                <Header>
                    <QImgStyle src={QImg} />
                    <TitleStyle></TitleStyle>
                </Header>
                <RecordView />
                <button onClick={RandomBackClickHandler}>종료하기</button>
                <button>다음 질문</button>
            </TitleBox>
        </QuestionPageLayout>
        
    </>
  )
}

export default Random

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

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  width: 1204px;
  height: 85px;

  background: ${colors.white_100};
  box-shadow: 0px 0px 12.92px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  font-weight: 600;
  font-size: 26px;
  line-height: 35px;
`;

const QImgStyle = styled.img`
  width: 42px;
  height: 44px;

  padding-left: 41px;
  padding-right: 22px;
`

const TitleStyle = styled.div`
  height: 46px;
  padding-top: 16px;
`