// this will be the homepage.
// will import some backend data etc. 
import './styles/homepage.css' 
import { useNavigate } from "react-router";

// create two buttons 
// create two buttons one about the Learn More the other about get started   
// button 1


function HomePage() {   
    // initialize the useNavigate hook 
    const navigate = useNavigate();  

    return(
        <div className="homepage-container">
            <h1 className='home-page'>From deadlines to headlines — all in one email.</h1> 
        </div>
    ); 

    function getStarted() {  
        navigate('/getStarted')
    } 
}  



export default HomePage;