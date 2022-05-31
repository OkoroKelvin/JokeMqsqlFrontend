import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import JokeService from '../services/JokeService'

function JokeComponent(props) {
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

  const deleteJoke = (jokeId)=>{
    JokeService.deleteJoke(jokeId).then((response)=>{
      getJokes();

    }).catch(error =>{
      console.log(error);
    })

  }


  const likeJoke =(jokeId)=>{
    JokeService.likeJokes(jokeId).then((respond)=>{
      getJokes();
    }).catch(error =>{
      console.log(error);
    })
  }

  return (
    <div className="container">
      <h1 className="text-center"> List of Jokes</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            
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
                <td>{joke.content}</td>
                <td>{joke.createdDate}</td>
                <td>{joke.likes}</td>
                <td>
                  <Link className="btn btn-info" to={`/comment/${joke.id}`} size="sm">Comment</Link>
                </td>
                <td>
                  <Link className="btn btn-info" to={`/view-comment/${joke.id}`} size="sm">View Comment</Link>
                  </td>
                <td>
                <button className="btn btn-danger" onClick={()=> deleteJoke(joke.id)} size="sm">Delete</button>
                  </td>
                <td>
                  <button className="btn btn-primary"onClick={()=> likeJoke(joke.id)} size="sm">Like</button>
                  </td>
                                      
              </tr>

            )
          }
        </tbody>
  
      </table>

      </div>
  )
}

export default JokeComponent

