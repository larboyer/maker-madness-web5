import logo from './logo.svg';
import achieve_logo from './img/achieve_logo_02.png';
import mm_bulb from './img/mm_bulb_00.png';
import maker_madness from './img/maker_madness_00.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={achieve_logo} className="achieve-logo" alt="logo" />
        <img src={mm_bulb} className="achieve-logo" alt="logo" />
        <img src={maker_madness} className="achieve-logo" alt="logo" />
        <p>
          MakerMadnessWeb5
        </p>
        <p>
          What Will You Make Today?
        </p>
		{/* Hey there 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
		*/}
      </header>
    </div>
  );
}

export default App;
