import React, { useState, useEffect } from 'react'
import JokeService from '../services/JokeService'

function JokeComponent() {
  const [jokes,setJokes] = useState([])

 useEffect(() => {
  getJokes()
},[])
  
 const getJokes =() => {
   
     JokeService.getJokes().then((response) =>{
      console.log("hi");
       setJokes(response.data.jokes);
      // console.log(response.data.jokes)
      console.log(jokes)
    });
  };
  

  return (
    <div className="container">
      <h1 className="text-center"> List of Jokes</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Joke Id</th>
            <th>Joke Content</th>
            <th>Joke Created Date</th>
            <th>Joke likes</th>
          </tr>
        </thead>
        <tbody>
          {
            jokes.map(
              joke => 
              <tr key = {joke.id}>
                <td>{joke.id}</td>
                <td>{joke.content}</td>
                <td>{joke.createdDate}</td>
                <td>{joke.likes}</td>


              </tr>

            )
          }
        </tbody>
  
      </table>

      </div>
  )
}

export default JokeComponent

