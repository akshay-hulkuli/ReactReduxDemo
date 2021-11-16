import logo from './logo.svg';
import './App.css';
import ClassCounter from './Component/ClassCounter';
import FunctionalCounter from './Component/FunctionalCounter';
import ContextUser from './Component/ContextUser';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <FunctionalCounter/>
      <ContextUser/>
    </div>
  );
}

export default App;
