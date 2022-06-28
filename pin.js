function getPin(){
    const pin = Math.round(Math.random()*10000)
    const pinString = pin + '';
    if (pinString.length == 4){
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin(){
    pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
const number = event.target.innerText;

const calcInput = document.getElementById('typed-numbers');

    if(isNaN(number)) {
        if (number == 'C'){
        calcInput.value = '';
    }
}
    else {
        const previousNumber = calcInput.value;
        newNumber =  previousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFail = document.getElementById('pin-fail');

    if(pin == typedNumbers){
    
    pinSuccess.style.display = 'block'
    pinFail.style.display = 'none'
   
    }
    else {
   
    pinSuccess.style.display = 'none'
    pinFail.style.display = 'block'
    
    }

}
