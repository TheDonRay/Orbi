// this will be the homepage.
// will import some backend data etc. 
import './styles/homepage.css' 
import { useNavigate } from "react-router"; 
import './styles/homepagebtn.css'



function HomePage() {   
    // initialize the useNavigate hook 
    const navigate = useNavigate();  

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
                    Get Started
                </button> 
                <button className="learnmore-btn" onClick={learnMore}>
                    Learn More
                </button>
            </div>
        </div>
    ); 
} 

export default HomePage;