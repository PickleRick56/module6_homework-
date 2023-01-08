function drawNumber(firstNumber, secondNumber){
    let timerId = setInterval(function(){
        console.log(firstNumber);
        if(firstNumber === secondNumber) {
            clearInterval(timerId);
        }
        firstNumber += 1;
    }, 1000);

}

drawNumber(5, 15);