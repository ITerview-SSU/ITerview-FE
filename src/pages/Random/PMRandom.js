import React, {useState, useEffect} from 'react'
import AnimationBar from '../../components/AnimationBar';
import NotLoginNavBar from '../../components/TopNav/NotLoginNav/index';
import styled from 'styled-components';
import colors from '../../styles/colors';
import QImg from "../../assets/Q..svg";
import RecordView from '../../components/Accodian/Recorder/Recorder';
import { useNavigate } from 'react-router-dom';
import { StartButtonLayout } from '../../components/commons/Button/styles';
import axios from 'axios';
import { BaseUrl } from '../../privateKey';

function PMRandom() {

    const navigate = useNavigate();
    const [isRandom, setIsRandom] = useState(true);
    const [isRandomQuestion, setIsRandomQuestion] = useState([]);
    const [isTitle, setIsTitle] = useState("");
    const [isNum, setIsNum] = useState(0);

    const RandomBackClickHandler = (role) => {
        navigate("/question/pm");
    }

    const RandomStartClickHandler = () => {
      setIsRandom(false);
      setIsNum(0);
      setIsTitle(isRandomQuestion[0].questionString);
  }

  useEffect(() => {
    try {
      axios.get(`${BaseUrl}/api/questions/random?category=7`)
      .then((res) => {
        setIsRandomQuestion(res.data.questions);
      })
      .catch((err) => {
        console.log(err);
      })
    } catch (err) {
      console.log(err);
    } 
  }, []);

  const NextRandomClick = () => {
    setIsNum(isNum + 1);

    for (let i = 1; i < isRandomQuestion.length; i++) {
      // setIsTitle(isRandomQuestion[i].questionString);
      // console.log(isTitle);
      if(isNum == i) {
      setIsTitle(isRandomQuestion[i].questionString);
      console.log(isTitle);
      console.log(isNum);
      console.log(i);
      }
    }
  }


  return (
    <>
        <NotLoginNavBar/>
        <AnimationBar/>
        <QuestionPageLayout>
        {isRandom ? 
           <TitleBox>
             <TitleFlex>
                <QuestionPageTitle>RANDOM TEST</QuestionPageTitle>
                <QuestionTitle>Produt Manager</QuestionTitle>
              </TitleFlex>
                <DescribeStyle>
                    <div>화면에 나오는 무작위 질문에 맞춰 대답해 보세요.</div>
                    <div>실제 면접을 대비할 수 있습니다.</div>
                </DescribeStyle>
                <StartButtonLayout onClick={RandomStartClickHandler}>시작하기</StartButtonLayout>
            </TitleBox>
            :
            <TitleBox2>
                <QuestionPageTitle2>RANDOM TEST</QuestionPageTitle2>
                <QuestionTitle2>Produt Manager</QuestionTitle2>
                <Header>
                    <QImgStyle src={QImg} />
                    <TitleStyle>{isTitle}</TitleStyle>
                </Header>
                <RecordView />
                <BtnLayout>
                <FinishBtn onClick={RandomBackClickHandler}>종료하기</FinishBtn>
                { isRandomQuestion.length-1 < isNum ?
                <NextBtn disabled={true} onClick={NextRandomClick}>다음 질문</NextBtn>
                :
                <NextBtn onClick={NextRandomClick}>다음 질문</NextBtn>
              }
                </BtnLayout>
            </TitleBox2>
          }
        </QuestionPageLayout>
        
    </>
  )
}

export default PMRandom

const QuestionPageLayout = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleBox2 = styled.div`
  width: 1204px;
  margin: 0 auto;
  text-align: center;
`

const QuestionPageTitle2 = styled.div`
  width: 148px;
  height: 23px;
  font-family: "Gotham";
  font-style: normal;
  font-weight: 700;
  font-size: 19.1342px;
  line-height: 23px;
  background: linear-gradient(135.86deg, #9E3DFF 0%, #3840FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  padding-top: 75px;
  margin: 0 auto;
`
const QuestionTitle2 = styled.div`
  margin: 0 auto;
  width: 317px;
  height: 48px;
  font-family: 'Gotham';
  font-style: normal;
  font-weight: 700;
  font-size: 39.2195px;
  line-height: 48px;

  color: #303132;

  margin-top: 12px;
  margin-bottom: 43.33px;
`

const TitleBox = styled.div`
  width: 1204px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 359px;
`

const QuestionPageTitle = styled.div`
  width: 221px;
  height: 35px;
  font-family: "Gotham";
  font-style: normal;
  font-weight: 700;
  font-size: 28.7013px;
  line-height: 35px;
  background: linear-gradient(135.86deg, #9E3DFF 0%, #3840FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  padding-top: 71px;
`
const QuestionTitle = styled.div`
  margin-top: 17px;
  width: 475px;
  height: 48px;
  font-family: "Gotham";
  font-style: normal;
  font-weight: 700;
  font-size: 58.8293px;
  line-height: 72px;

  color: #303132;
`

const DescribeStyle = styled.div`
  padding-top: 43px;
  padding-bottom: 71px;
  width: 408px;
  height: 76px;
  display: flex;
  flex-direction: column;

  font-weight: 700;
  font-size: 19px;
  line-height: 200.2%;
  color: ${colors.black_70};
  text-align: center;
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

const FinishBtn = styled.button`
  width: 135px;
  height: 50.55px;

  border: 1.5px solid #DB5752;
  filter: drop-shadow(0px 0px 12.9193px rgba(0, 0, 0, 0.1));
  border-radius: 49.0932px;

  font-weight: 700;
  font-size: 19px;
  line-height: 26px;
  letter-spacing: 0.05em;

  color: #DB5752;
  padding-left: 3px;
`
const NextBtn = styled.button`
  background: linear-gradient(135.86deg, #9E3DFF 0%, #3840FF 100%);
  box-shadow: 0px 0px 12.9193px rgba(0, 0, 0, 0.1);
  border-radius: 49.0932px;

  width: 141px;
  height: 50.55px;

  font-weight: 700;
  font-size: 19px;
  line-height: 26px;
  letter-spacing: 0.05em;

  color: #FFFFFF;

  :disabled {
    opacity: 60%;
  }
`
const BtnLayout = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 650px;
  margin-top: 30px;
  margin-bottom: 200px;
`
const TitleFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`