import React, { useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = (e) => {
        setCount(prevCount => prevCount + 1);
        e.preventDefault();
    };
    const handleDecrement = (e) => {
        e.preventDefault();
        if(count <= 1) {
            return count === 1;
        } else {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className="row text-center">
            <div className="col-sm-12 py-3 counter">
                <span>
                <button onClick={handleDecrement} className="minusBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <input className="countNum"
                value={count}/>
                <button onClick={handleIncrement} className="addBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                </span>
            </div>
        </div>
    );
};

export default Counter;