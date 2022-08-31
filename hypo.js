const inputSides= document.querySelectorAll(".inputSide");
let lengthA, lengthB;
const sumbitBtn = document.querySelector("#submitBtn");
const output= document.querySelector(".output");
sumbitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    lengthA = Number(inputSides[0].value);  
    lengthB = Number(inputSides[1].value);  
    if(lengthA === 0 || lengthB === 0){
        output.textContent = "Please enter all the values";
    }
    else{
        const hypo = Math.sqrt((lengthA*lengthA) + (lengthB*lengthB));
        output.textContent = "Hypotenuse = "+parseFloat(hypo).toFixed(2) +" units";
    }
    
})