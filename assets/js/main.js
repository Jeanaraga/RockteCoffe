function aparecerLink () {
    const link = document.querySelector('.menu')
    link.classList.toggle('menu-mobile')
}

const botaoHamb = document.querySelector(".svg-menu")

botaoHamb.addEventListener('click', aparecerLink)


const browserSmall = window.matchMedia('(min-width: 850px)')


function aparecerImg (e) {
    if (e.matches) {
        let img = document.getElementById('img-logo')
        img.setAttribute('src', './assets/imgs/logo-desktop.svg')
    } else {
        let img = document.getElementById('img-logo')
        img.setAttribute('src', './assets/imgs/logo-mobile.svg')
    }
}


aparecerImg