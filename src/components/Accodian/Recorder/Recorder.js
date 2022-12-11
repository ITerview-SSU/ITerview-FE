import React, {useState, useEffect} from "react";
import { RecordWebcam, useRecordWebcam } from "react-record-webcam";
import './style.css';
import styled from "styled-components";
import Modal from "../../Modal/Modal";
import Q from "../../../assets/Q..svg";
// import { BaseUrl } from "../../../privateKey";

const OPTIONS = {
  fileName: "test-filename",
  mimeType: "video/webm",
  width: 1920,
  height: 1080,
  disableLogs: true,
  video: true,
  
}

export default function RecordView(props, questionId) {
  const recordWebcam = useRecordWebcam(OPTIONS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalQuestion, setModalQuestion] = useState([]);
  
  const getRecordingFile = async () => {
    const blob = recordWebcam.getRecording();
    console.log({ blob });
  };

  const getBlob = async (blob: Blob | null) => {
    console.log({ blob });
  };

  const onClickVideoModal = () => {
    setIsModalOpen(true);
  }

  const onClickCloseModal = () => {
    setIsModalOpen((prev) => !prev);
  }

  return (
    <div>
<div className="demo-section">
        <p style={{ textAlign: "center", marginTop: "30px", fontWeight: "700"}}>{recordWebcam.status}</p>
        <BtnLayout>
          <RecorderBtnStyle
            disabled={
              recordWebcam.status === "OPEN" ||
              recordWebcam.status === "RECORDING" ||
              recordWebcam.status === "PREVIEW"
            }
            onClick={recordWebcam.open}
          >
            Open camera
          </RecorderBtnStyle>
          <RecorderBtnStyle
            disabled={recordWebcam.status === "CLOSED"}
            onClick={recordWebcam.close}
          >
            Close camera
          </RecorderBtnStyle>
          <RecorderBtnStyle
            disabled={
              recordWebcam.status === "CLOSED" ||
              recordWebcam.status === "RECORDING" ||
              recordWebcam.status === "PREVIEW"
            }
            onClick={recordWebcam.start}
          >
            Start recording
          </RecorderBtnStyle>
          <RecorderBtnStyle
            disabled={recordWebcam.status !== "RECORDING"}
            onClick={recordWebcam.stop}
          >
            Stop recording
          </RecorderBtnStyle>
          <RecorderBtnStyle
            disabled={recordWebcam.status !== "PREVIEW"}
            onClick={recordWebcam.retake}
          >
            Retake
          </RecorderBtnStyle>
          <RecorderBtnStyle
            disabled={recordWebcam.status !== "PREVIEW"}
            onClick={recordWebcam.download}
          >
            Download
          </RecorderBtnStyle>
          {/* <RecorderBtnStyle
                  disabled={recordWebcam.status !== "PREVIEW"}
                  onClick={async () => {
                    const blob = await recordWebcam.getRecording();
                    getBlob(blob);
                  }}
                >
                  Get blob
          </RecorderBtnStyle> */}
          <RecorderBtnStyle2
            disabled={
              recordWebcam.status === "OPEN" ||
              recordWebcam.status === "RECORDING" ||
              recordWebcam.status === "ERROR" ||
              recordWebcam.status === "기다려주세요..."
            }
            onClick={onClickVideoModal}
          >
            내 답변 보기
          </RecorderBtnStyle2>
        {isModalOpen && <Modal key={questionId} closeModal={onClickCloseModal}>
          <TitleFlex>
          <img src={Q} style={{width:"42px", height:"44px"}}/>
          <TitleStyle>{props.title}</TitleStyle>
          </TitleFlex>
          </Modal>}
        </BtnLayout>
        <video
          ref={recordWebcam.webcamRef}
          style={{
            display: `${
              recordWebcam.status === "OPEN" ||
              recordWebcam.status === "RECORDING"
                ? "block"
                : "none"
            }`,
            width: "1204px",
            height: "600px"
          }}
          autoPlay
          muted
        />
        <video
          ref={recordWebcam.previewRef}
          video={true}
          audio={true}
          style={{
            display: `${recordWebcam.status === "OPEN" ||
                        recordWebcam.status === "CLOSED" ||
                        recordWebcam.status === "RECORDING" ||
                        recordWebcam.status === "ERROR" ? "none" : "block"}`,
            width: "1204px",
            height: "600px",
          }}
          autoPlay
          loop
        />
      </div>
    </div>
  );
}

const RecorderBtnStyle = styled.button`
  width: 100px;
  height: 40px;

  background: linear-gradient(135.86deg, #9E3DFF 0%, #3840FF 100%);
  box-shadow: 0px 0px 12.9193px rgba(0, 0, 0, 0.1);
  border-radius: 49.0932px;

  color: white;
  font-size: 14px;

  :disabled {
    opacity: 60%;
  }
`
const RecorderBtnStyle2 = styled.button`
  width: 100px;
  height: 40px;

  background: linear-gradient(135.86deg, gray 0%, black 100%);
  box-shadow: 0px 0px 12.9193px rgba(0, 0, 0, 0.1);
  border-radius: 49.0932px;

  color: white;
  font-size: 14px;

  :disabled {
    opacity: 60%;
  }
`
const BtnLayout = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  margin-top: 20px;
  margin-bottom: 20px;
`
const TitleStyle = styled.div`
  height: 46px;
  padding-top: 16px;
  margin-left: 22px;

  font-weight: 600;
  font-size: 26px;
  line-height: 35px;
`
const TitleFlex = styled.div`
  margin-left: 41px;
  margin-top: 21px;

  display: flex;
  flex-direction: row;
  align-items: center;
`


// import React from 'react'
// import {ReactMediaRecorder} from "react-media-recorder";
// import "../Recorder/style.css";
// import { useReactMediaRecorder } from "react-media-recorder";
// import { useEffect, useRef, useState } from "react";
// import { Button, IconButton, Stack, Tooltip } from "@mui/material";
// import StopIcon from '@mui/icons-material/Stop';
// import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

// const VideoPreview = ({ stream }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current && stream) {
//       videoRef.current.srcObject = stream;
//       // console.log(videoRef.current.srcObject);
//     }
//   }, [stream]);

//   if (!stream) {
//     return null;
//   }

//   return <video ref={videoRef} constraints={{
//     audio: true,
//     video: true
//   }} autoPlay controls />;
// };

// const RecordView = () => {
//   const {
//     status,
//     startRecording,
//     stopRecording,
//     mediaBlobUrl,
//     previewStream
//   } = useReactMediaRecorder({ video: true },  { type: 'video/webm'} );
//   const [isRecording, setIsRecording] = useState(false);
//   const handleStartRecording = () => {
//     setIsRecording(true);
//     startRecording();
//   };
//   const handleStopRecording = () => {
//     setIsRecording(false);
//     stopRecording();
//   };

//   // console.log(previewStream, mediaBlobUrl);

//   return (
//     <div className="main-container">
//       <Stack
//         spacing={2}
//         style={{ justifyContent: "center", alignItems: "center" }}
//       >
//         {isRecording ? (
//           <>
//             <div className="blink_me"> {status} </div>
//             <Tooltip title="Stop Recording">
//               <IconButton
//                 aria-label="delete"
//                 onClick={() => handleStopRecording()}
//               >
//                 <StopIcon />
//               </IconButton>
//             </Tooltip>
//             <VideoPreview stream={previewStream} constraints={{
//               audio: true,
//               video: true,
//             }}/>
//           </>
//         ) : (
//           <>
//             <Tooltip title="Click to Record">
//               <IconButton
//                 aria-label="delete"
//                 onClick={() => handleStartRecording()}
//               >
//                 <RadioButtonCheckedIcon />
//               </IconButton>
//             </Tooltip>
//             {/* <video className="video" src={mediaBlobUrl} controls autoPlay /> */}
//             <video className="video" src={mediaBlobUrl} constraints={{
//               audio: true,
//               video: {
//                 width: { exact: 1204, ideal: 1204 },
//                 height: { exact: 600, ideal: 600 },
//               }
//             }} autoPlay loop controls />
//           </>
//         )}
//       </Stack>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// };

// export default RecordView;

// function Recorder() {
//   return (
//       <>
//         <div>Recorder</div>
//         <ReactMediaRecorder 
//             video

//             render={({status, startRecording, stopRecording, mediaBlobUrl}) => (
//                 <div>
//                     <p>{status}</p>
//                     <button onClick={startRecording}>Start Recording</button>
//                     <button onClick={stopRecording}>Stop Recording</button>
//                     <video src={mediaBlobUrl} autoplay loop controls></video>
//                 </div>
//             )}
//         />
//       </>
//   )
// }

// export default Recorder