const questions=[
    {
        question:"Which is largest animal?",
        answers:[
            {text:" shark",correct:false},
            {text:"whale",correct:true},
            {text:"dog",correct:false},
            {text:"cat",correct:false}
        ]
    },
    {
    question:"Which is smallest animal?",
    answers:[
        {text:"hippo",correct:false},
        {text:"horse",correct:false},
        {text:"dog",correct:false},
        {text:"cat",correct:true}
    ]

    }
] 
const questionelem=document.getElementById("question");
const answebtn=document.getElementById("answers");
const nextbtn=document.getElementById("nextbtn");
let currentquesind=0;
let score=0;
function startQuiz(){
    currentquesind=0;
    score=0;
    nextbtn.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentques=questions[currentquesind];
    let questionNo =currentquesind+1;
    questionelem.innerHTML=questionNo+"."+currentques.question;
    currentques.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn") ;
        answebtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct="true";
        }
        button.addEventListener("click",selectAnswer);
    })
}
function resetState(){
    nextbtn.style.display="none";
    while (answebtn.firstChild){
        answebtn.removeChild(answebtn.firstChild);
    }
}


function selectAnswer(e) {
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";

    if (isCorrect) {
        selectedbtn.classList.add("correct");
        score++;
    } else {
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answebtn.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;

    });
    nextbtn.style.display="block";
}
function showScore(){
    resetState();
    questionelem.innerHTML=`You have Scored ${score}`;
    nextbtn.innerHTML="Play Again";
    nextbtn.style.display="block";
}
function handleNextButton(){
    currentquesind++;
    if(currentquesind<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextbtn.addEventListener("click",()=>{
    if(currentquesind<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();