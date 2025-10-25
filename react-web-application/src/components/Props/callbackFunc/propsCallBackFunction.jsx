import { useState } from "react";
import './app.css'

export function AnotherChildComp(prop) {
    function sample() {

    }
    return (
        <>
            Another comp
            <ChildComp callbackfun={sample}></ChildComp>
        </>
    )
}

export function ChildComp(props) {
    let [registrations, setRegristrations] = useState(0);

    function callbackfun() {

    }

    function passDataToParent() {
        props.callbackfun(registrations);
        callbackfun();
    }
    return (
        <div className="childComp">
            Current Registration Count - <b>{registrations} </b> &nbsp;
            <button onClick={() => {setRegristrations(registrations + 1)}}>+</button>
            <br />
            <hr />
            <button onClick={passDataToParent}>Pass Data</button>
        </div>
    )
}

export function CallbackFunctionParent() {
    const [countValue, setCountValue] = useState(0);
    function displayInfo(count) {
        console.log("From Parent display info " + count)
        setCountValue(count);
    }
    return (
        <div className="parentComp">
            The total no. of reg  users - {countValue} 
            <h3>Demonstrating Passing data from child to Parent through callback function</h3>
            <ChildComp callbackfun={displayInfo} type="new"></ChildComp>
        </div>
    )
}