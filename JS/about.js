var chartAnim = lottie.loadAnimation({
    container: Id('chart'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../JS/JSON/chart.json',
    name: 'chart'
});

const ABOUT = Class('main')[0]

const AboutLoop = () => {

    if (window.innerWidth / window.innerHeight >= 2){
        ABOUT.classList.add('widescreen')
    }else{
        ABOUT.classList.remove('widescreen')
    }

}

setInterval(AboutLoop, 1000/60)