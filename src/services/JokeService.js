import axios from 'axios';

const JOKE_API_BASE_URL ="http://localhost:8080/api/v1/jokes";
const MOST_JOKE_API_BASE_URL = "http://localhost:8080/api/v1/jokes/most"
const LEAST_JOKE_API_BASE_URL = "http://localhost:8080/api/v1/jokes/least"
const COMMENT_JOKE_API_BASE_URL = "http://localhost:8080/api/v1/jokes/comment"

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

    deleteJoke(jokeId){
        return axios.delete(JOKE_API_BASE_URL+'/'+jokeId)
    }

    deleteComment(jokeId){
        return axios.delete(JOKE_API_BASE_URL+'/'+jokeId)
    }

    getMostLikeJokes(){
        return axios.get(MOST_JOKE_API_BASE_URL)
    }

    getLeastLikeJokes(){
        return axios.get(LEAST_JOKE_API_BASE_URL)
    }

    likeJokes(jokeId){
        return axios.patch(JOKE_API_BASE_URL+'/'+jokeId)
    }

    getCommentsOfJoke(jokeId){
        return axios.get(COMMENT_JOKE_API_BASE_URL+'/'+jokeId)
    }
}

export default new JokeService()