import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import NavBarNew from './components/NewNav/NavBarNew';
import SecondScreen from './screens/SecondScreen';
import NailCourse from './components/Nailcourse/NailCourse';
import Bikorot from './components/recommends/Recommends';
import FAQItem from './components/questions/Questions';
import ThirdScreen from './screens/ThirdScreen';
import ByMe from './components/ByMe/ByMe';
import ForthScreen from './screens/ForthScreen';
import WhoAmI from './components/me/Me';
import Special from './components/recommends/Special';
import NailHishtalmut from './components/NailHishtalmut/NailHishtalmut';

function App() {
  return <>
  <div class="app">
  <NavBarNew/>
  <FirstScreen/>
  <SecondScreen/>
  <ForthScreen/>
  <NailCourse/>
  <NailHishtalmut/>
  <WhoAmI/>
  <Bikorot/>
  <Special/>
<ThirdScreen/>

<ByMe/>
</div>
  </>
}

export default App;
