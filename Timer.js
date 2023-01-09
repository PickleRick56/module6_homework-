let intervalID = setInterval(fun, 1000);

setTimeout(function(){return clearInterval(intervalID)}, 10000)


function fun() {
    console.log(1);
}