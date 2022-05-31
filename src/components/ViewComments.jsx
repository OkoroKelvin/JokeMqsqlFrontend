import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import JokeService from '../services/JokeService'

function ViewComments(props) {
    const [comments,setComments] = useState([])

    const {id} = useParams(); 


    useEffect(() => {
        getJokeComments()
      },[])


    const getJokeComments =() =>{
        JokeService.getCommentsOfJoke(id).then((response)=>{
            setComments(response.data.comments)
            console.log(comments)
        });

    };


  return (
    <div className="container">
      <h1 className="text-center"> Comments</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Joke Comment</th>
          </tr>
        </thead>
        <tbody>
          {
            comments.map(
              comment => 
              <tr key = {comment.id}>
                <td>{comment.comment}</td>
                <td>
                <button className="btn btn-danger" size="sm">Delete</button>
                </td>                        
              </tr>

            )
          }
        </tbody>
  
      </table>

      </div>
  )
}
export default ViewComments;
