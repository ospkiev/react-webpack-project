import React, {useState} from 'react';
import style from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div className={style.btn}>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Up</button>
            <button onClick={() => setCount(count - 1)}>Down</button>
        </div>
    );
};
