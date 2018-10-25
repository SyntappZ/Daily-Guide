//pages animation--------------------------

let pg1 = document.getElementById('page1');
let pg2 = document.getElementById('page2');
let pg3 = document.getElementById('page3');



    

function page1(){
    pg1.style.transform = 'rotateY(360deg)';
    pg2.style.transform = 'rotateY(-360deg)';
    pg3.style.transform = 'rotateY(-360deg)';
    pg1.style.transition = '.5s';
    pg1.style.opacity = '1';
    pg2.style.opacity = '0';
    pg3.style.opacity = '0';
    finished = true;
}
function page2(){
    pg2.style.transform = 'rotateY(360deg)';
    pg1.style.transform = 'rotateY(-360deg)';
    pg3.style.transform = 'rotateY(-360deg)';
    pg2.style.transition = '.5s';
    pg2.style.opacity = '1';
    pg1.style.opacity = '0';
    pg3.style.opacity = '0';
    finished = true;
    
}
function page3(){
    pg3.style.transform = 'rotateY(360deg)';
    pg1.style.transform = 'rotateY(-360deg)';
    pg2.style.transform = 'rotateY(-360deg)';
    pg3.style.transition = '.5s';
    pg3.style.opacity = '1';
    pg2.style.opacity = '0';
    pg1.style.opacity = '0';
    
}





//nav-------------------------------
let pages = document.getElementById('pgBtnWrap')
let nav = document.getElementById('nav');
function menu(){
    if(open === true){
        closeNav();
    }else{
        openNav();

    }
}

function openNav(){
    pages.style.transitionDelay = '800ms';
    pages.style.opacity = '1';
    nav.style.width = '300px'
    open = true;
}
function closeNav(){
    pages.style.opacity = '0';
    pages.style.transitionDelay = '0ms';
    nav.style.transitionDelay = '500ms';
    nav.style.width = '50px'
    open = false;
}

//activate all pages------------------------------
function getResults(){
    foodRandomizer();
    
    // activityRandomizer();
    // projectRandomizer();
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
        'mash',
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
        'peas & carrots',
        'curry-sauce',
        'mushy-peas',
        'gravy'
    ];

    //tea
    const teaChoice = [
        'beans',
        'peas & carrots',
        'curry-sauce',
        'mushy-peas',
        'gravy'
    ];

    let randomItem = dinnerChoice1[Math.floor(Math.random()*dinnerChoice1.length)];
    let randomItem2 = dinnerChoice2[Math.floor(Math.random()*dinnerChoice2.length)];
    let randomItem3 = dinnerChoice3[Math.floor(Math.random()*dinnerChoice3.length)];

    let randomBreak = breakChoice[Math.floor(Math.random()*breakChoice.length)];

    
    

    
    
    foodSlot.innerHTML = randomBreak;
    foodSlot2.innerHTML = randomItem + ' ' + randomItem2 + ' ' + randomItem3;
}
//activity---------------------------------
function activityRandomizer(){
    let activity = document.getElementById('activity');

    const activityList = [
        '1 hour bike ride',
        '20 mins stretching',
        '30 mins weights',

    ];
    let randomAct = activityList[Math.floor(Math.random()*activityList.length)];
    activity.innerHTML = randomAct;
}
//project --------------------------------
function projectRandomizer(){
    let project = document.getElementById('project');

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
    let randomAct = projectList[Math.floor(Math.random()*projectList.length)];
    project.innerHTML = randomAct;
}