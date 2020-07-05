var analysisAnim = lottie.loadAnimation({
    container: Id('analysis'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../JS/JSON/analysis.json',
    name: 'analysis'
});

var wolfpackAnim = lottie.loadAnimation({
    container: Id('wolfpack'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../JS/JSON/wolfpack.json',
    name: 'wolfpack'
});

var researchAnim = lottie.loadAnimation({
    container: Id('research'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../JS/JSON/research.json',
    name: 'research'
});

var academyAnim = lottie.loadAnimation({
    container: Id('academy'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../JS/JSON/academy.json',
    name: 'academy'
});

const ANALYSIS = Id('analysis')
const WOLFPACK = Id('wolfpack')
const RESEARCH = Id('research')
const ACADEMY = Id('academy')

let docHeight, scrollPos, ratio, index;

var arr = [1,1,1,1,1,1]

var analysisArr = [0, 0]
var wolfpackArr = [0, 0]
var researchArr = [0, 0]
var academyArr = [0, 0]

const FeaturesLoop = () => {

    if (window.innerWidth > 800){
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

            analysisAnim.goToAndPlay(1, true)
            academyAnim.goToAndPlay(1, true)
            researchAnim.goToAndPlay(1, true)
            wolfpackAnim.goToAndPlay(1, true)

        }

        for (let i=0; i<Class('section').length; i++){
            let sec = Class('section')[i]
            if (window.innerWidth / window.innerHeight >= 2){
                sec.classList.add('widescreen')
            }else{
                sec.classList.remove('widescreen')
            }
        }

    }else{

        if (Visible(ANALYSIS)){
            analysisArr.push(1)
        }else{
            analysisArr.push(0)
        }

            if (analysisArr[analysisArr.length-1] != analysisArr[analysisArr.length-2]){
                analysisAnim.goToAndPlay(1, true)
            }

        if (Visible(WOLFPACK)){
            wolfpackArr.push(1)
        }else{
            wolfpackArr.push(0)
        }

            if (wolfpackArr[wolfpackArr.length-1] != wolfpackArr[wolfpackArr.length-2]){
                wolfpackAnim.goToAndPlay(1, true)
            }

        if (Visible(RESEARCH)){
            researchArr.push(1)
        }else{
            researchArr.push(0)
        }

            if (researchArr[researchArr.length-1] != researchArr[researchArr.length-2]){
                researchAnim.goToAndPlay(1, true)
            }

        if (Visible(ACADEMY)){
            academyArr.push(1)
        }else{
            academyArr.push(0)
        }

            if (academyArr[academyArr.length-1] != academyArr[academyArr.length-2]){
                academyAnim.goToAndPlay(1, true)
            }

    }
}

function Visible(elem){
    if (elem.getBoundingClientRect().top >= 0 && elem.getBoundingClientRect().top <= window.innerHeight){
        return true;
    }else{
        return false;
    }
}


setInterval(FeaturesLoop, 1000/60)