
import { defineStore } from "pinia";
import { getAllMovieByCinema, getMovieDetail, getScheduleByMovie } from '~/repositories/cinema/movieRepo';
import { useCinemaStore } from "~/stores/user/useCinemaStore.js";


export const useMovieStore = defineStore({
  id: "movieStore",
  state: () => ({
    movies: [],
    movieUpcoming:[],
    movieShowings:[],
    movieDetail:{},
    schedules:[],
    isShowLoading: false

  }),
  getters: {},
  actions: {
    async getAllMovieByCinema(){
        try {
          this.isShowLoading = true;
          const res = await getAllMovieByCinema(useCinemaStore().nameOfCinema)
          this.movies = res.data;
          this.movieShowings = [];
          this.movieUpcoming = [];
          for(let movie of res.data) {
            if(movie.upcoming) {
              this.movieUpcoming.push(movie)
            }
            //nếu movie.upcoming === false thì push vào mảng movieShowings
            if(!movie.upcoming) {
              this.movieShowings.push(movie)
            }
          }
          
        } catch (error) {  
          // alert(error.response.data)
        }finally {
          this.isShowLoading = false;
        }
    },

    async getMovieDetail(slug) {
      try {
        this.isShowLoading = true;
        const res = await getMovieDetail(slug)
        this.movieDetail = res.data
      } catch (error) {
        alert(error.response.data)
      }finally {
        this.isShowLoading = false;
      }
    },
    async getScheduleByMovie(slug) {
      try {
        const res = await getScheduleByMovie(slug)
        this.schedules = res.data
      } catch (error) {
        
      }
    }
  }
});
