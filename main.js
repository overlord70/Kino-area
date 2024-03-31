import {getData, getData_2} from "./modules/http";
import { reload_3 } from "./modules/ui";
import {CreateHeader, reload, reload_2} from "/modules/ui";
import axios from "axios";
CreateHeader()

const title_of_this_movie = document.querySelector('#title_of_this_movie')

const iframe = document.querySelector('iframe')

const bg_of_entered_movie = document.querySelector('.bg_of_entered_movie')
const line_of_traylers = document.querySelector('.line_of_traylers')
const photos_of_movies = document.querySelector('.photos_of_movies')
bg_of_entered_movie.style.background = `url(https://image.tmdb.org/t/p/original${localStorage.getItem(
    'url'
)})`
bg_of_entered_movie.style.backgroundRepeat = 'no-repeat'
bg_of_entered_movie.style.backgroundSize = 'contain'

const btn = document.querySelector('.all_new_ones')
function all_create() {
    getData('/now_playing?language=en-US&page=1').then(response => {
        console.log(response);
        reload(response.results.slice(0, 8), photos_of_movies, bg_of_entered_movie)
        btn.onclick = () => {
            if (btn.id === 'all') {
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
}
all_create()

const options_place = document.querySelector('.options')
getData_2(`https://api.themoviedb.org/3/genre/movie/list?language=ru`)
.then(response => {
        console.log(response)
        for (const iterator of response.genres) {
            const li = document.createElement('p')
            li.innerHTML = `${iterator.name}`
            li.id = `${iterator.id}`
            li.className = 'option'
            options_place.append(li)
            li.onclick = () => {
                getData_2(`https://api.themoviedb.org/3/discover/movie?&with_genres=${li.id}`).then(
                    res => {
                        reload(res.results.slice(0, 8), photos_of_movies, bg_of_entered_movie)
                        btn.onclick = () => {
                            if (btn.id === 'all') {
                                btn.id = ''
                                btn.innerHTML = 'Все новинки'
                                reload(res.results.slice(0, 8), photos_of_movies, bg_of_entered_movie)
                            } else {
                                btn.id = 'all'
                                btn.innerHTML = 'вернуться'
                                reload(res.results, photos_of_movies, bg_of_entered_movie)
                            }
                        }
                    }
                )
            }
        }
      }
)
const all = document.querySelector('#all')
all.onclick = () => {
    all_create()
}
const movies_of_this_time = document.querySelector('.movies_of_this_time')
const all_the_time = document.querySelector('#all_the_time')
getData_2('https://api.themoviedb.org/3/discover/movie?all_time')
.then(res => reload_3(res.results, movies_of_this_time ))
all_the_time.onclick = () => {
  getData_2('https://api.themoviedb.org/3/discover/movie?all_time')
.then(res => reload_3(res.results, movies_of_this_time ))
}
let years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008]

for (const iterator of years) {
  let p  = document.createElement('p')
  p.innerHTML = iterator
  document.querySelector('.line_of_time').append(p)
  p.onclick = () => {
    getData_2(`https://api.themoviedb.org/3/discover/movie?&year=${iterator}`)
  .then(res => {
    console.log(res);
    reload_3(res.results, movies_of_this_time)
  })
  }
}