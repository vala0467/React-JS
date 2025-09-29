import { useState } from "react";

export function UseStateHooks() {
    console.log("component got rendered");
    const [countryName, setCountryName] = useState('India');
    
    var cname = 'China';

    function setTheValue() {
        console.log("setTheValue been called");
        cname = 'Japan';
        console.log("cname is " + cname);
    }

    function handleValueChange() {
        console.log("Frm handle value change");
        setCountryName("USA");
    }
   
    return (
        <>
            <b>
                First country -> {countryName}
            
            </b>
            <input type="button" value="set State value" onClick={handleValueChange}/>
            <br/>
            <b>
                Second country -> {cname}
            </b>
            <input type="button" value="Set cName" onClick={setTheValue}/>
        </>
    )
}