import React from "react";
import Accodianitem from "./accodianitem";
import styled from 'styled-components';


const data = [
    {
        title: "질문이 무엇이 있을까요~?",
    },
    {
        title: "질문이 무엇이 있을까요~?",
    },
    {
        title: "질문이 무엇이 있을까요~?",
    },
    {
        title: "질문이 무엇이 있을까요~?",
    },
]

export default function Accodian() {
  return (
    <div className="App">
        <AccodianBottom>
            <AccodianLayout>
                {data.map((item, index) => (
                <Accodianitem key={index} index={index} title={item.title}/>
                ))}
            </AccodianLayout>
        </AccodianBottom>
    </div>
  );
}

const AccodianLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
`
const AccodianBottom = styled.div`
    padding-bottom: 92px;
`