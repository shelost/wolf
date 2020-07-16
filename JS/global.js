const NAVFAB = Id('navfab')
const NAVBAR = Id('navbar')
const DARK = Id('dark')
const LOGOMOBILE = Id('logo-mobile')
const WOLF = Id('wolf')
const MAIN = Class('main')[0]

function Toggle(){
    NAVBAR.classList.toggle('dorm')
    NAVFAB.classList.toggle('dorm')
    DARK.classList.toggle('dorm')
}

NAVFAB.onclick = Toggle
NAVBAR.onclick = Toggle
DARK.onclick = Toggle

const GlobalLoop = () => {

    if (window.scrollY / document.documentElement.scrollHeight > threshold){
        LOGOMOBILE.classList.add('dorm')
    }else{
        LOGOMOBILE.classList.remove('dorm')
    }

    if (window.innerWidth / window.innerHeight >= 2){
        WOLF.classList.add('widescreen')
        MAIN.classList.add('widescreen')
    }else{
        WOLF.classList.remove('widescreen')
        MAIN.classList.remove('widescreen')
    }
}

setInterval(GlobalLoop, 1000/60)







