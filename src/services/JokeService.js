import axios from 'axios';

const JOKE_API_BASE_URL ="http://localhost:8080/api/v1/onlyJoke";

class JokeService{
    getJokes(){
        return axios.get(JOKE_API_BASE_URL);
    }

    createJokes(joke){
        return axios.post(JOKE_API_BASE_URL,joke);
    }
}

export default new JokeService()