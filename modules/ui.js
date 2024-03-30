export function CreateHeader() {
//     <header id="header">
//     <div class="left">
//       <div class="logo">
//         <img src="/public/img/XMLID 1219.png" alt="">
//         <h1>
//           Kino<span id="area">area</span>
//         </h1>
//       </div>
//       <img src="/public/img/   .png" alt="">
//     </div>
//     <nav class="main">
//       <a href="#">Афиша</a>
//       <a href="#">Медиа</a>
//       <a href="#">Фильмы</a>
//       <a href="#">Актёры</a>
//       <a href="#">Новости</a>
//       <a href="#">Подборки</a>
//       <a href="#">Категории</a>
//     </nav>
//     <div class="right">
//       <button id="first_one">
//         <img src="/public/img/Vector.png" alt="">
//       </button>
//       <button id="second_one">
//         Войти
//       </button>
//     </div>
//    </header>
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
    document.body.prepend(header)
}
