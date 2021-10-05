// Abre e fecha o menu ao clicar no icones
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

// Quando clicar em algum item irá fechar o menu e redirecionar para o conteudo
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

//mudar o header da pagina com a rolagem

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

//Carousel

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    Keyboard: true,
})

// ScrollReveal

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 350,
    reset: true
})

scrollReveal.reveal(`
#home .text, #home .image,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand

`, { interval: 100 })

// back to top

const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
    if (window.scrollY >= 810) {
        backToTopButton.classList.add('show')
    }
    else {
        backToTopButton.classList.remove('show')
    }
})
