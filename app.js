
pdfListener('basicPdf','fundamentalsPdf','advancedPdf')
createNavBtn()

function btnFunc(arg) {
    let btnForMobile = document.getElementById('btnForMobile');
    let longLine = btnForMobile.querySelector('.longLine');
    let shortLine = btnForMobile.querySelector('.shortLine');
    let showNav = document.getElementsByClassName('navForMobile')[0];
    let nav = document.getElementsByTagName('nav')[0];
    let main = document.getElementsByTagName('main')[0];

    if (showNav == null) {
        createNavBarMenu();
        nav.classList.add('btnFixed')
    }
    if (longLine.style.display == 'none') {
        window.innerHeight = '844px'
        main.classList.remove('blurMain')
        longLine.classList.add('longLineAni2')
        shortLine.classList.add('shortLineAni2')
        longLine.style.display = 'block';
        shortLine.style.display = 'block'
        showNav.classList.add('navForMobileAniBack')

        console.log('close');
        console.log(showNav);
        showNav.classList.remove('navForMobileAni')
        setTimeout(() => {
            nav.removeChild(showNav)
        }, 900)

    } else {

        main.classList.add('blurMain')
        longLine.classList.remove('longLineAni2')
        shortLine.classList.remove('shortLineAni2')
        longLine.classList.add('longLineAni')
        shortLine.classList.add('shortLineAni');
        setTimeout(() => {
            longLine.style.display = 'none';
            shortLine.style.display = 'none';
            longLine.classList.remove('longLineAni')
            shortLine.classList.remove('shortLineAni')

        }, 900)
        if (showNav) {

            nav.append(showNav);
            showNav.classList.remove('navForMobileAniBack')
            showNav.classList.add('navForMobileAni')
            console.log(showNav);
        }
    }
}
function createNavBtn(){
    let div = document.createElement('div')
    div.id = 'btnForMobile';
    let longLine = document.createElement('div')
    let middleLine = document.createElement('div')
    let shortLine = document.createElement('div')
    let logo = document.createElement('div');
    let nav = document.getElementsByTagName('nav')[0];

    longLine.classList.add('longLine');
    shortLine.classList.add('shortLine');
    middleLine.classList.add('middleLine');
    logo.classList.add('logo')
   
    div.append(longLine)
    div.append(middleLine)
    div.append(shortLine)
    nav.appendChild(logo)
    nav.appendChild(div)
    div.addEventListener('click', btnFunc);
    div.addEventListener('onscroll', () =>{
        console.log('asdasdas');
    })

}
function createElement(type,parent,id,attributeArr,
    eventListenerArr,classArr,action,context,makeh3case){
    let href, path = attributeArr;
    let container = document.createElement(type);
        container.textContent = context;

    
    while(classArr.length > 0 && classArr !== ''){
        container.classList.add(classArr.shift())
    }
    if(eventListenerArr !== ''){

        let event = eventListenerArr.shift();
        while(eventListenerArr.length > 0){
            container.addEventListener(event,eventListenerArr[0]);
            eventListenerArr.shift();
        }
    }
    //divContainer.id = id;
    
    //divContainer.addEventListener(event,func);
    //divContainer.setAttribute(href,path);
    if(action == 'push'){
        parent.push(container)
    }else {
        parent.appendChild(container)

    }
    return container
}

function createNavBarMenu() {
    
    let nav = document.getElementsByTagName('nav')[0];
    let numbersArr = ['I.', 'II.', 'III.', 'IV.'];
    let achorNameArr = ['About', 'Projects', 'Certificate', 'Contact', 'Resume'];
    let divContainer = createElement('div',nav,'','','',['navForMobileAni','navForMobile'],'','','')
    let arrayFromTags = [];
    for (let i = 0; i < 5; i++) {

        let tagsWithNames = document.createElement('div')
        let anchorTag = createElement('a',tagsWithNames,'','',['click',anchorTagFun],'','append',achorNameArr[i])
        
        if(i == 0){
            anchorTag.setAttribute('href','#aboutMe');
            
        }else if(i == 1){
            anchorTag.setAttribute('href','#projects');
            
        }else if(i == 2){
            anchorTag.setAttribute('href','#certificate');
            
        }else if(i == 3){
            anchorTag.setAttribute('href','#getInTouch');
            
        }else if(i == 4){
            anchorTag.setAttribute('href','#projects');
            
        }
        createElement('h3',tagsWithNames,'','','','','',numbersArr[i],'');
       
        
        if(achorNameArr[i] == 'Resume'){
            anchorTag.addEventListener('click',showResume);
        }
       
        tagsWithNames.appendChild(anchorTag)
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


function showResume(){
        let pdf = './img/AsenKrushkovCV2021.pdf';
        window.open(pdf)
}
function showBasic(){
    let pdf = './img/Basics.pdf';
    window.open(pdf);
}
function showFundamentals(){
    let pdf = './img/Fundamentals.pdf';
    window.open(pdf);
}
function goToGitHubJSAdvanced(){
    window.location.href = 'https://github.com/A-K-Developer/JS-Advanced.git'
}
function putLineAfterHeader(){
    let headers = Array.from(document.getElementsByClassName('header'));
    
    headers.forEach(x =>{
        let h1 = x.querySelector('h1');
        let div = x.querySelector('div');
        div.classList.add('lineAfterHeader')
        let width = h1.style.width;
        console.log(width);
    })
}
putLineAfterHeader();

let projects = document.getElementsByClassName('projects');
    projects[0].addEventListener('click',createFirstProject)
    projects[1].addEventListener('click',createSecondProject)
    projects[2].addEventListener('click',createThirthProject);

let main = document.getElementById('contentForProject');
let lineClass = document.getElementsByClassName('lineUnder')[0];
let left = lineClass.querySelector('.left');
let right = lineClass.querySelector('.right');
let middle = lineClass.querySelector('.middle');
let video = main.querySelectorAll('.video');


function createFirstProject(){
    projects[0].style.color = '#64ffda'
    projects[1].style.color = '#8892b0'
    projects[2].style.color = '#8892b0'
    left.style.width = '0%';
    middle.style.width = '30%'
    right.style.width = '70%';

    let div = main.querySelector('div');
    let video = main.querySelector('video')
    
    if(div){
        main.removeChild(div);
        main.removeChild(video);
        
    }
    let arr= ['Navigation App for Køge','','Only Mobile Version Website','Everything is coded by me','100% Vanila Javascript','','','']
    //createBtn(main)
    projectTemplate(arr,main)
    createVideo(main,'./img/KogeMap.mp4')
    let icon = main.querySelector('.iconForProject');
    icon.addEventListener('click', ()=>{
        window.location.href = 'https://a-k-developer.github.io/KogeMap/'
    })
}
const scrollToDiv = (id) =>{
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
}
function createSecondProject(){
    projects[0].style.color = '#8892b0'
    projects[1].style.color = '#64ffda'
    projects[2].style.color = '#8892b0'
    
    left.style.width = '30.33%';
    middle.style.width= '36.33%'
    right.style.width = '34.33%';

    let div = main.querySelector('div');
    let video = main.querySelector('video')
    
    if(div){
        
        main.removeChild(div);
        main.removeChild(video)
    }
    let arr= ['Restaurant website','','Web and Mobile version','Everything is coded by me','100% Vanila Javascript','100% Vanila CSS ','Menu for Restaurant;','Design is not my work!']
    //createBtn(main)
    projectTemplate(arr,main)
    createVideo(main,'./img/DistrictTonkinMobile.mp4')
    
    let icon = main.querySelector('.iconForProject');
    icon.addEventListener('click', ()=>{
        window.location.href = 'https://a-k-developer.github.io/District-Tonkin/'
    })
    
}
function createThirthProject(){
    projects[0].style.color = '#8892b0'
    projects[1].style.color = '#8892b0'
    projects[2].style.color = '#64ffda'
    left.style.width = '67%';
    middle.style.width = '33%'
    right.style.width = '0';
    
    let div = main.querySelector('div');
    let video = main.querySelector('video')

    if(div){
        
        main.removeChild(video)
        main.removeChild(div);
    }
    let arr= ['Guide for internation App','','Mobile Version Only','Everything is coded by me','Vanilla JS - CSS','I used Firefox to storage data','I cover all CRUD operation in this project','Login Register Logout system','Only using page.js and lit-html','Design is not my work!']
    
    projectTemplate(arr,main)
    createVideo(main,'./img/Survival-guideVideo.mp4')
    //createBtn(main);
    let icon = main.querySelector('.iconForProject');
    icon.addEventListener('click', ()=>{
        window.location.href = ' https://a-k-developer.github.io/Survival-Guide/'
    })

}



function createVideo(container,videopath){
    let source = document.createElement('video');

    source.setAttribute('src',videopath);
    source.setAttribute('type','video/mp4');
    source.setAttribute('muted', "muted")
    source.setAttribute('autoplay', "")
    
    source.classList.add('video')
    
    container.appendChild(source)
    
}


function projectTemplate(arr,main){
    let container = document.createElement('div');
    let h3 = document.createElement('h3');
    let icon = document.createElement('img');
    let scrollDownBtn = document.createElement('div');
    
    icon.setAttribute('src','./img/share.png')
    container.classList.add('projectContainer')
    icon.classList.add('iconForProject')
    scrollDownBtn.classList.add('scrollDownBaby');
    
    h3.textContent = arr.shift();
    

    let ol = document.createElement('ol');
    arr.forEach(x => {
        if(x !== ''){

            let li = document.createElement('li');
            li.textContent = x;
            ol.append(li)
        }
    })

    container.append(h3)
    container.append(scrollDownBtn)
    container.append(icon)
    container.append(ol);
    main.append(container)
    
}

function pdfListener(arg,arg1,arg2){
    let basicPdf = document.getElementById(arg)
    let fundaPdf = document.getElementById(arg1);
    let advancedBtn = document.getElementById(arg2);
    basicPdf.addEventListener('click', showBasic)
    fundaPdf.addEventListener('click',showFundamentals)
    advancedBtn.addEventListener('click',goToGitHubJSAdvanced )
}
createFirstProject()

function anchorTagFun(){
    let mainTag = document.getElementsByTagName('main')[0]
    mainTag.classList.remove('blurMain')
    btnFunc('nav')
}