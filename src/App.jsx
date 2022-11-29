import GlobalStyles from './styles/GlobalStyles';
import { MediaDiv } from './styles/common';
import Footer from './components/commons/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home/Homepage';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Login/SignupPage';
import FirstSelect from './pages/SelectPage/FirstSelect';
import SecondSelct from './pages/SelectPage/SecondSelct';
import QuesitonPage from './pages/SelectPage/QuesitonPage';
import Mypage from './pages/Mypage/Mypage';
import RecordView from './components/Accodian/Recorder/Recorder';
import LoginNav from './components/TopNav/LoginNav/index';
import Accodian from './components/Accodian/accodian';


function App() {
  return (
    <div>
      <GlobalStyles />
      <MediaDiv>
        <Routes>
          <Route exact={true} path="/" element={<Homepage />}></Route>
          <Route exact={true} path="/login" element={<LoginPage />}></Route>
          <Route exact={true} path="/signup" element={<SignupPage />}></Route>
          <Route exact={true} path="/select" element={<FirstSelect />}></Route>
          <Route exact={true} path="/select/role" element={<SecondSelct />}></Route>
          <Route exact={true} path="/question" element={<QuesitonPage />}></Route>
          <Route exact={true} path="/mypage" element={<Mypage />}></Route>
        </Routes>
        {/* <LoginNav />
        <AnimationBar />
        <BigbuttonLayout>
          <BigButton>공통별</BigButton>
          <BigButton>직종별</BigButton>
        </BigbuttonLayout>
        <Smallbutton>FE</Smallbutton>
        <StartButtonLayout>시작하기</StartButtonLayout>
        <SignupButton />
        <LoginButton /> */}
        <Footer />
      </MediaDiv>
    </div>
  );
}

export default App;
