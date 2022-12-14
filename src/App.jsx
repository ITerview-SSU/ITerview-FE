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
import QuesitonPage from './pages/SelectPage/QuestionPage/QuesitonPage';
import FEQuesiton from './pages/SelectPage/QuestionPage/FEQuestion';
import BEQuesiton from './pages/SelectPage/QuestionPage/BEQuestion';
import IOSQuesiton from './pages/SelectPage/QuestionPage/IOSQuestion';
import AndroidQuesiton from './pages/SelectPage/QuestionPage/AndroidQuestion';
import UIUXQuesiton from './pages/SelectPage/QuestionPage/UIUXQuestion';
import PMQuesiton from './pages/SelectPage/QuestionPage/PMQuestion';
import SearchPage from './pages/Search/SearchPage';
import BERandom from './pages/Random/BERandom';
import FERandom from './pages/Random/FERandom';
import AndroidRandom from './pages/Random/AndroidRandom';
import IosRandom from './pages/Random/IOSRandom';
import UIUXRandom from './pages/Random/UIUXRandom';
import PMRandom from './pages/Random/PMRandom';
import Random from './pages/Random/Random';


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
          <Route exact={true} path="/random/fe" element={<FERandom />}></Route>
          <Route exact={true} path="/random/be" element={<BERandom />}></Route>
          <Route exact={true} path="/random/android" element={<AndroidRandom />}></Route>
          <Route exact={true} path="/random/ios" element={<IosRandom />}></Route>
          <Route exact={true} path="/random/uiux" element={<UIUXRandom />}></Route>
          <Route exact={true} path="/random/pm" element={<PMRandom />}></Route>
          <Route exact={true} path="/search" element={<SearchPage />}></Route>
        </Routes>
        <Footer />
      </MediaDiv>
    </div>
  );
}

export default App;
