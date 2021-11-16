import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { decrement, increment } from '../actions';

export default function FunctionalCounter() {
    const dispatch = useDispatch();
    const val = useSelector(state => state);
    return (
        <div>
            <h1>this is functional Component</h1>
            <p>count {val}</p>
            <button onClick={()=> dispatch(increment())}>INR</button>
            <button onClick={()=> dispatch(decrement())}>DRC</button>
        </div>
    )
}
