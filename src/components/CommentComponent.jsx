import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import JokeService from '../services/JokeService';

function CommentComponent() {

    const [words,setComment] = useState('')
    const {id} = useParams(); 

    const navigate = useNavigate();

    const handleNext = () => {
        navigate(
            {pathname: "/menu"}
        )
    }


    const createComment = (e) => {
        e.preventDefault();
        const savedComment = {words}
        

        JokeService.createComment(id,savedComment).then((respond) =>{
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
                    <h2 className="text-center">Add Comment</h2>
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className = "form-label">Comment</label>
                                  <input
                                  type = "text"
                                  placeholder = "Enter your comment"
                                  name = "words"
                                  className="form-control"
                                  value = {words}
                                  onChange = {(e)=> setComment(e.target.value)}>
                                  </input>
                            </div>

                            <button className="btn btn-success"onClick = {(e) => createComment(e)}> submit</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
export default CommentComponent