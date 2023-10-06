let calculation = localStorage.getItem('calculation') || '';

displayCalc();

function upCalc(num){
    calculation += num;
    console.log(calculation);   
    localStorage.setItem('calculation', calculation);
    displayCalc();
}

function displayCalc() {
    document.querySelector('.nums')
        .innerHTML = calculation;
}