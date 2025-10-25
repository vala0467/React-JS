import React, { useState, useRef} from 'react';

export function TimeoutDemo() {
    const [cAccessState, setCAccessState] = useState("No Access");
    var userCategeory = "Contractor";
    var LevelFinalAccessRef = useRef(null);
    var LevelTwoAccess = () => {
        setCAccessState("Second Level of Access Granted ");
    }
    function handleAccess() {
        setTimeout(LevelOneAccess, 1000);
        setTimeout(LevelTwoAccess, 3000);
        setTimeout(LevelThreeAccess, 5000);
        LevelFinalAccessRef.current = setTimeout(LevelFinalAccess, 6000);
         
    }

    function LevelOneAccess() {
        setCAccessState("First Level of Access Granted ")
    }   

    function LevelThreeAccess() {
        if (userCategeory === "Admin") {
            setCAccessState("Third Level of Access Granted ");
        } else {
            setCAccessState("You are not allowed to access this level, Contact Admin");
            clearTimeout(LevelFinalAccessRef.current);
        }
    }

    function LevelFinalAccess() {
        setCAccessState("Your have complete acesss to the building now");
    }

    return (
        <>
            <div>
                Current State access is : <b>{cAccessState}</b>
            </div>
           <button onClick={handleAccess}>Give Building Access</button>
        </>
    )
}