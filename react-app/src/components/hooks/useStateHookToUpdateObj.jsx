import { useState } from "react"
import './sateHook.css';

export function UseStateHookToUpdateObject() {
    var a = 900;
    const [count, setCount] = useState(200);
    const [userDetails, setUserDetails] = useState({});

    // function handleNameChange(event){
    //     setUserDetails({
    //         ...userDetails,
    //         name: event.target.value
    //     });        
    // }

    // function handleAgeChange(event){
    //     setUserDetails({
    //         ...userDetails,
    //         age: event.target.value
    //     });        
    // }

    function handleChangeValue(event, type) {
       var obj = {...userDetails};
       obj[type] = event.target.value;
       setUserDetails(obj);
    }
    
    function sendDateToServer() {
        console.log("send data to server");
        console.log(userDetails);
    }

    return (
        <>  
                <b>value of a is {a}</b>
                <b>value of count is {count}</b>
            <ul className="userRegistrationBlock">
                <li>                
                    <input type="text" placeholder="User Name" value={userDetails.name} onChange={(event) => {
                        handleChangeValue(event, 'name')
                    }}/>
                </li>
                <li>
                    <input type="number" placeholder="Age" value={userDetails.age} onChange={(event) => {
                        handleChangeValue(event, 'age')
                    }}/>
                </li>
                <li>
                    <input type="text" placeholder="Gender" value={userDetails.gender} onChange={(event) => {
                        handleChangeValue(event, 'gender')
                    }}/>
                </li>
                <li>
                    <input type="text" placeholder="Location" value={userDetails.location} onChange={(event) => {
                        handleChangeValue(event, 'location')
                    }}/>
                </li>
                <li>
                    <input type="button" className="btn btn-primary" value="Save Details" onClick={sendDateToServer}/>
                </li>
            </ul>
            <hr></hr>
            <ul>
                <li>
                    User Name is : <b>{userDetails.name}</b>
                </li>
                <li>
                    User AGe is : <b>{userDetails.age}</b>
                </li>
                <li>
                    Gender is : <b>{userDetails.gender}</b>
                </li>
                <li>
                    Location: <b>{userDetails.location}</b>
                </li>
            </ul>
            <hr />
            
        </>
    )
}