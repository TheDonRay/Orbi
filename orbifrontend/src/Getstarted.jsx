import React from "react";  
import { useState } from "react"; 
import './styles/getstarted.css'


function Getstarted() {   

        const [name, setName] = useState(""); 
        const [email, setEmail] = useState("");

    /*Whenever you handle an event — 
    like a button click, form submit, 
    key press, mouse hover, or input change — 
    the browser automatically passes an event object 
    to your handler. By convention, we call it e (short for “event”), 
    though you could name it anything*/
    // form submission handler 
    function onSubmitfromUser(e) { // the e here stands for even tobject that the broswer passes to event handlers when something happens like a form submission a click or key press
        
        e.preventDefault();  //prevents the page from reloading. 

        console.log('Name Entered: ', name); 
        console.log('Email Entered', email);   

        //TODO send that data to backend to the post route 


        // in the end reset the form 
        setName(""); 
        setEmail(""); 
    
    } 

    //TODO add box containers to hold the date and time and also another container to hold the different tasks that user wants to add into it 
    return (  
        <>
            <h3 className="text">Enter your tasks, name, and email, and we’ll send you a daily plan at the time you choose.</h3>  

            <form className="userentries" onSubmit={onSubmitfromUser}>  
                <input type = "text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required /> {/*n this line we are saying once the event happens we set the value that the user wrote to the setName */} 
                 <input type = "email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />  
                 <button type = "submit">Submit</button>
            </form>
        </>
    )
} 

export default Getstarted; 