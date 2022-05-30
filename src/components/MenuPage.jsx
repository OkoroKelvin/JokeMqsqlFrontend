import React from 'react';
import {useNavigate} from "react-router-dom";



function MenuPage(props) {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate(
            
            {pathname: "/jokes"}
        )
    }
    const addJoke = () => {
        navigate(
            {pathname: "/add-joke"}
        )
    }
    return ( 
        <div>
            <div>
                <h2 className="text-center">Welcome Joke Service</h2>
            </div>
            <div>
           
                <button type="button" class="btn btn-primary" onClick={addJoke}>Add joke "+"</button>
                
            </div>
            <br></br>
            
            <div>
        
                <button type="button" class="btn btn-primary" onClick={handleNext}>View all Joke</button>
                
            </div>
            
        </div>
    );
}

export default MenuPage;