import { getData_2 } from "../../modules/http";
import { CreateHeader, reload_6 } from "/modules/ui.js";

CreateHeader()

const actors_id = localStorage.getItem('recent_actor')

const img_of_actor = document.querySelector('.the_actor .left img')

const name_of_actor = document.querySelectorAll('.name_of_movie')

const num = document.querySelector('.num')

const main_btn = document.querySelector('.main_btn')

const one = document.querySelector('#one')

const two = document.querySelector('#two')

const four = document.querySelector('#four')

const five = document.querySelector('#five')

const seven = document.querySelector('#seven')

const selector = document.querySelector('.selector')

const films = document.querySelector('.films')

const photos_of_this_very_actor = document.querySelector('.photos_of_this_very_actor')

console.log(img_of_actor);
getData_2(`https://api.themoviedb.org/3/person/${actors_id}?language=ru`)
.then(res => {
    console.log(res);
    num.innerHTML = res.popularity + '%'
    img_of_actor.src = `https://image.tmdb.org/t/p/original${res.profile_path}`
    name_of_actor.forEach(item => {
        item.innerHTML = res.name
    })
    two.innerHTML = res.known_for_department
    four.innerHTML = res.birthday
    five.innerHTML = res.place_of_birth
    one.onclick = () => {
        alert(res.biography)
    }
})
getData_2(`https://api.themoviedb.org/3/person/${actors_id}/images`)
.then(res => {
    console.log(res);
    for (const iterator of res.profiles) {
        photos_of_this_very_actor.innerHTML += `
        <img class="img" src="https://image.tmdb.org/t/p/original${iterator.file_path}" alt="">
        `
    }
})
getData_2(`https://api.themoviedb.org/3/person/${actors_id}/combined_credits?language=ru`)
.then(res => {
    seven.innerHTML = +seven.innerHTML + res.cast.length
    reload_6(res.cast, selector)
    console.log(res, `<img src="https://image.tmdb.org/t/p/original${res.cast[0].poster_path}" alt="">`);
    for (const iterator of res.cast.slice(0, 30)) {
      if(iterator.poster_path !== null){
        films.innerHTML +=  `
      <div style="margin-top: 20px;">
      </div>
       <div class="film">
     <div class="left">
        <img src="https://image.tmdb.org/t/p/original${iterator.poster_path}" alt="">
        <div>
        <h2>${iterator.title}</h2>
        <h3>${iterator.original_title}</h3>
        <p>${iterator.character}</p>
        </div>
    </div>
    <div class="right">
     <div class="kinoarea">
        <p>${iterator.vote_average}</p>
      </div>   
     <div class="imdb">
       <p>${iterator.vote_count}</p>
</div>
     <button>Карточка фильма</button>
    </div>
</div>
<hr>`
      }
    }
})
main_btn.onclick = () => {
    location.assign('/')
}