window.onload = function(){
    show(0);
}


function submitform(event){
    event.preventDefault();
    let name = document.getElementById("fname").value;

    //store player name
    sessionStorage.setItem("name",name);
    
    location.href = "quiz.html"
}


const nextQues = document.querySelector(".next-btn");
const optionList = document.querySelectorAll(".option");

let point = 0;
let question_count = 0;


//event listener
 nextQues.addEventListener("click", ques);


//next functions

 function ques(event){
    let selectedAnswer = document.querySelector("li.option.active").innerHTML;
   if(selectedAnswer == question[question_count].answer){
      
       point = point + 10;
       sessionStorage.setItem("points", point);
   }
   if(question_count == question.length - 1){
       sessionStorage.setItem("time", `${minutes} minute and ${seconds} second`)
       clearInterval(mytime);
    location.href = "final.html"
    return;
 }
    question_count++;
    show(question_count);
}

//showing question

 function show(count){
    let question1 = document.querySelector(".questions");
    question1.innerHTML = 
    `<h2>Q${question_count + 1}. ${question[count].question}</h2>
    <img class="image" src=${question[count].img} width="200">
                    <ul class="option_list">
                        <li class="option">${question[count].options[0]}</li>
                        <li class="option"> ${question[count].options[1]}</li>
                        <li class="option">${question[count].options[2]}</li>
                        <li class="option">${question[count].options[3]}</li>
                    </ul>`;


    const optionList = document.querySelectorAll(".option");
    optionList.forEach(listItem => {
        listItem.addEventListener('click',() => {
            optionList.forEach(listitem => {
                if(listitem.classList.contains("active")){
                    listitem.classList.remove("active");
                }
            });
            listItem.classList.add("active");
        });
    });
}


//questions

const question = [
    {
        id : 1,
        question : "what is the name of this gun??",
        answer: "AWP",
        img : "https://staticg.sportskeeda.com/editor/2020/06/803d7-15921301606729-800.jpg",
        options : [
            "AK47",
            "SG553",
            "SSG 08",
            "AWP"
        ]
    },
    {
        id : 2,
        question : "are you familiar with this gun",
        answer : "usps",
        img : "https://cdn.mos.cms.futurecdn.net/S3WqV7RaTwMNgLMsoF59ci-1200-80.jpg",
        options : [  
            "usps",
            "P2000",
            "desert eagle",
            "Tec-9"
        ]
    },
    {
        id : 3,
        question : "Whicn team own this logo??",
        answer: "astralis",
        img : "https://yt3.ggpht.com/ytc/AAUvwniB6EUlIGjz1PQlmYKD0qTNa3GlkX7F21sZqm9K=s176-c-k-c0x00ffffff-no-rj-mo",
        options : [  
            "Ghost Gaming",
            "Navi",
            "astralis",
            "Liquid"
        ]
    },
    {
        id : 4,
        question: "Which team is this??",
        answer: "liquid",
        img : "https://pro.eslgaming.com/occitanie/wp-content/uploads/2019/04/team-team-liquid.png",
        options: [ 
            "liquid",
            "Navi",
            "Astralis",
            "vitality"
        ]
    },
    {
        id : 5,
        question : "Where were they first seen?",
        answer: "italy map",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOLnLaV8mGs8PMz49gHwXBWp9hLqP_NX0PA&usqp=CAU",
        options : [
            "italy map",
            "Train Map",
            "Militia Map",
            "Aztec Map"
        ]
    },
    {
        id : 6,
        question : "what is this gun??",
        answer: "M4A4",
        img : "https://i.imgur.com/lN6xowD.png",
        options : [ 
            "AWP",
            "aug",
            "M4A4",
            "Gali"
        ]
    },
    {
        id : 8,
        question : "what is this gun??",
        answer: "Gali Ar",
        img : "https://files.gamebanana.com/img/ss/skins/554fbe20bbe5e.jpg",
         options : [ 
            "AWP",
            "AUG",
            "Gali Ar",
            "M4A4",
        ]
    },
    {
        id : 9,
        question : "what is this map??",
        answer: "inferno",
        img : "https://liquipedia.net/commons/images/thumb/2/2b/De_new_inferno.jpg/800px-De_new_inferno.jpg",
         options : [ 
            "inferno",
            "dust II",
            "nuke",
            "lake",
        ]
    },
    {
        id : 10,
        question : "what is this Map??",
        answer: "mirage",
        img : "https://liquipedia.net/commons/images/thumb/f/f3/Csgo_mirage.jpg/800px-Csgo_mirage.jpg",
         options : [ 
            "overpass",
            "office",
            "train",
            "mirage",
        ]
    },
    {
        id : 11,
        question : "what is this called??",
        answer: "HeadShot",
        img : "https://www.themebeta.com/media/cache/728/files/chrome/images/201604/28/b7255a026b7cac7b02cd95646a0c12c5.jpeg",
         options : [ 
            "HeadShot",
            "legshot",
            "command",
            "icon",
        ]
    }
];