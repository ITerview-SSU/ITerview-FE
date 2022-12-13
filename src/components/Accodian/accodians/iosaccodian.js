import React from "react";
import Accodianitem from "../accodianitem";
import styled from 'styled-components';
import { useState, useEffect } from "react";
import axios from "axios";
import { BaseUrl } from '../../../privateKey';

export default function IOSAccodian() {

    const category = ["FE","BE","IOS","ANDROID","UIUX","PM"];

    const [isQuestion, setIsQuestion] = useState([]);

    useEffect(() => {
        try {
            axios.get(`${BaseUrl}/api/questions?category=4`)
                .then((res) => {
                    setIsQuestion(res.data);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

  return (
    <div className="App">
        <AccodianBottom>
            <AccodianLayout>
                {isQuestion && 
                isQuestion.questions?.map((questions) => (
                <Accodianitem questionkey={questions.questionId} title={questions.questionString}/>
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