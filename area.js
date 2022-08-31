const areaBlock = document.querySelectorAll(".areaBlock");

const inputOption1 = document.querySelectorAll(".inputOption1");
const inputOption2 = document.querySelectorAll(".inputOption2");
const inputOption3 = document.querySelectorAll(".inputOption3");
const output = document.querySelectorAll(".output");

const radios = document.forms[0].elements;
// console.log(radios);
areaBlock[0].style.display = "none";
areaBlock[1].style.display = "none";
areaBlock[2].style.display = "none";


radios[0].addEventListener('change', ()=>{
    showOrHideBlock(areaBlock, 0, 1, 2);
})
radios[1].addEventListener('change', ()=>{
    showOrHideBlock(areaBlock, 1, 0, 2);
})
radios[2].addEventListener('change', ()=>{
    showOrHideBlock(areaBlock, 2, 1, 0);
})

function showOrHideBlock(blockDivs, showDivIndex, hideDivIndex1, hideDivIndex2){
    blockDivs[showDivIndex].style.display = "block";
    blockDivs[hideDivIndex1].style.display = "none";
    blockDivs[hideDivIndex2].style.display = "none";
}


document.forms[1].addEventListener('submit', (e)=>{
    e.preventDefault();
    const b = Number(inputOption1[0].value);
    const h = Number(inputOption1[1].value);
    const area1 = (b*h)/2;
    output[0].innerText = "Area = "+ parseFloat(area1).toFixed(2) +" cm²";
}, false);
document.forms[2].addEventListener('submit', (e)=>{
    e.preventDefault();
    const a = Number(inputOption2[0].value);
    const b = Number(inputOption2[1].value);
    const c = Number(inputOption2[2].value);
    let area2 = 0;
    if((a+b)>c && (b+c)>a && (a+c)>b){
        const s=(a+b+c)/2;
        const area2 = Math.sqrt(s*(s-a)*(s-b)*(s-c));
        output[1].innerText = "Area = "+ parseFloat(area2).toFixed(2)+" cm²";
        }
        else{
            // errorDiv.style.display = "block";
        }  
}, false );
document.forms[3].addEventListener('submit', (e)=>{
    e.preventDefault();
    const b = Number(inputOption3[0].value)
    const c = Number(inputOption3[1].value)
    const A = Number(inputOption3[2].value)
    const area3 = (b*c*Math.sin(A*Math.PI/180))/2;
    output[2].innerText = "Area = "+ parseFloat(area3).toFixed(2) +" cm²";
}, false);