// import AccordionWrapper from "./accodianwrapper";
// import AccordionItem from './accodianitem';
// import '../Accodian/accordian.css';


// function Accodaian() {

//   const data = [
//     {
//       "title": "질문이 무엇이 있을까요~?",
//     },
//     {
//       "title": "질문이 무엇이 있을까요~?",
//     },
//     {
//       "title": "질문이 무엇이 있을까요~?",
//     },
//     {
//       "title": "질문이 무엇이 있을까요~?",
//     }
//   ];

//   return (
//     <div className="App">
//       <div className="content">
//         <div className="app-description">
//         </div>
//           <AccordionWrapper>
//             {data.map((item, index) => (
//               <AccordionItem key={index} index={index} title={item.title}/>
//             ))}
//           </AccordionWrapper>
//       </div>
//     </div>
//   );
// }

// export default Accodaian;

import React, { useCallback } from "react";
import styled from "styled-components";
import { useRef } from 'react';
import { useState } from 'react';
import RecordView from "./Recorder/Recorder";
import colors from '../../styles/colors';
import QImg from '../../assets/Q..svg';
import ArrowImg from '../../assets/ic_round-expand-more.svg';

function Accodianitem(props) {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "white";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = "lightgray";
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  // const buttonText = parentRefHeight === "0px" ? {KeyboardArrowUpIcon} : {KeyboardArrowDownIcon};

  return (
    <Container>
      <Header onClick={handleButtonClick}>
        <QImgStyle src={QImg} />
        <TitleStyle>{props.title}</TitleStyle>
        <ArrowImgStyle src={ArrowImg} />
      </Header>
      <ContentsWrapper ref={parentRef}>
        <Contents ref={childRef} >
          <RecordView />
        </Contents>
      </ContentsWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

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

const ContentsWrapper = styled.div`
  height: 0;
  width: inherit;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
  border-radius: 20px;
`;

const Contents = styled.div`
  padding: 0.1px;
`;

const QImgStyle = styled.img`
  width: 42px;
  height: 44px;

  padding-left: 41px;
  padding-right: 22px;
`
const ArrowImgStyle = styled.img`
  width: 46px;
  height: 46px;
  position: absolute;
  left: 1130px;
`
const TitleStyle = styled.div`
  height: 46px;
  padding-top: 16px;
`

export default React.memo(Accodianitem);