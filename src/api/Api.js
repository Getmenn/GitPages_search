import axios from 'axios';
 
export const main = axios.create({
    baseURL: 'https://api.github.com/search/'
});



