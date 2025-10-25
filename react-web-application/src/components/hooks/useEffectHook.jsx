import { useState, useEffect, useRef } from "react";

export function DemoUseEffect() {
    const [count, setCount] = useState(0);    
    // var intervalRef = useRef(null);
    var intervalRef = useRef(); // {current : undefined}
    useEffect(() => {   
        intervalRef.current = setInterval(() => {
            console.log("Interval called");
            setCount((preCount) => preCount + 1);

            // setCount(count + 1)
        }, 5000);
        console.log("component got mounted");

        return () => { // Will be called automaticaly when component gets unmounted
            console.log("component got unmounted");
            clearInterval(intervalRef.current);
        }
    }, [count]);
    return (
        <>  
            <div>Count - {count}</div>
            <b>From use effect demo comp</b>
            <button onClick={() => {setCount(count+1)}}>Increment</button>

            <div className="addsBlock">Adds block - {count}</div>
        </>
    );
}