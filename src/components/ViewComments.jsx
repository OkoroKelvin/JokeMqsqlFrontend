import React, { useState, useEffect } from 'react'

import JokeService from '../services/JokeService'

function ViewComments(props) {
    const [comments,setComments] = useState([])

    useEffect(() => {
        getJokeComments()
      },[])


    const getJokeComments =() =>{
        JokeService.getCommentsOfJoke().then((response)=>{
            console.log("hi");
            setComments(response.data.comments.comment)
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
