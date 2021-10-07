import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Ajenda from './components/Ajenda';
import Login from './components/login';
import Schedule from './components/Schedule';
import Review from './components/Review';
import Cheer from './components/Cheer';
import Feedback from './components/Feedback';
import Calendar from './components/Calendar';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <Login />
        </Route>

        <Route path='/home'>
          <Header />
          <Ajenda />
        </Route>

        <Route path='/schedule'>
          <Header />
          <Schedule />
        </Route>

        <Route path='/review'>
          <Header />
          <Review />
        </Route>

        <Route path='/cheer'>
          <Header />
          <Cheer />
        </Route>

        <Route path='/feedback'>
          <Header />
          <Feedback />
        </Route>

        <Route path='/calendar'>
          <Header />
          <Calendar />
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>

    </BrowserRouter>
    </>
  );
}


export default App;







// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
