



 function separater(n) {
    if (!Number.isInteger(n) || n < 2 || n > 1000) return "ошибка";

    let k = Math.sqrt(n);
    for (let i = 2; i <= k; i++)
        if (n % i === 0) return "не простое число";

    return "простое число";
}

console.log(separater(11));
console.log(separater(13));