

/*

let timer = setInterval(function() {
    if (animation complete){
        clearInterval(timer);
    }else{
        increase style.left by 2px;
    }
  }, 20)
*/
let body = document.getElementsByTagName('body')[0];
let canvas = document.createElement('div');
canvas.id = 'canvasForLogo'
body.appendChild(canvas)

let intervalID
//let intervalIDK= setInterval(writeLogoK,200);

startWrite()

setTimeout(function () {
    stopWrite();
}, 10000);

let stop = true

let eventListener = (func)=> point.createEventLister('animatend', func);

function writeLogoK() {
    let point = document.createElement('div');
    point.classList.add('pointK');
    canvas.appendChild(point)
    animateMyCSS(point,'OneK','action');
    point.addEventListener('animationend', () => {
        animateMyCSS(point,'TwoK','action');
        point.addEventListener('animationend', () => {
            animateMyCSS(point,'ThreeK','action');
            point.addEventListener('animationend', () => {
                animateMyCSS(point,'FourK','action');
                point.addEventListener('animationend', () => {
                    animateMyCSS(point,'FiveK','action');
                    point.addEventListener('animationend', () => {
                        animateMyCSS(point,'SixK','action');
                        point.addEventListener('animationend', () => {
                            animateMyCSS(point,'SevenK','action')
                            point.addEventListener('animationend', () => {
                                animateMyCSS(point,'EightK','action')
                                point.addEventListener('animationend', () => {
                                    animateMyCSS(point,'NineK','action')
                                    point.addEventListener('animationend', () => {
                                        animateMyCSS(point,'TenK','action')
                                        point.addEventListener('animationend', () => {
                                            animateMyCSS(point,'ElevenK','action');
                                            point.addEventListener('animationend', () => {
                                                animateMyCSS(point,'TwelveK','action')
                                                point.addEventListener('animationend', () => {
                                                    animateMyCSS(point,'ThirthteenK','action');
                                                    point.addEventListener('animationend', () => {   
                                                           canvas.removeChild(point);
                                                            console.log('delete')
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
        })
    })
}


                      

function writeLogo() {
    let point = document.createElement('div');
    point.classList.add('point');
    canvas.appendChild(point)

    let arrClass = ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten'];
   for(let i = 0 ; arrClass.length; i++){
    if(i !== 0){

        animateMyCSS(point,arrClass[i],'action',arrClass[-1])
    }else{
        animateMyCSS(point,arrClass[i],'action')
        
    }

   }
        /* 
        animateMyCSS(point,'Two','action');
        point.addEventListener('animationend', () => {
            animateMyCSS(point,'Three','action');
            point.addEventListener('animationend', () => {  
                animateMyCSS(point,'Four','action');
                point.addEventListener('animationend', () => {   
                    animateMyCSS(point,'Five','action');
                    point.addEventListener('animationend', () => {  
                        animateMyCSS(point,'Six','action');
                        point.addEventListener('animationend', () => {
                            animateMyCSS(point,'Seven','action');
                            point.addEventListener('animationend', () => {
                                animateMyCSS(point,'Eight','action')
                                point.addEventListener('animationend', () => {    
                                    animateMyCSS(point,'Nine','action');
                                    point.addEventListener('animationend', () => {
                                        animateMyCSS(point,'Ten','action');
                                        point.addEventListener('animationend', () => {
                                            point.classList.remove('actionTen');
                                            point.classList.remove('point');
                                            stopWrite();
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
        */

}

function startWrite() {
    intervalID = setInterval(writeLogo, 200)
}

function stopWrite() {
    clearInterval(intervalID)
    //clearInterval(intervalIDK);
}
function animateMyCSS(element,animation,prefix,oldClass){
    new Promise((resolve,reject) => {
        let animationName = `${prefix}${animation}`;

        element.classList.add(`${prefix}animated`, animationName);
        if(oldClass){

            element.classList.remove(`${prefix}${oldClass}`)
        }

        resolve('Animation ended')
        element.addEventListener('animationend',handleAnimationEnd,{once:true});
        console.log(element);
        function handleAnimationEnd(event) {
            event.stopPropagation();
            element.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }
        

    })
}


function animateCircle(){
    
    var circle = canvas.querySelector('div');
    
   
    if(circle !== null){

        
        circle.keyframes = [{
            top:'90%',
            left:'50%',
            delay: '0s',
        }, {
            top:'80%',
            left:'50%',
        },{
            top:'80%',
            left:'70%',
        },{
            top:'90%',
            left:'80%',
        },{
            top:'90%',
            left:'70%',
        },{
            top:'80%',
            left:'62.5%',
        },{
            top:'75%',
            left:'62.5%',
        },{
            top:'60%',
            left:'70%',
        },{
            top:'60%',
            left:'80%',
        },{
            top:'75%',
            left:'70%',
        },{
            top:'75%',
            left:'50%',
        },{
            top:'60%',
            left:'55%',
        },{
            top:'90%',
            left:'55%',
        },{
            top:'90%',
            left:'50%',
            
        }];
        
        circle.animProps = {
            
            duration:1800,
            easing: "ease-out",
            iterations: Infinity
        }
        var animationPlayer = circle.animate(circle.keyframes, circle.animProps);
        animationPlayer.addEventListener('finish ',()=>{
            circle.remove();
            console.log('animationEnd');
            
        })
    }
        
}


    setInterval(animateCircle, 2000)