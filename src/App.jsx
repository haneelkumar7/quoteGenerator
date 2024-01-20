import './App.css'
import FancyText from './components/FancyText';
import InspirationGenerator from './components/InspirationGenerator';
import Copyright from './components/Copyright';

function App() {
  return (
    <>
      {/* <FancyText title text="Get Inspired App" /> */}
      <InspirationGenerator>
        <Copyright year={1974} />
      </InspirationGenerator>
    </>
  );
}

export default App

