var analysis = lottie.loadAnimation({
    container: Id('analysis'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../JS/JSON/analysis.json',
    name: 'analysis'
});

var academy = lottie.loadAnimation({
    container: Id('academy'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../JS/JSON/academy.json',
    name: 'academy'
});

var research = lottie.loadAnimation({
    container: Id('research'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../JS/JSON/research.json',
    name: 'research'
});

var wolfpack = lottie.loadAnimation({
    container: Id('wolfpack'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../JS/JSON/wolfpack.json',
    name: 'wolfpack'
});


let docHeight, scrollPos, ratio, index;

var arr = [1,1,1,1,1,1]

const loop = () => {

    docHeight = document.body.scrollHeight;
    scrollPos = window.scrollY;

    ratio = scrollPos / docHeight;

    index = Math.floor(ratio * 3.8);

    for (let i=0; i<Class('section').length; i++){
        let sec = Class('section')[i];
        let dot = Class('dot')[i];

        if (i == index){
            sec.classList.add('active')
            dot.classList.add('active')
            arr.push(i)

        }else{
            sec.classList.remove('active')
            dot.classList.remove('active')
        }


        dot.onclick = () => {
            window.scrollTo(0, (i+1)/3.8*docHeight);
        }
    }

    if (arr[arr.length-1] != arr[arr.length-2]){

        analysis.goToAndPlay(1, true)
        academy.goToAndPlay(1, true)
        research.goToAndPlay(1, true)
        wolfpack.goToAndPlay(1, true)

    }

    console.log(index)

}



setInterval(loop, 1000/60)