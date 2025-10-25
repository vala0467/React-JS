import { useReducer, useState } from "react";

var initialStore = {counterValue: 10};

function reducer(state, action) {
    switch (action) {
        case 'add':
            return {counterValue: state.counterValue + 1}
        case 'del':
            return {counterValue: state.counterValue - 1}
    }
}

export function DemoUseReducer() {

    const [state, dispatcher] = useReducer(reducer, initialStore); // 
                               

    var handleAdd = () => {
        dispatcher('add');

        // userdata.count++;
    }

    var handleDel = () => {
        dispatcher('del');
    }

    return (
        <>

            Count value - {state.counterValue}
            <br />
            <button className="btn btn-primary" onClick={handleAdd}>+</button>
            &nbsp;
            <button className="btn btn-secondary" onClick={handleDel}>-</button>
        </>
    )
}