

window.addEventListener('load', function(){
    let loadScreen = document.getElementById('loading');
    loadScreen.style.opacity = '0';
    setTimeout(removeLoadScreen, 500);
})

function removeLoadScreen(){
    let loadScreen = document.getElementById('loading');
    document.body.removeChild(loadScreen);
}

//pages animation--------------------------

let pg1 = document.getElementById('page1');
let pg2 = document.getElementById('page2');
let pg3 = document.getElementById('page3');
let pg1Btn = document.getElementById('pg1');
let pg2Btn = document.getElementById('pg2');
let pg3Btn = document.getElementById('pg3');


    

function page1(){
    pg1.style.transform = 'rotateY(360deg)';
    pg2.style.transform = 'rotateY(-360deg)';
    pg3.style.transform = 'rotateY(-360deg)';
    pg1.style.transition = '.5s';
    pg1.style.opacity = '1';
    pg2.style.opacity = '0';
    pg3.style.opacity = '0';
    pg1Btn.style.width = '170px';
    pg2Btn.style.width = '200px';
    pg3Btn.style.width = '200px';
    if(innerWidth <= 600){
        closeNav();
    }
}
function page2(){
    pg2.style.transform = 'rotateY(360deg)';
    pg1.style.transform = 'rotateY(-360deg)';
    pg3.style.transform = 'rotateY(-360deg)';
    pg2.style.transition = '.5s';
    pg2.style.opacity = '1';
    pg1.style.opacity = '0';
    pg3.style.opacity = '0';
    pg1Btn.style.width = '200px';
    pg2Btn.style.width = '170px';
    pg3Btn.style.width = '200px';
    if(innerWidth <= 600){
        closeNav();
    }
    
}
function page3(){
    pg3.style.transform = 'rotateY(360deg)';
    pg1.style.transform = 'rotateY(-360deg)';
    pg2.style.transform = 'rotateY(-360deg)';
    pg3.style.transition = '.5s';
    pg3.style.opacity = '1';
    pg2.style.opacity = '0';
    pg1.style.opacity = '0';
    pg1Btn.style.width = '200px';
    pg2Btn.style.width = '200px';
    pg3Btn.style.width = '170px';
    if(innerWidth <= 600){
        closeNav();
    }
}






//nav-------------------------------
let pages = document.getElementById('pgBtnWrap')
let nav = document.getElementById('nav');
let pgWrapper = document.getElementById('page1');
let pgWrapper2 = document.getElementById('page2');
let pgWrapper3 = document.getElementById('page3');
let btnWrap = document.querySelector('.btnWrap');
let title = document.querySelector('.tWrap');

function menu(){
    if(open === true){
        closeNav();
        movePageRight()
    }else{
        openNav();
        movePageLeft();
    }
}

function movePageLeft(){
    if(window.innerWidth < 800 && window.innerWidth > 600){
        title.style.left = '150px';
        pgWrapper.style.left = '300px';
        pgWrapper2.style.left = '300px';
        pgWrapper3.style.left = '300px';
        btnWrap.style.left = '300px';
        open = true;
    }
    
}

function movePageRight(){
    if(window.innerWidth < 800 && window.innerWidth > 600){
        title.style.left = '0';
        title.style.transitionDelay = '500ms';
        pgWrapper.style.left = '0';
        pgWrapper.style.transitionDelay = '500ms';
        pgWrapper2.style.left = '0';
        pgWrapper2.style.transitionDelay = '500ms';
        pgWrapper3.style.left = '0';
        pgWrapper3.style.transitionDelay = '500ms';
        btnWrap.style.transitionDelay = '500ms';
        btnWrap.style.left = '0';
        open = false;
    }
    
}


function openNav(){
   
    if(window.innerWidth > 600 && j === 0){
        pages.style.display = 'block';
        nav.style.width = '300px';
        pages.style.opacity = '0';
        setTimeout(addNavBtn, 100);
        open = true;
        j++;
    }
   else if(window.innerWidth > 600 && j >= 1){
        pages.style.display = 'block';
        nav.style.width = '300px';
        pages.style.opacity = '0';
        setTimeout(addNavBtn, 400);
        open = true;
            
    }
    if(window.innerWidth <= 600 && j === 0){
        pages.style.display = 'block';
        pages.style.opacity = '0';
        nav.style.width = '100%';
        setTimeout(addNavBtn, 100)
        open = true;
        j++;
    }
    else if(window.innerWidth <= 600 && j >= 1){
        pages.style.display = 'block';
        nav.style.width = '100%';
        pages.style.opacity = '0';
        setTimeout(addNavBtn, 400);
        open = true;
       
        
    }
    
      
    
}
let j = 0;

   




function closeNav(){
    pages.style.opacity = '0';
    pages.style.transitionDelay = '0ms';
    nav.style.transitionDelay = '300ms';
    nav.style.width = '50px'
    open = false;
    setTimeout(removeNavBtn, 1000);
    
}
function removeNavBtn(){
    pages.style.display = 'none';
}
function addNavBtn(){
    pages.style.opacity = '1';
}

//activate all pages------------------------------
function getResults(){
    foodRandomizer();
    activityRandomizer();
    projectRandomizer();
}

//food---------------------------------

function foodRandomizer(){
    let foodSlot = document.getElementById('food');
    let foodSlot2 = document.getElementById('food2');
    let foodSlot3 = document.getElementById('food3');

    //breakfast
    const breakChoice = [
        '2 marmite on toast',
        'bowl of shredies',
        '2 jam on toast',
        'ham sandwich and apple',
        'banana and crackers',
        'rice pudding'
    ];


    //dinner
    const dinnerChoice1 = [
        'chips',
        'mash & yorkshire puds',
        'boiled potatoes',
        'jacket potato'
        
    ];
    const dinnerChoice2 = [
        'beef',
        'sausage',
        'chicken',
        'fish',
        'tin-tuna'
    ];
    const dinnerChoice3 = [
        'beans',
        'peas & carrots & gravy',
        'curry-sauce',
        'mushy-peas & gravy',
        'sweetcorn',

    ];

    //tea
    
    const teaChoice = [
        'ham',
        'pork',
        'chicken',
        'lamb',
        'beef mince',
        'gammon',
        'turkey'
    ];
    const teaChoice2 = [
        'pasta',
        'rice',
        'tacos',
        'wraps',
        'sandwich'
    ];

    let randomItem = dinnerChoice1[Math.floor(Math.random()*dinnerChoice1.length)];
    let randomItem2 = dinnerChoice2[Math.floor(Math.random()*dinnerChoice2.length)];
    let randomItem3 = dinnerChoice3[Math.floor(Math.random()*dinnerChoice3.length)];

    let randomBreak = breakChoice[Math.floor(Math.random()*breakChoice.length)];

    let randomTea = teaChoice[Math.floor(Math.random()*teaChoice.length)];
    let randomTea2 = teaChoice2[Math.floor(Math.random()*teaChoice2.length)];

    
    

    
    
    foodSlot.innerHTML = randomBreak;
    foodSlot2.innerHTML = randomItem + ' ' + randomItem2 + ' ' + randomItem3;
    foodSlot3.innerHTML = randomTea + ' ' + randomTea2;
};
//activity---------------------------------
function activityRandomizer(){
    let activity = document.getElementById('act');
    let activity2 = document.getElementById('act2');
    let activity3 = document.getElementById('act3');
    let dateSlot = document.querySelector('.date');
    let dateSlot2 = document.querySelector('.date2');
    let dateSlot3 = document.querySelector('.date3');


   

    const workoutList = [
        '30 mins chest and tricep',
        '30 mins back and bicep',
        '20 abs',
        'day off',
        '30 mins chest and tricep',
        '30 mins back and bicep',
        '20 abs'
    ];
    const stretchList = [
        '20 mins legs stretch',
        '20 mins arms stretch',
        '40 mins chest and back stretch',
        '1 hour full body stretch',
        '20 mins legs stretch',
        '20 mins arms stretch',
        '40 mins chest and back stretch',

    ];
    const bikeList = [
        'bike ride west kirby',
        'bike ride upton',
        'bike ride birkenhead',
        'bike ride wallasey',
        'bike ride port sunlight',
        'bike ride barnston',
        'day off'

    ];

    let day = new Date();
    let dayOfWeek = day.getDay();
    let monday = [workoutList[0], stretchList[0], bikeList[0], "monday's" ];
    let tuesday = [workoutList[1], stretchList[1], bikeList[1], "tuesday's"];
    let wednesday = [workoutList[2], stretchList[2], bikeList[2], "wednesday's"];
    let thursday = [workoutList[3], stretchList[3], bikeList[3], "thursday's"];
    let friday = [workoutList[4], stretchList[4], bikeList[4], "friday's"];
    let saturday = [workoutList[5], stretchList[5], bikeList[5], "saturday's"];
    let sunday = [workoutList[6], stretchList[6], bikeList[6], "sunday's"];


    if(dayOfWeek === 0){
         wo = sunday;
    }
    else if(dayOfWeek === 1){
        wo = monday;
    }
    else if(dayOfWeek === 2){
        wo = tuesday;
    }
    else if(dayOfWeek === 3){
        wo = wednesday;
    }
    else if(dayOfWeek === 4){
        wo = thursday;
    }
    else if(dayOfWeek === 5){
        wo = friday;
    }
    else if(dayOfWeek === 6){
        wo = saturday;
    }
    activity.innerHTML = wo[0];
    activity2.innerHTML = wo[1];
    activity3.innerHTML = wo[2];
    dateSlot.innerHTML =  wo[3] + ' ';
    dateSlot2.innerHTML =  wo[3] + ' ';
    dateSlot3.innerHTML =  wo[3] + ' ';
    
    
}

    





//project --------------------------------
function projectRandomizer(){
    let project = document.getElementById('pro');
    let project2 = document.getElementById('pro2');
    let project3 = document.getElementById('pro3');


    const projectList = [
        "Array Cardio Day 1",
        "Flex Panel Gallery",
        "Type Ahead",
        "Array Cardio Day 2 ",
        "Fun with HTML5 Canvas",
        "Dev Tools Domination",
        "Hold Shift and Check Checkboxes",
        "Custom Video Player",
        "Key Sequence Detection",
        "Slide in on Scroll",
        "JavaScript References VS Copying",
        "LocalStorage",
        "Mouse Move Shadow",
        "Sort Without Articles",
        "Adding Up Times with Reduce",
        "Webcam Fun",
        "Speech Detection",
        "Geolocation",
        "Follow Along Link Highlighter",
        "Speech Synthesis",
        "Sticky Nav",
        "Event Capture",
        "Stripe Follow Along Nav",
        "Click and Drag",
        "Video Speed Controller",
        "Countdown Timer",
        "Whack A Mole"

    ];
    
    
    const projectList2 = [
        "portfolio",
        "beautiful wirral website",
        "giphy api web app",
        "web dev learning host webiste"
      
    ];

    const projectList3 = [
        "freecodecamp",
        "udemy javascript course",
        "youtube javascript course",
        "youtube grid",
        "flexbox zombies",
        "sololearn",
        "grid garden",
        "css animations",
        "codewars",
        "project odin"
    ];
    let randomPro = projectList[Math.floor(Math.random()*projectList.length)];
    let randomPro2 = projectList2[Math.floor(Math.random()*projectList2.length)];
    let randomPro3 = projectList3[Math.floor(Math.random()*projectList3.length)];
    project.innerHTML = randomPro;
    project2.innerHTML = '3-4 hours'+ ' ' + randomPro2;
    project3.innerHTML = '1 hour'+ ' ' +randomPro3;
}