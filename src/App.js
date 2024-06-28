import { useState } from 'react';
import './App.css';
import Child1Counter from './Components/SibToSibCommunication/Child1Counter';
import Child2Operations from './Components/SibToSibCommunication/Child2Operations';
import Forms from './Components/Forms/Forms';

function App() {

  const [info, setInfo] = useState();

  const Child1ToParentComs = (infofFromChild1) =>{
    console.log("info received from child1", infofFromChild1);
    setInfo(infofFromChild1);
  }
  return (
    <div className="App">
      {/* <Child1Counter Child1ToParentComs={Child1ToParentComs} /> */}
      {/* <Child2Operations info={info} /> */}
      <Forms />
    </div>
  );
}

export default App;
