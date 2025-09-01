import React from "react";  
import { useState } from "react"; 
import './styles/getstarted.css'
import Card from './Card';

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
    async function onSubmitfromUser(e) { // the e here stands for even tobject that the broswer passes to event handlers when something happens like a form submission a click or key press
        
        e.preventDefault();  //prevents the page from reloading. 

        console.log('Name Entered: ', name); 
        console.log('Email Entered', email);   

        // we can first go ahead and destructure the values as such 
        const userInfo = { name, email}; 

        //set up a try and catch case 
        try { // error that i faced was i didnt pass the entire backend route here to that specific endpoint
            const response = await fetch('http://localhost:8000/api/v1/user/userdata', { 
                method: 'POST', 
                headers: { 
                    'Content-Type' : 'application/json', 
                }, 
                body: JSON.stringify(userInfo), 
            });  
            
            if (response.ok) { 
                const result = await response.json(); 
                console.log('User added their name and email Successfully:', result); 
            } 
            else { 
                console.error('User added information failed', response.statusText); 
            }
        } catch (error) { 
            console.error('Error getting userinfo to backend', error);
        }

        // in the end reset the states in the form 
        setName(""); 
        setEmail(""); 
    
    } 

    //TODO add box containers to hold the date and time and also another container to hold the different tasks that user wants to add into it 
    return (  
        <>  
        <div className='divstyle'>
            <Card className="cardstyle">
                <h3 className="text">Enter your <span className='namecolor'>Name</span> and <span className='emailcolor'>Email!</span></h3>
                <form className="userentries" onSubmit={onSubmitfromUser}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Submit</button>
                </form>
            </Card>
        </div> 

        <div className="seconddivstyle">
             <Card className="secondcard">
                <h3 className="text">Enter the day you'd like your <span className='namecolor'>email</span> sent <span className='emailcolor'>to you!</span></h3>
                {/*TODO: Put calender component buiild here -> take the data destructure and send to backend called getTasks */}
            </Card>
        </div> 

        </>
    )
} 

export default Getstarted; 