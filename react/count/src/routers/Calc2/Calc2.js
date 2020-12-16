import React, { useState } from 'react';

const Calc2 = () => {
    //action 
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(count + 1);
    }
    const onDecrease = () => {
        setCount(count - 1);
    }

    // reducer
    return(
        <div>
            <h1>count: {count}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Calc2;