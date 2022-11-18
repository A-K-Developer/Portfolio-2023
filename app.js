pdfListener('basicPdf', 'fundamentalsPdf', 'advancedPdf')
createNavBtn()

function classControl(type, typeName, parent, addClasses, removeClass, changeStyle, textContent) {
    let element;
    if (type == 'id') {
        element = document.getElementById(typeName);
    } else if (type == 'query') {

        element = parent.querySelector(typeName);
    } else if (type == 'class') {
        element = document.getElementsByClassName(typeName)[0];
    } else if (type == 'tag') {
        element = document.getElementsByTagName(typeName)[0];
    }

    if (addClasses) {
        for (let i = 0; i < addClasses.length; i++) {

            element.classList.add(addClasses.shift());
        }
    } else if (removeClass) {
        for (let z = 0; z < removeClass.length; z++) {
            let classes = removeClass.shift()
            element.classList.remove(classes);

        }
    }

    if (changeStyle == 'hide') {
        element.style.display = 'block';
    } else if (changeStyle == 'show') {
        element.style.display = 'none'
    }

    return element
}

function btnFunc(arg) {
    let btnForMobile = classControl('id', 'btnForMobile', '', '', '', '')
    let longLine = classControl('query', '.longLine', btnForMobile, '', '', '');
    let showNav = classControl('class', 'navForMobile', '', '', '', '')
    let nav = classControl('tag', 'nav', '', '', '');
    if (showNav == null) {
        createNavBarMenu();
        classControl('tag', 'nav', '', ['btnFixed'], '', '');
    }

    if (longLine.style.display == 'none') {
        classControl('tag', 'main', '', '', ['blurMain'], '');
        classControl('query', '.longLine', btnForMobile, ['longLineAni2'], ['longLineAni'], 'hide');
        classControl('query', '.shortLine', btnForMobile, ['shortLineAni2'], ['shortLineAni'], 'hide');
        classControl('class', 'navForMobile', '', ['navForMobileAniBack'], ['navForMobileAni'], '')
        setTimeout(() => {
            nav.removeChild(showNav)
            classControl('query', '.longLine', btnForMobile, '', ['longLineAni2'], 'hide');
            classControl('query', '.shortLine', btnForMobile, '', ['shortLineAni2'], 'hide');
        }, 900)

    } else {

        classControl('tag', 'main', '', ['blurMain'], '', '');
        classControl('query', '.longLine', btnForMobile, ['longLineAni'], ['longLineAni2'], 'hide');
        classControl('query', '.shortLine', btnForMobile, ['shortLineAni'], ['shortLineAni2'], 'hide');

        setTimeout(() => {
            classControl('query', '.longLine', btnForMobile, '', ['longLineAni', 'longLineAni2'], 'show');
            classControl('query', '.shortLine', btnForMobile, '', ['shortLineAni', 'shortLineAni2'], 'show');
        }, 900)
    }
}

function createNavBtn() {
    let nav = document.getElementsByTagName('nav')[0];
    createElement('div', nav, '', '', '', ['logo'], '', '', '');
    let div = createElement('div', nav, 'btnForMobile', '', ['click', btnFunc], '', '', '', '');

    createElement('div', div, '', '', '', ['longLine'], '', '', '')
    createElement('div', div, '', '', '', ['middleLine'], '', '', '')
    createElement('div', div, '', '', '', ['shortLine'], '', '', '')
}

function createElement(type, parent, id, attributeArr,
    eventListenerArr, classArr, action, context, makeh3case) {

    let container = document.createElement(type);
    let [href, path] = attributeArr;

    if (context !== '') {
        container.textContent = context;
    }
    if (id !== '') {
        container.id = id;
    }
    if (href !== undefined && path !== undefined) {
        container.setAttribute(href, path)
    }
    while (classArr.length > 0 && classArr !== '') {
        container.classList.add(classArr.shift())
    }

    if (eventListenerArr !== '') {
        let event = eventListenerArr.shift();

        while (eventListenerArr.length > 0) {
            container.addEventListener(event, eventListenerArr[0]);
            eventListenerArr.shift();
        }
    }

    if (action == 'push') {
        parent.push(container)
    } else {
        parent.appendChild(container)
    }

    return container
}

function createNavBarMenu() {

    let nav = document.getElementsByTagName('nav')[0];
    let numbersArr = ['I.', 'II.', 'III.', 'IV.'];
    let achorNameArr = ['About', 'Projects', 'Certificate', 'Contact', 'Resume'];
    let divContainer = createElement('div', nav, '', '', '', ['navForMobileAni', 'navForMobile'], '', '', '')
    let arrayFromTags = [];
    for (let i = 0; i < 5; i++) {
        let tagsWithNames = document.createElement('div')
        createElement('h3', tagsWithNames, '', '', '', '', '', numbersArr[i], '');
        let anchorTag = createElement('a', tagsWithNames, '', '', ['click', anchorTagFun], '', 'append', achorNameArr[i])

        if (i == 0) {
            anchorTag.setAttribute('href', '#aboutMe');

        } else if (i == 1) {
            anchorTag.setAttribute('href', '#projects');

        } else if (i == 2) {
            anchorTag.setAttribute('href', '#certificate');

        } else if (i == 3) {
            anchorTag.setAttribute('href', '#getInTouch');

        } else if (i == 4) {
            anchorTag.setAttribute('href', '#projects');

        }



        if (achorNameArr[i] == 'Resume') {
            anchorTag.addEventListener('click', showResume);
        }
        tagsWithNames.classList.add('navBarLinks')
        arrayFromTags.push(tagsWithNames)
    }
    arrayFromTags.forEach(x => {
        divContainer.appendChild(x)
    })

}


let i = 0;
let hash = [];

function changeColor() {
    let containerClass = 'skills'
    let ul = document.getElementsByClassName(containerClass);
    hash = ['#8892b0', '#64ffda'];
    let change = Math.random().toFixed(0)
    ul[i].style.color = hash[change];
    i++;

    if (i > ul.length - 1) {
        i = 0;

    }
}
setInterval(changeColor, 1010)
const animateCSS = (element, animation, prefix = 'imgFrame') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, {
            once: true
        });
    });
animateCSS('.imgFrame', 'Ani').then((message) => {
    console.log('koi si ti');
    animateCSS('.imgFrame', 'Rev').then((message) => {
        console.log('koi');
    })
})

function frameAni() {
    let imgFrame = document.getElementsByClassName('imgFrame')[0];
    imgFrame.classList.add('imgFrameAni');
    imgFrame.addEventListener('animationend', () => {
        imgFrame.classList.remove('imgFrameAni');

    })
}
setInterval(frameAni, 1010)

function showResume() {
    let pdf = './img/AsenKrushkovCV2021.pdf';
    window.open(pdf)
}

function showBasic() {
    let pdf = './img/Basics.pdf';
    window.open(pdf);
}

function showFundamentals() {
    let pdf = './img/Fundamentals.pdf';
    window.open(pdf);
}

function goToGitHubJSAdvanced() {
    window.location.href = 'https://github.com/A-K-Developer/JS-Advanced.git'
}

function putLineAfterHeader() {
    let headers = Array.from(document.getElementsByClassName('header'));

    headers.forEach(x => {
        let div = x.querySelector('div');
        div.classList.add('lineAfterHeader')
    })
}
putLineAfterHeader();

let projects = document.getElementsByClassName('projects');
projects[0].addEventListener('click', createFirstProject)
projects[1].addEventListener('click', createSecondProject)
projects[2].addEventListener('click', createThirthProject);

let main = document.getElementById('contentForProject');
let lineClass = document.getElementsByClassName('lineUnder')[0];
let left = lineClass.querySelector('.left');
let right = lineClass.querySelector('.right');
let middle = lineClass.querySelector('.middle');
let video = main.querySelectorAll('.video');


function createFirstProject() {
    projects[0].style.color = '#64ffda'
    projects[1].style.color = '#8892b0'
    projects[2].style.color = '#8892b0'

    left.style.width = '0%';
    middle.style.width = '30%'
    right.style.width = '70%';

    let div = main.querySelector('div');
    let video = main.querySelector('video')

    if (div) {
        main.removeChild(div);
        main.removeChild(video);

    }
    let arr = ['Navigation App for Køge', '', 'Only Mobile Version Website', 'Everything is coded by me', '100% Vanila Javascript', '', '', '']
    //createBtn(main)
    projectTemplate(arr, main)
    createVideo(main, './img/KogeMap.mp4')
    let icon = main.querySelector('.iconForProject');
    icon.addEventListener('click', () => {
        window.location.href = 'https://a-k-developer.github.io/KogeMap/'
    })
}
const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
}

function createSecondProject() {
    projects[0].style.color = '#8892b0'
    projects[1].style.color = '#64ffda'
    projects[2].style.color = '#8892b0'

    left.style.width = '30.33%';
    middle.style.width = '36.33%'
    right.style.width = '34.33%';

    let div = main.querySelector('div');
    let video = main.querySelector('video')

    if (div) {

        main.removeChild(div);
        main.removeChild(video)
    }
    let arr = ['Restaurant website', '', 'Web and Mobile version', 'Everything is coded by me', '100% Vanila Javascript', '100% Vanila CSS ', 'Menu for Restaurant;', 'Design is not my work!']
    //createBtn(main)
    projectTemplate(arr, main)
    createVideo(main, './img/DistrictTonkinMobile.mp4')

    let icon = main.querySelector('.iconForProject');
    icon.addEventListener('click', () => {
        window.location.href = 'https://a-k-developer.github.io/District-Tonkin/'
    })

}

function createThirthProject() {
    projects[0].style.color = '#8892b0'
    projects[1].style.color = '#8892b0'
    projects[2].style.color = '#64ffda'
    left.style.width = '67%';
    middle.style.width = '33%'
    right.style.width = '0';

    let div = main.querySelector('div');
    let video = main.querySelector('video')

    if (div) {

        main.removeChild(video)
        main.removeChild(div);
    }
    let arr = ['Guide for internation App', '', 'Mobile Version Only', 'Everything is coded by me', 'Vanilla JS - CSS', 'I used Firefox to storage data', 'I cover all CRUD operation in this project', 'Login Register Logout system', 'Only using page.js and lit-html', 'Design is not my work!']

    projectTemplate(arr, main)
    createVideo(main, './img/Survival-guideVideo.mp4')
    //createBtn(main);
    let icon = main.querySelector('.iconForProject');
    icon.addEventListener('click', () => {
        window.location.href = ' https://a-k-developer.github.io/Survival-Guide/'
    })

}



function createVideo(container, videopath) {
    let video = document.createElement('video');
    video.setAttribute('controls', "")

    let source = document.createElement('source')

    source.setAttribute('src', videopath);
    source.setAttribute('type', 'video/mp4');
    source.setAttribute('muted', "muted")
    source.setAttribute('autoplay', "")

    video.classList.add('video')

    video.appendChild(source)
    container.appendChild(video)

}


function projectTemplate(arr, main) {
    let container = createElement('div', main, '', '', '', ['projectContainer'], '', '', '')
    createElement('h3', container, '', '', '', '', '', arr.shift(), '');
    createElement('img', container, '', ['src', './img/share.png'], '', ['iconForProject'], '', '', '');
    createElement('div', container, '', '', '', ['scrollDownBaby'], '', '', '');
    let ol = createElement('ol', container, '', '', '', '', '', '', '');
    arr.forEach(x => {
        if (x !== '') {
            createElement('li', ol, '', '', '', '', '', x, '');
        }
    })
}

function pdfListener(arg, arg1, arg2) {
    document.getElementById(arg).addEventListener('click', showBasic)
    document.getElementById(arg1).addEventListener('click', showFundamentals)
    document.getElementById(arg2).addEventListener('click', goToGitHubJSAdvanced)

}
createFirstProject()

function anchorTagFun() {
    let mainTag = document.getElementsByTagName('main')[0]
    mainTag.classList.remove('blurMain')
    btnFunc('nav')
}

function scrollNav() {
    const body = document.body;
    const header = body.querySelector("nav");
    const main = document.querySelector("main");
    const headerHeight = document.querySelector("nav").offsetHeight;

    main.style.top = headerHeight + "px";
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;
        if (currentScroll - lastScroll > 0) {
            header.classList.add("navHideScroll");
            header.classList.remove("boxForNav");
            header.classList.remove("navShowScroll");
        } else {
            // scrolled up -- header show
            header.classList.add("navShowScroll");
            header.classList.add("boxForNav");
            header.classList.remove("navHideScroll");

        }
        lastScroll = currentScroll;
        console.log(lastScroll);
    })
}
scrollNav()


if (screen.width > 700) {
    createNavBarMenu()
    let btnForMobile = classControl('id', 'btnForMobile', '', '', '', '')
    let navBarLink = Array.from(document.getElementsByClassName('navBarLinks'));
    navBarLink.forEach(x => {
        if (x.textContent == 'Resume') {
            x.classList.remove('btn')
            x.classList.add('btnForWeb')
            x.classList.add('btnForWebHover')
            x.addEventListener('mouseenter', (t) => {
                t.currentTarget.classList.remove('btnForWeb')
                t.currentTarget.classList.add('btnForWebHover')
                t.currentTarget.classList.add('backGroundResume');
            })
            x.addEventListener('mouseleave', (t) => {
                t.currentTarget.classList.add('btnForWeb')
                t.currentTarget.classList.remove('btnForWebHover')
                t.currentTarget.classList.remove('backGroundResume');
            })
        } else {
            x.addEventListener('mouseenter', (t) => {
                t.currentTarget.classList.add('navBarLinksHover')
            })
            x.addEventListener('mouseleave', (t) => {
                t.currentTarget.classList.remove('navBarLinksHover')
            })
        }
    })
    btnForMobile.remove()


} else {

}
let socialContainer = Array.from(document.getElementById('socialNetworks').children);

socialContainer.forEach(x => {
    x.addEventListener('mouseover', (e) => {
        let className = e.currentTarget.classList;
        if (className == 'github') {
            e.currentTarget.classList.add('githubHover')
            e.currentTarget.addEventListener('click', () => {
                window.open('https://github.com/A-K-Developer?tab=repositories')
            })
        } else if (className == 'facebook') {
            e.currentTarget.classList.add('facebookHover')
            e.currentTarget.addEventListener('click', () => {
                window.open('https://www.facebook.com/asen.krushkov.3')
            })
        } else if (className == 'twiter') {
            e.currentTarget.addEventListener('click', () => {
                window.open()
            })
            e.currentTarget.classList.add('twiterHover')
        } else if (className == 'linkedIn') {
            e.currentTarget.addEventListener('click', () => {
                window.open('https://www.linkedin.com/in/asen-krushkov-261977229/')
            })
            e.currentTarget.classList.add('linkedInHover')
        } else if (className == 'insta') {
            e.currentTarget.classList.add('instaHover')
            e.currentTarget.addEventListener('click', () => {
                window.open('https://www.instagram.com/krushkow1312/')
            })
        } else {
            e.currentTarget.classList.add('lineColor');
        }
    })
    x.addEventListener('mouseleave', (e) => {
        let className = e.currentTarget.classList;
        console.log(className);
        if (className[0] == 'github') {
            e.currentTarget.classList.remove('githubHover')
            console.log('here');
        } else if (className[0] == 'facebook') {
            e.currentTarget.classList.remove('facebookHover');

        } else if (className[0] == 'twiter') {
            e.currentTarget.classList.remove('twiterHover');

        } else if (className[0] == 'linkedIn') {
            e.currentTarget.classList.remove('linkedInHover');

        } else if (className[0] == 'insta') {
            e.currentTarget.classList.remove('instaHover');

        } else {
            e.currentTarget.classList.remove('lineColor');
        }
    })
})

let email = document.getElementById('emailLine');
email.addEventListener('click', () => {
    email.classList.add('emailColor')

})

let body = document.getElementsByTagName('body')[0];
let canvas = document.createElement('div');
canvas.id = 'canvasForLogo'





body.appendChild(canvas)

let intervalID
let intervalIDK= setInterval(writeLogoK,200);


startWrite()
setTimeout(function () {
    stopWrite();
}, 11000);

function stopWrite() {
    clearInterval(intervalID)
    clearInterval(intervalIDK);
}

let stop = true
function writeLogoK() {
    if(stop){

   
    let point = document.createElement('div');

    point.classList.add('pointK');
    canvas.appendChild(point)
    point.classList.add('actionOneK');
    point.addEventListener('animationend', () => {
        point.classList.remove('actionOneK')
        point.classList.add('actionTwoK');

        point.addEventListener('animationend', () => {
            point.classList.remove('actionTwoK');
            point.classList.add('actionThreeK');

            point.addEventListener('animationend', () => {
                point.classList.remove('actionThreeK');
                point.classList.add('actionFourK');

                point.addEventListener('animationend', () => {
                    point.classList.remove('actionFourK');
                    point.classList.add('actionFiveK');

                    point.addEventListener('animationend', () => {
                        point.classList.remove('actionFiveK');
                        point.classList.add('actionSixK');

                        point.addEventListener('animationend', () => {
                            point.classList.remove('actionSixK');
                            point.classList.add('actionSevenK');

                            point.addEventListener('animationend', () => {
                                point.classList.remove('actionSevenK');
                                point.classList.add('actionEightK');

                                point.addEventListener('animationend', () => {
                                    point.classList.remove('actionEightK');
                                    point.classList.add('actionNineK');

                                    point.addEventListener('animationend', () => {
                                        point.classList.remove('actionNineK');
                                        point.classList.add('actionTenK');

                                        point.addEventListener('animationend', () => {
                                            point.classList.remove('actionTenK');
                                            point.classList.add('actionElevenK');
                                            point.addEventListener('animationend', () => {

                                                canvas.removeChild(point)
                                                clearInterval(intervalIDK);
                                                
                                                setTimeout(function () {
                                                    clearInterval(intervalIDK);
                                                    stop = true;
                                                }, 2000);

                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}
}

function writeLogo() {
    let point = document.createElement('div');
    point.classList.add('point');
    canvas.appendChild(point)
    point.classList.add('actionOne');
    point.addEventListener('animationend', () => {
        point.classList.remove('actionOne')
        point.classList.add('actionTwo');

        point.addEventListener('animationend', () => {
            point.classList.remove('actionTwo');
            point.classList.add('actionThree');

            point.addEventListener('animationend', () => {
                point.classList.remove('actionThree');
                point.classList.add('actionFour');

                point.addEventListener('animationend', () => {
                    point.classList.remove('actionFour');
                    point.classList.add('actionFive');

                    point.addEventListener('animationend', () => {
                        point.classList.remove('actionFive');
                        point.classList.add('actionSix');

                        point.addEventListener('animationend', () => {
                            point.classList.remove('actionSix');
                            point.classList.add('actionSeven');

                            point.addEventListener('animationend', () => {
                                point.classList.remove('actionSeven');
                                point.classList.add('actionEight');

                                point.addEventListener('animationend', () => {
                                    point.classList.remove('actionEight');
                                    point.classList.add('actionNine');

                                    point.addEventListener('animationend', () => {
                                        point.classList.remove('actionNine');
                                        point.classList.add('actionTen');

                                        point.addEventListener('animationend', () => {
                                            canvas.removeChild(point)
                                            stopWrite();

                                           

                                            setTimeout(function () {
                                                stopWrite();
                                                clearInterval(intervalIDK);
                                            }, 5000);
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

}
function startKlogo(){
    
}
function startWrite() {
    intervalID = setInterval(writeLogo, 200)
    //
    setTimeout(function () {
        console.log('stop ME');
        return
    }, 15000);

}