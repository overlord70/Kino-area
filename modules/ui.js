import {getData} from "./http"
export function CreateHeader() {
    const header = document.createElement('header')
    const left = document.createElement('div')
    const logo = document.createElement('div')
    const img_1 = document.createElement('img')
    const h1 = document.createElement('h1')
    const area = document.createElement('span')
    const img_2 = document.createElement('img')
    const main = document.createElement('nav')
    const a_1 = document.createElement('a')
    const a_2 = document.createElement('a')
    const a_3 = document.createElement('a')
    const a_4 = document.createElement('a')
    const a_5 = document.createElement('a')
    const a_6 = document.createElement('a')
    const a_7 = document.createElement('a')
    const right = document.createElement('div')
    const first_one = document.createElement('button')
    const img_3 = document.createElement('img')
    const second_one = document.createElement('button')
    header.id = 'header'
    left.className = 'left'
    right.className = 'right'
    main.className = 'main'
    area.id = 'area'
    logo.className = 'logo'
    area.innerHTML = 'area'
    h1.innerHTML = 'Kino'
    img_1.src = '/public/img/XMLID 1219.png'
    img_2.src = '/public/img/   .png'
    a_1.innerHTML = 'Афиша'
    a_2.innerHTML = 'Медиа'
    a_3.innerHTML = 'Фильмы'
    a_4.innerHTML = 'Актёры'
    a_5.innerHTML = 'Новости'
    a_6.innerHTML = 'Подборки'
    a_7.innerHTML = 'Категории'
    a_1.href = '#'
    a_2.href = '#'
    a_3.href = '#'
    a_4.href = '#'
    a_5.href = '#'
    a_6.href = '#'
    a_7.href = '#'
    first_one.id = 'first_one'
    second_one.id = 'second_one'
    second_one.innerHTML = 'Войти'
    img_3.src = '/public/img/Vector.png'
    first_one.append(img_3)
    right.append(first_one, second_one)
    h1.append(area)
    main.append(a_1, a_2, a_3, a_4, a_5, a_6, a_7)
    logo.append(img_1, h1)
    left.append(logo, img_2)
    header.append(left, main, right)
    document
        .body
        .prepend(header)
}

export function reload(arr, place, place_bg) {
    place.innerHTML = ''
    for (const item of arr) {
        const movie = document.createElement('div')
        const relative = document.createElement('div')
        const img_bg = document.createElement('div')
        const score_of_movie = document.createElement('div')
        const num = document.createElement('p')
        const button = document.createElement('button')
        const title = document.createElement('h2')
        const type = document.createElement('p')
        movie.className = 'movie'
        button.className = 'btn'
        button.innerHTML = 'Карточка фильма'
        relative
            .classList
            .add('relative')
        img_bg.className = 'img_bg'
        img_bg.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${item.poster_path})`
        img_bg.style.backgroundSize = 'contain'
        img_bg.style.backgroundRepeat = 'no-repeat'
        img_bg.id = item.backdrop_path
        score_of_movie.className = 'score_of_movie'
        num.id = 'num'
        num.innerHTML = item.vote_average
        title.className = 'title'
        title.innerHTML = item.title
        type.className = 'type'
        type.innerHTML = item
            .original_language
            score_of_movie
            .append(num)
            img_bg.append(button)
        relative.append(img_bg, score_of_movie)
        movie.append(relative, title, type)
        place.append(movie)
        setTimeout(() => {
            const imgs = document.querySelectorAll('.photos_of_movies .img_bg')
            let prev = 0
             imgs.forEach((img, idx) => {
                img.onclick = () => {
                    imgs[prev].classList.remove('add_class')
                    img.classList.add('add_class')
                    prev = idx
                    img.firstElementChild.classList.add('btn_active')
                    setTimeout(() => {
                        img.firstElementChild.classList.remove('btn_active')
                        img.classList.remove('add_class')
                    }, 7000);
                    setTimeout(() => {
                        localStorage.setItem('url', `${img.id}`)
                        place_bg.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${img.id})`
                        place_bg.style.backgroundRepeat = "no-repeat"
                        place_bg.style.backgroundSize = "contain"
                    }, 0)
                }
             })
        }, 10);
    }
}

export function reload_2(arr, place, second_place, iframe) {
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
        name_of_it.innerHTML = `${iterator
            .title}`
            video
            .append(img_of_video, name_of_it, img)
        video.id = `${iterator
            .id}`
            place
            .append(video)
        video.onclick = () => {

            getData(`/${video.id}/videos`).then(res => {
                const trailer = res
                    .results
                    .find(item => item.type === 'Trailer')
                iframe.src = `https://www.youtube.com/embed/${trailer.key}`
                second_place.innerHTML = `${iterator.title}`
            })
        }
    }
}
export function reload_3(arr, place) {
    place.innerHTML = ''
    for (const item of arr) {
        const movie = document.createElement('div')
        const relative = document.createElement('div')
        const img_bg = document.createElement('div')
        const score_of_movie = document.createElement('div')
        const num = document.createElement('p')
        const title = document.createElement('h2')
        const type = document.createElement('p')
        movie.className = 'movie'
        relative
            .classList
            .add('relative')
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
        type.innerHTML = item
            .original_language
            score_of_movie
            .append(num)
        relative.append(img_bg, score_of_movie)
        movie.append(relative, title, type)
        place.append(movie)
        img_bg.onclick = () => {
            img_bg
                .classList
                .add('active')
        }
    }
}
export function reload_4(arr, place) {
    place.innerHTML = ""


    for (let item of arr) {
        place.innerHTML += `
        <div class="photo">
        <img src="https://image.tmdb.org/t/p/original${item.profile_path}" alt="">
        <p>${item.popularity}</p>
        <h2>${item.name}</h2>
        <h3>${item.original_name}</h3>
      </div>
        `
    }
}
export function reload_name(arr, place) {
    place.innerHTML = ''
    
    for (const item of arr) {
    const name = document.createElement('name')
    const line = document.createElement('div')
    const left = document.createElement('div')
    const right = document.createElement('div')
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    line.className = 'line'
    left.classList.add('left')
    right.className = 'right'
    name.classList.add('name')
    p.innerHTML = item.popularity
    h2.innerHTML = item.name
    h3.innerHTML = item.original_name
    right.append(p)
    left.append(h2, h3)
    name.append(left, right)
    place.append(name, line)
    }
}