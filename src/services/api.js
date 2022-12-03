import axios from "axios";
//Base da Api http://api.themoviedb.org/3/
//movie/now_playing?api_key=13f587e8928001aad5c1f93409a6cf01&language=pt-br

const api = axios.create({
    baseURL: 'http://api.themoviedb.org/3/'
});

export default api;