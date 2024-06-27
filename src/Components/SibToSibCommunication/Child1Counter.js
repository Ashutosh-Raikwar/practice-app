import React, { useState } from 'react';

function Child1Counter(props) {
    const [count, setCount] = useState(0);
    
  return (
    <div>
        <h1>Counter</h1>
        <div>{count}</div>
        
        <button type='button' onClick={()=> { 
            setCount((prevVal)=>prevVal+1);
            props.Child1ToParentComs("INCREMENT");
        }}>➕</button>
        
        <button type='button' onClick={()=> { 
            setCount((prevVal)=>prevVal-1);
            props.Child1ToParentComs("DECREMENT");
        }}>➖</button>
            
    </div>
  )
}

export default Child1Counter