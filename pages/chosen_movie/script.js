import { getData } from "../../modules/http";
import { CreateHeader, reload_5 } from "/modules/ui";
CreateHeader()
const recent_movie = localStorage.getItem('recent_movie')

const url = localStorage.getItem('url')

const bg_of_entered_movie = document.querySelector('.bg_of_entered_movie')

bg_of_entered_movie.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${url})`

const poster = document.querySelector('.poster')

const name_of_movie = document.querySelector('.name_of_movie')

const name = document.querySelector('.name')

const original_name = document.querySelector('.original_name')

const p_1 = document.querySelector('.round_1 p')

const p_2 = document.querySelector('.round_2 p')

const description = document.querySelector('.description')

const people = document.querySelector('.people')

const percent = document.querySelector('.percent')

const fill = document.querySelector('.fill')

const list_of_actors = document.querySelector('.list_of_actors')
console.log(list_of_actors);

getData(`/${recent_movie}?language=ru`)
.then(res => {
    console.log(res);
    poster.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${res.poster_path})`
    name_of_movie.innerHTML = res.title
    name.innerHTML = res.title
    original_name.innerHTML = res.original_title
    p_1.innerHTML = Math.round(+res.vote_average)
    p_2.innerHTML = res.vote_count
    description.innerHTML = res.overview
    people.innerHTML = res.id
    fill.style.width = Math.round(+res.vote_average) * 10 + '%'
    percent.innerHTML = Math.round(+res.vote_average) * 10
})

getData(`/${recent_movie}/images` )
.then(res => console.log(res))

const main = document.querySelector('.main_btn')
main.onclick = () => {
    location.assign('/')
}
getData(`/${recent_movie}/credits?api_key=###`)
.then(res => {
    reload_5(res.cast, list_of_actors)
})