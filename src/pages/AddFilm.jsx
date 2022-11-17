import {React, useState} from 'react'
import ReactDOM from 'react-dom'



function AddFilm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

   
const changeFirstName=e=> {
    setFirstName(e.target.value);
}
const changeLastName=e=>{
    setLastName(e.target.value);
}

 function   handleSubmit() {
console.log("hello")


fetch('https://fake-films-top-trumps-1668596784853.azurewebsites.net/home/newActor', {
    method: 'POST', 
    headers:{'Content-Type': 'application/json'}, 
    mode: 'cors',
    body: JSON.stringify({firstName: firstName, lastName: lastName})
    
    });

 }

    return(
        <>
    <h1>This is the Add Actor page</h1>


<form onSubmit = {handleSubmit}>
    <label>First Name:
<input type='text' onChange={changeFirstName} id="firstName"/>
</label>
<label>Last Name:
     <input type='text' onChange={changeLastName} id="lastName"/> 
</label>
<input type="submit" value="Insert"/>

</form>
    </>
    )













    }
    export default AddFilm;