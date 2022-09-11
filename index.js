const quizForm = document.querySelector(".formQuiz");
const submitButton = document.querySelector("#submitQuiz");
const outputEl = document.querySelector(".scoreHere");
const tryAgain = document.querySelector(".tryAgain");

const correctAnswers = ["option1", "option1", "option1", "option2", "option3",];
let score= 0;

tryAgain.style.display= "none";
quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(quizForm);
    let index=0;
    for(let entry of data){
        console.log(entry[0],":",entry[1]);
       if(entry[1] == correctAnswers[index]){
        score++;
       }
        index++;
    }
    if(score === 5){
        outputEl.innerText = "yay! high score: "+score;
        tryAgain.style.display= "none";
    }
    else{
        outputEl.innerText = "You can do better: "+score;
        tryAgain.style.display= "block";
    }
    submitButton.style.display= "none";
})