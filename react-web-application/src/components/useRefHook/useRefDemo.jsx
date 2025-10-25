import React, {use, useEffect, useRef, useState} from 'react';

export function DemoUseRefHook() {
    const inputRef = useRef(null);
    const countPrevRef = useRef(0);
    const [count, setCount] = useState(10);
    const renderTrack = useRef(0);

    useEffect(() => {
        renderTrack.current += 1;
        console.log("Frm useEffect");
        countPrevRef.current = count;
    }, [count]);


    
    const handleBtnClick = () => {
        console.log("Frm handleBtnClick");
        inputRef.current.focus();
        inputRef.current.value = 'Hello User';
    }

    return (
        <>
            <b>The total no of times component got mounted is - {renderTrack.current}</b> <br/>
            <input ref={inputRef} type='text' placeholder='Enter something' />
            <button onClick={handleBtnClick}>Get Focus</button>
            <hr />

            <div>
                IS both equal {count === countPrevRef.current ? 'Yes Equal' : 'No Not Equal'}
            </div>

            Previous Count Value -> {countPrevRef.current} <br/>
            Count Value -> {count} <br/>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
        </>
    );
}
