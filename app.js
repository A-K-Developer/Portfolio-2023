
pdfListener('basicPdf','fundamentalsPdf','advancedPdf')
createNavBtn()

function classControl(type,typeName,parent,addClasses,removeClass,changeStyle){
    let element;
    if(type == 'id'){
        element = document.getElementById(typeName);
    }else if( type == 'query'){
        element = parent.querySelector(typeName);
        element = parent.querySelector(typeName);
    }else if( type == 'class'){
        element = document.getElementsByClassName(typeName)[0];
    }else if( type == 'tag'){
        element = document.getElementsByTagName(typeName)[0];
    }
    
    if(addClasses){
        for(let i = 0 ; i < addClasses.length ; i++){
        
            element.classList.add(addClasses.shift());
        }
    }else if(removeClass){
        for(let z = 0 ; z < removeClass.length; z++){
            let classes = removeClass.shift()
            element.classList.remove(classes);
    
        }
    }

    if(changeStyle == 'hide'){
        element.style.display = 'block';
    }else if(changeStyle == 'show'){
        element.style.display = 'none'
    }
   
    return element
}
function btnFunc(arg) {
    let btnForMobile = classControl('id','btnForMobile','','','','')
    let longLine = classControl('query','.longLine',btnForMobile,'','','');
    let showNav = classControl('class','navForMobile','','','','')
    let nav = classControl('tag','nav','','','');
    if (showNav == null) {
        createNavBarMenu();
        classControl('tag','nav','',['btnFixed'],'','');
    }

    if (longLine.style.display == 'none') {
        classControl('tag','main','','',['blurMain'],'');
        classControl('query','.longLine',btnForMobile,['longLineAni2'],['longLineAni'],'hide');
        classControl('query','.shortLine',btnForMobile,['shortLineAni2'],['shortLineAni'],'hide');
        classControl('class','navForMobile','',['navForMobileAniBack'],['navForMobileAni'],'')
        setTimeout(() => {
            nav.removeChild(showNav)
            classControl('query','.longLine',btnForMobile,'',['longLineAni2'],'hide');
            classControl('query','.shortLine',btnForMobile,'',['shortLineAni2'],'hide');
        }, 900)
       
    } else { 
        
        classControl('tag','main','',['blurMain'],'','');
        classControl('query','.longLine',btnForMobile,['longLineAni'],['longLineAni2'],'hide');
        classControl('query','.shortLine',btnForMobile,['shortLineAni'],['shortLineAni2'],'hide');
        
        setTimeout(() => {
            classControl('query','.longLine',btnForMobile,'',['longLineAni','longLineAni2'],'show');
            classControl('query','.shortLine',btnForMobile,'',['shortLineAni','shortLineAni2'],'show');
        }, 900)
    }
}
function createNavBtn(){
    let nav = document.getElementsByTagName('nav')[0];
    createElement('div',nav,'','','',['logo'],'','','');
    let div = createElement('div',nav,'btnForMobile','',['click',btnFunc],'','','','');

    createElement('div', div,'','','',['longLine'],'','','')
    createElement('div', div,'','','',['middleLine'],'','','')
    createElement('div', div,'','','',['shortLine'],'','','')
}
function createElement(type,parent,id,attributeArr,
    eventListenerArr,classArr,action,context,makeh3case){
    let [href, path] = attributeArr;
    let container = document.createElement(type);
    container.textContent = context;
  
    container.setAttribute(href,path)
    container.id = id;
    
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
        tagsWithNames.classList.add('navBarLinks')
        arrayFromTags.push(tagsWithNames)
    }
    arrayFromTags.forEach(x => {
        divContainer.appendChild(x)
    })

}


function changeColor() {
    let i = 0;
    let hash = [];
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
        let div = x.querySelector('div');
        div.classList.add('lineAfterHeader')
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
    let video = document.createElement('video');
    video.setAttribute('controls', "")

    let source = document.createElement('source')

    source.setAttribute('src',videopath);
    source.setAttribute('type','video/mp4');
    source.setAttribute('muted', "muted")
    source.setAttribute('autoplay', "")
    
    video.classList.add('video')
    
    video.appendChild(source)
    container.appendChild(video)
    
}


function projectTemplate(arr,main){
    let container = createElement('div',main,'','','',['projectContainer'],'','','')
    createElement('h3',container,'','','','','',arr.shift(),'');
    createElement('img',container,'',['src','./img/share.png'],'',['iconForProject'],'','','');
    createElement('div',container,'','','',['scrollDownBaby'],'','','');
    let ol = createElement('ol',container,'','','','','','','');
    arr.forEach(x => {
        if(x !== ''){
            createElement('li',ol,'','','','','',x,'');
        }
    })
}

function pdfListener(arg,arg1,arg2){
    document.getElementById(arg).addEventListener('click', showBasic)
    document.getElementById(arg1).addEventListener('click',showFundamentals)
    document.getElementById(arg2).addEventListener('click',goToGitHubJSAdvanced )
   
}
createFirstProject()

function anchorTagFun(){
    let mainTag = document.getElementsByTagName('main')[0]
    mainTag.classList.remove('blurMain')
    btnFunc('nav')
}