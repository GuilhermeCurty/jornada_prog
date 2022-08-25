function max (x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(max(12, 13));

function ePaisagem (largura, altura) {
    return largura > altura ? true : false;
}
console.log(ePaisagem (1921, 1920));

function FizzBuzz(número) {
    if (typeof número !== 'number') return número;
    if (número % 3 === 0 && número % 5 === 0) return 'FizzBuzz';
    if (número % 3 === 0) return 'Fizz';
    if (número % 5 === 0) return 'Buzz';
     return número;
}
for (let i = 0; i <=100; i ++); {
    console.log(i, FizzBuzz(i));
}