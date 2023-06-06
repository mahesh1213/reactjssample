import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Route,Routes } from 'react-router-dom';
import Missing from './components/Missing';
import Home from './components/Home';
import Classwithstate from './components/classcomponents/Classwithstate';
import LifeCycleclass from './components/classcomponents/LifeCycleclass';
import ReactContextApi from './components/classcomponentcontextapi/ReactContextApi';
import Errorboundaries from './components/errorboundingclass/Errorboundaries';
import Hocclass from './components/classhoc/Hocclass';
import RefUsingClass from './components/classref/RefUsingClass';
import PassingFarwordRefClass from './components/classforwardrefs/PassingFarwordRefClass';
import StateandEffecthook from './components/Hooks/StateandEffecthook';
import Apitcalling from './components/Hooks/Apitcalling';
import RoutingInReact from './components/routing/RoutingInReact';
import ReduxMain from './components/redux/ReduxMain';
import ReduxSample from './components/redux/ReduxSample';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
         <Route exact path="/" element={<Main />}>
           <Route exact  index element={<Home />}  />
           <Route path="home" element={<Home />} />
           <Route path="classstatecomponent" element={<Classwithstate />} />
           <Route path="lifecycles" element={<LifeCycleclass />} />
           <Route path="contextapi" element={<ReactContextApi />} />
           <Route path="errorboundaries" element={<Errorboundaries />} />
           <Route path="hoc" element={<Hocclass />} />
           <Route path="resclass" element={<RefUsingClass />} />
           <Route path="forwardref" element={<PassingFarwordRefClass />} />
           <Route path="stateandeffect" element={<StateandEffecthook />} />
           <Route path="apitcalling" element={<Apitcalling />} />
           <Route path="routingreact" element={<RoutingInReact />} />
           <Route path="reactredux" element={<ReduxMain />} />
           <Route path="reduxsample" element={<ReduxSample />} />
           <Route path="*" element={<Missing/>} />
         </Route>
        </Routes>
    </div>
  );
}

export default App;
