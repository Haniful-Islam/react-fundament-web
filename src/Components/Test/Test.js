import React, { useState } from 'react';

const Test = (props) => {
    // console.log(props);
    // const {count} = props;
    const [count , setCount] = useState(0);
     
    const plus = () =>{
        const oldCount = count;
        const newCount = oldCount + 1;
        setCount(newCount);
    }
    const minus = () =>{
        const oldCount = count;
        const newCount = oldCount;
        setCount(newCount);
    }
  
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plus} className='btn p-3 bg-info'>+</button>
            <button onClick={minus} className='btn p-3 ms-3 bg-info'>-</button>
        </div>
    );
};

export default Test;