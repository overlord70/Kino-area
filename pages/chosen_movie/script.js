import { getData } from "../../modules/http";
import { reload } from "../../modules/ui";
import { CreateHeader, reload_5 } from "/modules/ui.js";
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

const trailer_iframe = document.querySelector('.trailer iframe')

const name_2 = document.querySelector('.name_2')

const name_3 = document.querySelector('.name_3')

const name_4 = document.querySelector('.name_4')

const poster_photos = document.querySelector('.poster_photos')

const place_for_cadrs = document.querySelector('.place_for_cadrs')

const prikvels = document.querySelector('.prikvels')

getData(`/${recent_movie}?language=ru`)
.then(res => {
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
    name_2.innerHTML = res.title
    name_3.innerHTML = res.title
    name_4.innerHTML = res.title
})

getData(`/${recent_movie}/images` )
.then(res => {
    for (const iterator of res.posters) {
        poster_photos.innerHTML += `
        <img  src="https://image.tmdb.org/t/p/original${iterator.file_path}" alt="">
        `
    }
    for (const iterator of res.backdrops) {
        place_for_cadrs.innerHTML += `
        <img  src="https://image.tmdb.org/t/p/original${iterator.file_path}" alt="">
        `
    }
})

const main = document.querySelector('.main_btn')
main.onclick = () => {
    location.assign('/')
}
getData(`/${recent_movie}/credits?api_key=###`)
.then(res => {
    reload_5(res.cast, list_of_actors)
})

getData('/now_playing?language=en-US&page=1')
.then(res => {
    getData(`/${recent_movie}/videos`).then(resen => {
        const trailer = resen.results.find(item => item.type === 'Trailer')
            trailer_iframe.src = `https://www.youtube.com/embed/${trailer.key}`
    })
})
getData(`/${recent_movie}/similar?language=ru`)
.then(res => {
    console.log(res.results);
    for (const iterator of res.results) {
        prikvels.innerHTML += `
                    <div class="prikvel">
                        <img src="https://image.tmdb.org/t/p/original${iterator.poster_path}" alt="">
                        <h2>${iterator.title}</h2>
                        <p>${iterator.original_language}</p>
                    </div>
        `
    }
})