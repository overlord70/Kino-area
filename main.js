import { getData } from "./modules/http";
import { CreateHeader, reload, reload_2 } from "/modules/ui";
import axios from "axios";
CreateHeader()
const options = document.querySelectorAll('.options p')
const title_of_this_movie = document.querySelector('#title_of_this_movie')
let prev = 0
options.forEach((opt, idx) => {
    opt.onclick = () => {
        options[prev].id = ''
        opt.id = 'active_option'
        prev = idx
    }
})
  const iframe = document.querySelector('iframe')

const bg_of_entered_movie = document.querySelector('.bg_of_entered_movie')
const line_of_traylers = document.querySelector('.line_of_traylers')
const photos_of_movies = document.querySelector('.photos_of_movies')
 bg_of_entered_movie.style.background= `url(https://image.tmdb.org/t/p/original${localStorage.getItem('url')})`
 bg_of_entered_movie.style.backgroundRepeat= 'no-repeat' 
 bg_of_entered_movie.style.backgroundSize = 'contain'


  const btn = document.querySelector('.all_new_ones')
  
  getData('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
    .then(response => {
      console.log(response);
        reload(response.results.slice(0, 8), photos_of_movies, bg_of_entered_movie)
        btn.onclick = () => {
            if(btn.id === 'all'){
                btn.id = ''
                btn.innerHTML = 'Все новинки'
                reload(response.results.slice(0, 8), photos_of_movies, bg_of_entered_movie)
            } else {
                btn.id = 'all'
                btn.innerHTML = 'вернуться'
                reload(response.results, photos_of_movies, bg_of_entered_movie)
            }
        }
        reload_2(response.results, line_of_traylers, title_of_this_movie, iframe)
    })

   