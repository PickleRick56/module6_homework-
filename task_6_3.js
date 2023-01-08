function sum(num) {
    return function (secondNum) {

        return num + secondNum;
    }
}



console.log(sum(3)(4));