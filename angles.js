const anglesInput = document.querySelectorAll('.inputAngle');
const isTriangleBtn = document.querySelector("#button");
const output = document.querySelector("#output");

let msg = "";

isTriangleBtn.addEventListener('click', function(){
    checkIsTriangle(anglesInput);
});

function checkIsTriangle(angles){
    if(angles[0].value === "" || angles[1].value === "" || angles[2].value === ""){
        output.textContent = 'Please enter all the angles';
    }else if(angles[0].value <= 0 || angles[1].value <= 0  || angles[2].value <= 0){     
        output.textContent = 'Angles cannot be zero or negative';
    }else if(calculateSumOfAngles(angles) === 180){
        output.textContent = "yay! it's a triangle 🎉"
    }else{
        output.textContent = "Nopes! not a triangle 😥"
    }
}
function calculateSumOfAngles(anglesInput){
    let sum = 0;

    for (let index = 0; index < anglesInput.length; index++) {
        sum += Number(anglesInput[index].value);
    }
    return sum;
}