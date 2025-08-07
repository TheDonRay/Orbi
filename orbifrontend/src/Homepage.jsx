// this will be the homepage.
// will import some backend data etc. 
import './styles/homepage.css' 
import { useNavigate } from "react-router";


function HomePage() {   
    // initialize the useNavigate hook 
    const navigate = useNavigate();  

    return(
        <div className="homepage-container">
            <h1 className='home-page'>From deadlines to headlines — all in one email.</h1> 
        </div>
    ); 

    function getStarted() {  
        navigate('/getstarted'); 
    } 
}  



export default HomePage;