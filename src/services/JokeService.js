import axios from 'axios';

const JOKE_API_BASE_URL ="http://localhost:8080/api/v1/jokes";

class JokeService{
    getJokes(){
        return axios.get(JOKE_API_BASE_URL);
    }

    createJokes(joke){
        return axios.post(JOKE_API_BASE_URL,joke);
    }

    createComment(jokeId,comment){
        return axios.post(JOKE_API_BASE_URL +'/'+jokeId,comment)
    }

    getJokeById(jokeId){
        return axios.get(JOKE_API_BASE_URL + '/' + jokeId)
    }
}

export default new JokeService()