import './App.css';
import CartClass from './components/CartClass';
import CartFunction from './components/CartFunction';
import Counter from './components/Counter';
import ListView from './components/ListView';
import Weather from './components/Weather';
import DropDown from './components/DropDown';
import SelectDropdown from './components/SelectDropdown';

function App() {
  return (
    <div className="App">
      {/* <CartFunction />
      <CartClass />
      <Counter />
      <Weather />
      <ListView /> 
      <DropDown />*/}
      <SelectDropdown />
    </div>
  );
}


export default App;
