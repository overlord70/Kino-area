import { getData } from "./modules/http";
import { CreateHeader } from "/modules/ui";
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
  console.log(iframe);
function reload_2(arr, place) {
  place.innerHTML = ''

  for (const iterator of arr) {
       const video = document.createElement('div')
       const img_of_video = document.createElement('img')
       const img = document.createElement('img')
       const name_of_it = document.createElement('h3')
       video.className = 'video'
       img_of_video.className = 'img_of_video'
       img.className = 'play'
       name_of_it.className = 'name_of_it'
       img.src = '/public/svg/play.svg'
       img_of_video.src = `https://image.tmdb.org/t/p/original${iterator.backdrop_path}`
       name_of_it.innerHTML = `${iterator.title}`
       video.append(img_of_video, name_of_it, img)
       video.id = `${iterator.id}`
       place.append(video)
       video.onclick = () => {

         fetch(`https://api.themoviedb.org/3/movie/${video.id}/videos`, get)
         .then(res => res.json())
         .then(res => {
           const trailer = res.results.find(item => item.type === 'Trailer')
           console.log(trailer);
           iframe.src = `https://www.youtube.com/embed/${trailer.key}`
           title_of_this_movie.innerHTML = `${iterator.title}`
         })
       }
    }
}
const line_of_traylers = document.querySelector('.line_of_traylers')
const photos_of_movies = document.querySelector('.photos_of_movies')
  function reload(arr, place) {
    place.innerHTML = ''
    for (const item of arr) {
        const movie = document.createElement('div')
        const relative = document.createElement('div')
        const img_bg = document.createElement('div')
        const score_of_movie = document.createElement('div')
        const num = document.createElement('p')
        const title = document.createElement('h2')
        const type = document.createElement('p')
        movie.className= 'movie'
        relative.classList.add('relative')
        img_bg.className = 'img_bg'
        img_bg.style.background = `url(https://image.tmdb.org/t/p/original${item.poster_path})`
        img_bg.style.backgroundSize = 'contain'
        img_bg.style.backgroundRepeat = 'no-repeat'
        score_of_movie.className = 'score_of_movie'
        num.id = 'num'
        num.innerHTML = item.vote_average
        title.className = 'title'
        title.innerHTML = item.title
        type.className = 'type'
        type.innerHTML = item.original_language
        score_of_movie.append(num)
        relative.append(img_bg, score_of_movie)
        movie.append(relative, title, type)
        place.append(movie)
    }
  }

  const btn = document.querySelector('.all_new_ones')
    const get = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODAzYWUxZGEwOGU3M2RmM2ZjMTI2OGMzNTE2NWNjMiIsInN1YiI6IjY0MjdlZWY4OGE4OGIyMDBkNTMyOGQ1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8WByVMOVhx2M7eo1SLPb3cPkt2NSfzLg53Afm1_dr-M'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', get)
    .then(response => response.json())
    .then(response => {
        reload(response.results.slice(0, 8), photos_of_movies)
        btn.onclick = () => {
            if(btn.id === 'all'){
                btn.id = ''
                btn.innerHTML = 'Все новинки'
                reload(response.results.slice(0, 8), photos_of_movies)
            } else {
                btn.id = 'all'
                btn.innerHTML = 'вернуться'
                reload(response.results, photos_of_movies)
            }
        }
        console.log(response);
        reload_2(response.results, line_of_traylers)
        
    })

   