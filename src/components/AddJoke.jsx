
import React, { useState} from 'react';
import {useNavigate} from "react-router-dom";
import JokeService from '../services/JokeService';

function AddJoke () {

    const [content,setContents] = useState('')
    const navigate = useNavigate();

    const handleNext = () => {
        navigate(
            {pathname: "/menu"}
        )
    }

    const saveJoke = (e) => {
        e.preventDefault();
        const joke = {content}
        

        JokeService.createJokes(joke).then((respond) =>{
            console.log(respond.data);
            handleNext();

        }).catch(error => {
            console.log(error)
        })

    }
    
    return (
    <div>

       <br></br>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">Add Joke</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className = "form-label">Joke Contents</label>
                                  <input
                                  type = "text"
                                  placeholder = "Enter Joke contents"
                                  name = "content"
                                  className="form-control"
                                  value = {content}
                                  onChange = {(e)=> setContents(e.target.value)}>
                                  </input>
                            </div>

                            <button className="btn btn-success"onClick = {(e) => saveJoke(e)}> submit</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AddJoke;
