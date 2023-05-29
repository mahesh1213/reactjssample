import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Route,Routes,IndexRoute } from 'react-router-dom';
import Missing from './components/Missing';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
         <Route exact path="/" element={<Main />}>
           <Route exact  index element={<Home />}  />
           <Route path="home" element={<Home />} />
           <Route path="*" element={<Missing/>} />
         </Route>
        </Routes>
    </div>
  );
}

export default App;
