import {React, useState} from 'react'
import ReactDOM from 'react-dom'


function Site(){
return(
<>
<AddFilm/>
    <tr/>

<UpdateActor/>
</>
)
}


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



fetch('https://fake-films-top-trumps-1668596784853.azurewebsites.net/home/newActor', {
    method: 'POST', 
    headers:{'Content-Type': 'application/json'}, 
    mode: 'cors',
    body: JSON.stringify({firstName: firstName, lastName: lastName})
    
    });
 }
    return(
        <>
    <h1>This is the Add Actor Section</h1>
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



    function UpdateActor(){
        const [actorId, setActorId] = useState("");
        const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

const changeActorId=e=>{
    setActorId(e.target.value);
}
const changeFirstName=e=>{
    setFirstName(e.target.value);
}
const changeLastName=e=>{
    setLastName(e.target.value);
}
function handleSubmit(){
try {
fetch(`https://fake-films-top-trumps-1668596784853.azurewebsites.net/home/updateActor/${actorId}`, {method: 'PUT', headers: {'Content-Type': 'application/json'}, mode: 'cors', body: JSON.stringify({firstName: firstName, lastName: lastName})})
    
} catch (error) {
    console.log("Error!! Something went wrong")
}}
     return(
     <>
        <h1>This is the update film section</h1>
        <form onSubmit = {handleSubmit}>
            <label>ID <input type='number' onChange={changeActorId}/></label>
            <label>First Name<input type='text' onChange={changeFirstName}/></label>
            <label>Last Name <input type='text' onChange={changeLastName}/></label>
            <input type='submit' value='Insert'/>
            </form>
        </>
    )}
    export default Site;