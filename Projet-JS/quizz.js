/************************************************/
/******  MA PREMIERE TENTATIVE ET TESTS  ********/
/************************************************/
// console.log("hello")

// -----------------------------------------------------------
// 1 - sélection des éléments utiles à plusieurs endroits du programme (module)
// -----------------------------------------------------------

// const btns = document.getElementsByClassName("answers")

// const btn1 = document.getElementById("btn1")
// const btn2 = document.getElementById("btn2")
// const btn3 = document.getElementById("btn3")
// const btn4 = document.getElementById("btn4")

// console.log(btn2)

// btn1.addEventListener("click", function(){console.log("ca marche")})

// function log(){
//     console.log("coucou")
// }

// btn3.addEventListener("click", function(){
//     log()
// })

// -----------------------------------------------------------
// 2 - définition des fonctions (actions) du module
// -----------------------------------------------------------


/************************************************/
/******       REAL WORK STARTS HERE      ********/
/************************************************/

// -----------------------------------------------------------
// 1 - sélection des éléments utiles à plusieurs endroits du programme (module)
// -----------------------------------------------------------

const start = document.getElementById("start")

const quizz = document.getElementById("quizz")

const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")

const end = document.getElementById("endquizz")

const bgColor = document.getElementById("container")

// -----------------------------------------------------------
// 2 - mes question dans un array (dedans tous les éléments sont des objects qui auront les mêmes propriétés)
// -----------------------------------------------------------

let questions = [
    {
        question : "Quel est la devise de Gui senseï ?",
        choiceA : "Wax up, wax down",
        choiceB : "Wax left, wax right",
        choiceC : "Wax on, wax off",
        choiceD : "Wax this, wax that",
        correct : "C"
    },
    {
        question : "Les infos de Kennews, sont-elles fiables ?",
        choiceA : "à 100%",
        choiceB : "j'en doute fort",
        choiceC : "Non.",
        choiceD : "BFM c'est plus crédible",
        correct : "A"
    },
    {
        question : "Hami, il est .. ?",
        choiceA : "Fort",
        choiceB : "Doux",
        choiceC : "Entrain de se tapper une série",
        choiceD : "Pas là",
        correct : "B"
    },
    {
        question : "Un peu de sérieux.. c'est quoi HTML ?",
        choiceA : "Hyper textual mockeup language",
        choiceB : "Hyper text markup language",
        choiceC : "Hyper text makeup language",
        choiceD : "Hyped and testing marlyn language",
        correct : "B"
    },
]
    

//pour acceder aux propriété de chacunes des question: - questions[0].question
//                                                     - questions[0].choiceA
//                                                     - questions[0].choiceB
//                                                     - questions[0].choiceC
//                                                     - questions[0].choiceD
//                                                     - questions[0].correct



// l'index de la première question (tout le premier block) est 0 
//l'index de la dernière case de l'array est array.length-1


// -----------------------------------------------------------
// 3 - définition des fonctions (actions) du module
// -----------------------------------------------------------

/*bout de variable mis ici pour mieux comprendre ce qui se passe directement en dessous*/
const lastQuestion = questions.length -1;
let runningQuestion = 0; //= la question actuelle à laquelle répond l'utilisateur
var q = null;

/* J'AFFICHE MA FONCTION*/
function renderQuestion(){

    q = questions[runningQuestion];
    question.innerHTML = "<p>" +q.question+"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    console.log(300)
}

/* J'INITIALISE MON QUIZZ*/
function startQuizz(){
    start.style.display = "none";
    renderQuestion();
    quizz.style.display = "block";
}


/* JE CHANGE LA COULEUR DU BG EN VERT*/
function answerIsCorrect(){
    bgColor.style.background = "green"
}

/* JE CHANGE LA COULEUR DU BG EN ROUGE*/

function answerIsWrong(){
    bgColor.style.background = "red"
}

//function pour verifier la réponse (A,B, C ou D)
// si la question donné par l'utilisateur est égale à celle stocker dans notre array est la même


/* JE VERIFIE LES REPONSES */

function checkAnswer(answer){

    if( answer == q.correct){
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    console.log(answer)
    {console.log(200)};

    moveToNextQ();

    console.log(runningQuestion)
}

/* la dernière réponse: résultat pas refleté dans le bg*/
// /!\/!\/!\le background reste afficher alors que je passe à la question suivante 

/* JE PASSE A LA QUESTION SUIVANTE */

function moveToNextQ(){
    console.log("next q...")
    if(runningQuestion < lastQuestion){
        console.log("on continue");
        
        runningQuestion++;
        renderQuestion();

        console.log(500)
    }else{
        bgColor.style.background = "white", 5000
        quizz.style.display = "none"
        setTimeout(theEnd, 200) 
    }
}

/* JE TERMINE MON QUIZZ*/

 function theEnd(){
    console.log("c'est la fin")
    end.style.display = "block"

 }


// -----------------------------------------------------------
// 4 - les events listenners
// -----------------------------------------------------------
//on ajoute un event listener à notre bouton start

start.addEventListener("click", function(){startQuizz()});

//on ajoute un event listener à notre choix de réponses

choiceA.addEventListener("click", function(){checkAnswer('A')})
choiceB.addEventListener("click", function(){checkAnswer('B')})
choiceC.addEventListener("click", function(){checkAnswer('C')})
choiceD.addEventListener("click", function(){checkAnswer('D')})

/************************************************/
/******       AMELIORER MON QUIZZ        ********/
/************************************************/

// - REINITIALISER LA COULEUR DU BACKGROUND POUR LA QUESTION SUIVANTE
// - A LA DERNIERE QUESTION AFFICHER LA COULEUR DU BACKGROUND AVANT D'AFFICHER LE BLOCK "ENDQUIZZ"
// - AJOUTER TIMER
// - AJOUTER SCORE
// - AJOUTER LES VRAIES REPONSES AUX QUESTIONS
// - UN BACKGROUND PLUS FUN STYLE PARTICLES

/************************************************/
/******           EXTERNAL  HELP         ********/
/************************************************/

// - YOUTUBE 
// - MDN
// - STACKOVERFLOW
// - GOOGLE, MY FRIEND



//------------------------ SIDE NOTE ------------------------------//
// FROM STACK OVERFLOW POUR ATTARDER UNE FUNCTION // 

//You can use plain javascript, this will call your_func once, after 5 seconds:

// setTimeout(function() { your_func(); }, 5000);
// If your function has no parameters and no explicit receiver you can call directly setTimeout(func, 5000)
