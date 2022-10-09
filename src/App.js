
import './App.css';
import ArrayPresentation from './component/ArrayPresentation';
import DynamicObject from './component/DynamicObject';
import ObjectPresentation from './component/ObjectPresentation';
import Practice from './component/VariablePresentation';

function App() {
  return (
    <div className="App">
      <DynamicObject/>
       <Practice/> 
      <ArrayPresentation/>
      <ObjectPresentation/>
    </div>
  );
}

export default App;
