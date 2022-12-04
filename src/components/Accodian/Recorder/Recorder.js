import React from 'react'
import {ReactMediaRecorder} from "react-media-recorder";
import "../Recorder/style.css";
import { useReactMediaRecorder } from "react-media-recorder";
import { useEffect, useRef, useState } from "react";
import { Button, IconButton, Stack, Tooltip } from "@mui/material";
import StopIcon from '@mui/icons-material/Stop';
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
      // console.log(videoRef.current.srcObject);
    }
  }, [stream]);

  if (!stream) {
    return null;
  }

  return <video ref={videoRef} constraints={{
    audio: true,
    video: true
  }} autoPlay controls />;
};

const RecordView = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    previewStream
  } = useReactMediaRecorder({ video: true },  { type: 'video/webm'} );
  const [isRecording, setIsRecording] = useState(false);
  const handleStartRecording = () => {
    setIsRecording(true);
    startRecording();
  };
  const handleStopRecording = () => {
    setIsRecording(false);
    stopRecording();
  };

  // console.log(previewStream, mediaBlobUrl);

  return (
    <div className="main-container">
      <Stack
        spacing={2}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {isRecording ? (
          <>
            <div className="blink_me"> {status} </div>
            <Tooltip title="Stop Recording">
              <IconButton
                aria-label="delete"
                onClick={() => handleStopRecording()}
              >
                <StopIcon />
              </IconButton>
            </Tooltip>
            <VideoPreview stream={previewStream} constraints={{
              audio: true,
              video: true,
            }}/>
          </>
        ) : (
          <>
            <Tooltip title="Click to Record">
              <IconButton
                aria-label="delete"
                onClick={() => handleStartRecording()}
              >
                <RadioButtonCheckedIcon />
              </IconButton>
            </Tooltip>
            {/* <video className="video" src={mediaBlobUrl} controls autoPlay /> */}
            <video className="video" src={mediaBlobUrl} constraints={{
              audio: true,
              video: {
                width: { exact: 1204, ideal: 1204 },
                height: { exact: 600, ideal: 600 },
              }
            }} autoPlay loop controls />
          </>
        )}
      </Stack>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default RecordView;

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