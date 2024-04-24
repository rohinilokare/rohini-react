import logo from './logo.svg';
import './App.css';
import  DigitalTime  from './DigitalTime';
import Timer from './Timer';
import Resume from './Resume';
import Border from './Reactexample/Border';
import TicTocToe from './TicTocToe';

function App() {
  return (
    <div className="App">
      <div><p>Digital Time </p></div>
      <TicTocToe />
      {/* <DigitalTime /> */}
      {/* <Timer /> */}
      {/* <Border>
      <Resume />
      </Border> */}
    </div>
  );
}

export default App;
