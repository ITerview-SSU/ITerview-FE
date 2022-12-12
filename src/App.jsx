import GlobalStyles from './styles/GlobalStyles';
import { MediaDiv } from './styles/common';
import Footer from './components/commons/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home/Homepage';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Login/SignupPage';
import FirstSelect from './pages/SelectPage/FirstSelect';
import SecondSelct from './pages/SelectPage/SecondSelct';
import Mypage from './pages/Mypage/Mypage';
import RecordView from './components/Accodian/Recorder/Recorder';
import LoginNav from './components/TopNav/LoginNav/index';
import Accodian from './components/Accodian/accodians/accodian';
import Random from './pages/Random';
import QuesitonPage from './pages/SelectPage/QuestionPage/QuesitonPage';
import FEQuesiton from './pages/SelectPage/QuestionPage/FEQuestion';
import BEQuesiton from './pages/SelectPage/QuestionPage/BEQuestion';
import IOSQuesiton from './pages/SelectPage/QuestionPage/IOSQuestion';
import AndroidQuesiton from './pages/SelectPage/QuestionPage/AndroidQuestion';
import UIUXQuesiton from './pages/SelectPage/QuestionPage/UIUXQuestion';
import PMQuesiton from './pages/SelectPage/QuestionPage/PMQuestion';
import SearchPage from './pages/Search/SearchPage';


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
          <Route exact={true} path="/question/common" element={<QuesitonPage />}></Route>
          <Route exact={true} path="/question/fe" element={<FEQuesiton />}></Route>
          <Route exact={true} path="/question/be" element={<BEQuesiton />}></Route>
          <Route exact={true} path="/question/ios" element={<IOSQuesiton />}></Route>
          <Route exact={true} path="/question/android" element={<AndroidQuesiton />}></Route>
          <Route exact={true} path="/question/uiux" element={<UIUXQuesiton />}></Route>
          <Route exact={true} path="/question/pm" element={<PMQuesiton />}></Route>
          <Route exact={true} path="/mypage" element={<Mypage />}></Route>
          <Route exact={true} path="/random" element={<Random />}></Route>
          <Route exact={true} path="/search" element={<SearchPage />}></Route>
        </Routes>
        <Footer />
      </MediaDiv>
    </div>
  );
}

export default App;
