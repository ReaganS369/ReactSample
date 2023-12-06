/** @format */

import logo from './logo.svg';
import './App.css';
// import LogoName from './LogoName';
import Header from './Header';
import LogoList from './LogoList';

function clicking() {
  console.log('Helow this my assignmnet');
}

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LogoList />
        <button className="button" onClick={clicking}>
          Click
        </button>
      </header>
    </div>
  );
}

export default App;
