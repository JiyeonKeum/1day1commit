import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CalcAction } from '../../actions';
import './Calc.css';

const Calc = () => {
    const { count, input } = useSelector(({ CalcReducer }) => CalcReducer);
    const [_input, setInput] = useState('');

    const dispatch = useDispatch();

    const increase = () => {
        dispatch(CalcAction.onIncrease());
    }

    const decrease = () => {
        dispatch(CalcAction.onDecrease());
    }

    const onChange = (e) => {
        setInput(e.target.value);
    }

    const custom = () => {
        dispatch(CalcAction.onCustom(Number(_input)));
        console.log(input);
    }

    return (
        <div>
            <div className="calcInner">
                <div className="count">count : {count}</div>
                <input
                    name="input"
                    value={_input}
                    onChange={onChange}
                    className="input"
                />
                <div className="btnContainer">
                    <button className="btn" onClick={custom}>input</button>
                    <button className="increase" onClick={increase}>+</button>
                    <button className="decrease" onClick={decrease}>-</button>
                </div>
                
            </div>
        </div>
    );
}

export default Calc;