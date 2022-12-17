import React, {useEffect, useState} from 'react'
import NotLoginNavBar from '../../components/TopNav/NotLoginNav/index';
import AnimationBar from '../../components/AnimationBar/index';
import { useLocation } from 'react-router-dom';
import Accodianitem from '../../components/Accodian/accodianitem';
import Tablist from '../../components/Tab/TabList';
import styled from 'styled-components';
import X from "../../assets/xBtn.svg";

const SearchPage = () => {

  const location = useLocation();
  const search = location.state.content;
  const result = location.state.searchResult;
  // const [count, setCount] = useState(result);
    

  console.log(result);
  return (
    <>
        <NotLoginNavBar />
        <AnimationBar />

        <>
        <SearchTitle>"{search}" 검색결과</SearchTitle>
        <Tablist/>
        { 
        result.questions?.length === 0 ?
        <>
        <img src={X} style={{width: "28px", height: "28px", margin: "0 auto", textAlign:"center", marginTop:"18px", marginBottom:"28px"}}/>
        <div style={{display: "flex", flexDirection:"row", fontWeight:"600", fontSize:"26px", lineHeight:"35px", margin: "0 auto", textAlign:"center", marginBottom:"28px"}}>
        <div style={{color: "#DB5752"}}>"{search}"</div>
        <div>에 대한 질문이 없어요!</div>
        </div>
        <div style={{margin: "0 auto", textAlign:"center", color:"#ACADAD", fontWeight:"600", fontSize:"21px", lineHeight:"180.2%"}}>단어의 철자가 정확한지 확인해보시고</div>
        <div style={{margin: "0 auto", textAlign:"center", color:"#ACADAD", fontWeight:"600", fontSize:"21px", lineHeight:"180.2%", marginBottom:"700px"}}>다른 검색어를 입력해 보세요</div>
        </>
        :
        <>
        <div style={{margin:"0 auto", marginBottom: "362px"}}>
        <CountLayout>
          <CountText>{result.questions.length}</CountText>
          <CountDiv>개의 질문</CountDiv>
        </CountLayout>
        {result.questions?.map((questions) => (
          <>
          <Accodianitem questionkey={questions.questionId} title={questions.questionString}/>
          <div style={{marginBottom:"26px"}}></div>
          </>
        ))}
        </div>
        </> 
        }
        </>
    </>
  )
}

export default SearchPage

const SearchTitle = styled.div`
  margin: 0 auto;
  margin-top: 94px;
  width: auto;
  height: 62px;

  font-weight: 700;
  font-size: 45.5282px;
  line-height: 62px;
  text-align: center;
  padding-top: 20px;

  color: #303132;
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