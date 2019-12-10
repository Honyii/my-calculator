let runningTotal= 0;
let buffer= "0";
let previousOperator;


const screen= document.querySelector('calc-screen');

function buttonClick(value) {
    console.log(event);
}


function init() {
    document.querySelector('btn-row')

    addEventListener('click',function(event) {
        
        buttonClick(event.target.innertext);
    })
}
init();