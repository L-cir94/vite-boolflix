
import axios from 'axios'
import { reactive } from "vue";
export const state = reactive({
    searchText: '',
    error: null,
    loading: true,
    results: null,
/*     allResults: {
        movies: null,
        series: null
    }, */
    pagination: null,
    BaseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'edd3839ffafac261797d7e156df34aba',
    resourcePathMovie: 'search/movie',
    resourcePathTvShows: 'search/tv',
    postPic: 'https://image.tmdb.org/t/p/w300',
    

    fetchMovies(URL) {
        //https://api.themoviedb.org/3/search/movie?api_key=edd3839ffafac261797d7e156df34aba&query=all
        //https://api.themoviedb.org/3/search/movie?api_key=edd3839ffafac261797d7e156df34aba&query=
        const url = `${this.BaseUrl + this.resourcePathMovie}?api_key=${this.apiKey}&query=${this.searchText}`
        console.log(url);
        axios
            .get(url)
            .then(response => {
                console.log(response.data.results);
                this.results = response.data.results;
                this.loading = false
            })
            .catch(error => {
                console.log(error.message)
                console.error(error.message);
            })
    },
    fetchTvShows() {
        const url = `${this.BaseUrl + this.resourcePathTvShows}?api_key=${this.api_key}&query=${this.searchText}}`
        axios
            .get(url)
            .then((response) => {
                this.results = response.data.results;
                this.loading = false;
            })
            .catch((error) => {
                console.log(error);
                console.error(error.message);
            });
    }
/*     fetchAllResult() {
        Promise.all([this.fetchMovies(), this.fetchTvShows()])
            .then(([movies, series]) => {
                this.allResults.movies = movies.results
                this.allResults.series = series
            })



    }, */


})


