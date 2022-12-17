import React from "react";
import { useState } from "react";
import "./TabList.css";
import styled from 'styled-components';

function Tablist() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <TabListLayout>
            <TabDiv>
                <button style={{borderRadius: "6px 0px 0px 6px"}} className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                    전체
                </button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                    공통
                </button>
                <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                    FE
                </button>
                <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                    BE
                </button>
                <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>
                    IOS
                </button>
                <button className={toggleState === 6 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(6)}>
                    Android
                </button>
                <button className={toggleState === 7 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(7)}>
                    UI/UX
                </button>
                <button style={{borderRadius: "0px 6px 6px 0px"}} className={toggleState === 8 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(8)}>
                    PM
                </button>
            </TabDiv>

            <>
                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content  active-content" : "content"}>
                        
                    </div>

                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                        
                    </div>

                    <div className={toggleState === 3 ? "content  active-content" : "content"}>
                        
                    </div>

                    <div className={toggleState === 4 ? "content  active-content" : "content"}>
                        
                    </div>

                    <div className={toggleState === 5 ? "content  active-content" : "content"}>
                        
                    </div>

                    <div className={toggleState === 6 ? "content  active-content" : "content"}>
                        
                    </div>

                    <div className={toggleState === 7 ? "content  active-content" : "content"}>
                        
                    </div>

                    <div className={toggleState === 8 ? "content  active-content" : "content"}>
                        
                    </div>
                </div>
            </>
        </TabListLayout>
    );
}

export default Tablist;

const TabDiv = styled.div`
    display: flex;
    margin-top: 23px;
    padding-top: 9px;
    width: 816px;
    height: 41px;
`;

const TabListLayout = styled.div`
    margin: 0 auto;
    top: 0;
    margin-top: 50px;
    margin-bottom: 80px;
    z-index: 0;

    filter: drop-shadow(0px 0px 12.92px rgba(0, 0, 0, 0.1));
`;