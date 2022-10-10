import LoginNav from './components/TopNav/LoginNav';
import NotLoginNavBar from './components/TopNav/NotLoginNav';
import GlobalStyles from './styles/GlobalStyles';
import { BigButton, BigbuttonLayout, StartButtonLayout, Smallbutton } from './components/commons/Button/styles';
import AnimationBar from './components/AnimationBar/index';
import { MediaDiv } from './styles/common';

function App() {
  return (
    <div>
      <GlobalStyles />
      <MediaDiv>
        <LoginNav />
        <AnimationBar />
        <BigbuttonLayout>
          <BigButton>공통별</BigButton>
          <BigButton>직종별</BigButton>
        </BigbuttonLayout>
        <Smallbutton>FE</Smallbutton>
        <StartButtonLayout>시작하기</StartButtonLayout>
      </MediaDiv>
    </div>
  );
}

export default App;
