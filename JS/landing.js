
let Nav = `
    <div class = 'dorm' id = 'navbar'>

        <a href = 'index.html'>
            <div class = 'bubble'>

                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1067.1px" height="243.7px" viewBox="0 0 1067.1 243.7" style="overflow:visible;enable-background:new 0 0 1067.1 243.7;" xml:space="preserve">
                    <g>
                        <polygon class="letter" points="372.5,0.2 304.6,242.9 229.3,242.9 185.5,86.5 141.7,242.9 67.9,242.9 0,0.2 102.6,0.2 82.5,33.3
                            116,153 158.8,0.2 234.6,0.2 278.1,155.6 313.5,29 296,0.2 	"/>
                        <polygon class="letter" points="842.7,176.3 842.7,242.9 648.3,242.9 648.3,0.2 737.8,0.2 717.7,33.3 717.6,33.1 717.6,196.1
                            810.1,196.1 "/>
                        <polygon class="letter" points="1067.1,0.2 1067.1,65.6 1036.3,46.9 942,46.9 942,117.2 1009.7,117.2 1009.7,157.2 942,157.2
                            942,213.7 959.8,242.9 872.7,242.9 872.7,0.2 	"/>
                        <path class="letter" d="M496.4,0c-67.3,0-121.9,54.6-121.9,121.8c0,67.3,54.6,121.9,121.9,121.9s121.8-54.6,121.8-121.9
                            C618.3,54.6,563.7,0,496.4,0z M496.4,198.9c-21.9,0-39.7-34.5-39.7-77.1c0-42.6,17.8-77.1,39.7-77.1c21.9,0,39.7,34.5,39.7,77.1
                            C536.1,164.4,518.3,198.9,496.4,198.9z"/>
                    </g>
                </svg>

            </div>
        </a>

        <div class = 'bubble'>
            <a href = 'index.html'>
                <div class = 'navbtn'>
                    <h1> Home </h1>
                </div>
            </a>
            <a href = './@/features.html'>
                <div class = 'navbtn'>
                    <h1> Features </h1>
                </div>
            </a>
            <a href = './@/about.html'>
                <div class = 'navbtn'>
                    <h1> About </h1>
                </div>
            </a>
            <a href = './@/blog.html'>
                <div class = 'navbtn'>
                    <h1> Blog </h1>
                </div>
            </a>
            <a href = './@/contact.html'>
                <div class = 'navbtn'>
                    <h1> Contact </h1>
                </div>
            </a>
        </div>

    </div>

    <div id = 'navfab'>
        <div></div>
        <div></div>
        <div></div>
    </div>

    <div id = 'dark' class = 'dorm'> </div>

    <div id = 'notification' class = 'notification'>
        <div class = 'stack'>
            <h1> You've Been Signed Up!</h1>
            <h2> Look out for updates in your inbox. </h2>
        </div>
        <button id = 'ok'>OK</button>
    </div>

    <div id = 'logo-mobile'>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1067.1px" height="243.7px" viewBox="0 0 1067.1 243.7" style="overflow:visible;enable-background:new 0 0 1067.1 243.7;" xml:space="preserve">
                    <g>
                        <polygon class="letter" points="372.5,0.2 304.6,242.9 229.3,242.9 185.5,86.5 141.7,242.9 67.9,242.9 0,0.2 102.6,0.2 82.5,33.3
                            116,153 158.8,0.2 234.6,0.2 278.1,155.6 313.5,29 296,0.2 	"/>
                        <polygon class="letter" points="842.7,176.3 842.7,242.9 648.3,242.9 648.3,0.2 737.8,0.2 717.7,33.3 717.6,33.1 717.6,196.1
                            810.1,196.1 "/>
                        <polygon class="letter" points="1067.1,0.2 1067.1,65.6 1036.3,46.9 942,46.9 942,117.2 1009.7,117.2 1009.7,157.2 942,157.2
                            942,213.7 959.8,242.9 872.7,242.9 872.7,0.2 	"/>
                        <path class="letter" d="M496.4,0c-67.3,0-121.9,54.6-121.9,121.8c0,67.3,54.6,121.9,121.9,121.9s121.8-54.6,121.8-121.9
                            C618.3,54.6,563.7,0,496.4,0z M496.4,198.9c-21.9,0-39.7-34.5-39.7-77.1c0-42.6,17.8-77.1,39.7-77.1c21.9,0,39.7,34.5,39.7,77.1
                            C536.1,164.4,518.3,198.9,496.4,198.9z"/>
                    </g>
                </svg>
    </div>

`

Tag('body')[0].innerHTML = Nav + Tag('body')[0].innerHTML

const POINTER = Id('pointer')
const PAGE = Class('page')[0]

const LandingLoop = () => {

    if (window.scrollY / document.documentElement.scrollHeight > 0.2){
        POINTER.classList.add('dorm')
    }else{
        POINTER.classList.remove('dorm')
    }

    if (window.innerWidth / window.innerHeight > 2){
        PAGE.classList.add('widescreen')
    }else{
        PAGE.classList.remove('widescreen')
    }
}

setInterval(LandingLoop, 1000/60)

Id('beta').onclick = signup

//signup validation
function signup() {

  function isValid(str) {
    // based on RFC 5322 Official Standard
    // https://tools.ietf.org/html/rfc5322
    // dont touch the regex
    let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return regex.test(str)
  }
  let email = Id('email')
  if (isValid(email.value)) {
    email.classList.add('success')
    var xhr = new XMLHttpRequest()
    xhr.open(
    'POST',
    'https://api.wolf.financial/v1/signup',
    true,
    )
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.setRequestHeader('Content-Type', 'application/json')
    let code = window.location.search.split("code=")[1];
    xhr.send(JSON.stringify(code ? { email: email.value, referral: code } : { email: email.value }))
    Class('notification')[0].classList.add('notif-active')
    setTimeout(() => {
        email.classList.remove('success')
    }, 1000)
  } else {
    email.classList.add('fail')
    email.value = ''
    setTimeout(() => {
        email.classList.remove('fail')
    }, 400)
  }
}

Id('ok').onclick = () => {
    Class('notification')[0].classList.remove('notif-active')
}