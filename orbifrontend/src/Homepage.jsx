// this will be the homepage.
// will import some backend data etc. 
import './styles/homepage.css' 
import { useNavigate } from "react-router"; 
import './styles/homepagebtn.css'  
import React, { useState, useEffect } from 'react'; 
import './styles/cardhomepage.css'; 



function HomePage() {   
    // initialize the useNavigate hook 
    const navigate = useNavigate();  
    const [data, setData] = useState(null); // right now this is assigned to not be null 
    
    useEffect (() => { 
        const fetchdata = async () => { // this is our function which is asynchrnous
            try { 
                const response = await fetch('http://localhost:8000/api/v1/home'); 
                const result = await response.json();   
                console.log(result); 
                setData(result);  
                
            } 
            catch (error) { 
                console.error('Error Retrieving Data', error); 
            }
        }; 
        // invoke the function as such 
        fetchdata(); 
    }, []);
    // The function that handles the navigation
    function getStarted() {  
        navigate('/getstarted'); 
    }  

    function learnMore() { 
        navigate('/learnmore'); 
    }

    return(
        <div className="homepage-container">
            <h1 className='home-page'>From deadlines to headlines — all in one email.</h1> 
            
            {/* New container for the buttons */}
            <div className="button-container">
                <button className="get-started-btn" onClick={getStarted}>
                    {data ? data.btntitle: "Loading..."}
                </button> 
                <button className="learnmore-btn" onClick={learnMore}>
                    {data ? data.secondbtntitle: "Loading..."}
                </button> 
            </div> 

            {/*Card stuff here*/} 
            <div className='transparent-card'> 
                <h2>From Idea to Orbit — Orbi’s Beginning</h2> 
                <p className = "text">{data ? data.cardData : "Loading..."}</p>
            </div>
        </div>
    ); 
} 

export default HomePage;