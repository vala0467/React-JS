import { useCallback, useState, useMemo } from "react"

function ChildComp({onClick}) {
    return (
        <>
            <button onClick={() => {onClick()}}>Child button</button>
        </>
    )
}

export function DemoUseMemoAndUseCallback() {
    const [count, setCount] = useState(10);
    const [a, setA] = useState(10);
    const [b, setB] = useState(5);
    const [accountId] = useState("123");

    const addValues = useMemo(() => {
            var result = 0;
            result = a ** 2 + b ** 2 + 2 * a * b;
            console.log(result)
        
    }, [a, b]);
    
    

    var handleChildClick = useCallback(() => {
        setCount(count + 1);
    }, [accountId, count]);
    return (
        <>
            <div> value is - {count}</div>
            <button onClick={addValues}>Click Happend</button>
            <ChildComp onClick={handleChildClick}></ChildComp>
        </>
    )
}