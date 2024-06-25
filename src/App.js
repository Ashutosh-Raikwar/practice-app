import Counter from './Components/Counter';
import './App.css';
import WrapperComponent from './Components/WrapperComponent/WrapperComponent';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <UserList /> */}
      <WrapperComponent>
        this is rapper
      </WrapperComponent>
    </div>
  );
}

export default App;
