const números1 = [1, 2, 3, 4, 5, 6,7 ,8 ,9, 10];
for (let num1 of números1) {
if (num1 === 2) {
    continue;
}
console.log(num1);
}

const números2 = [1, 2, 3, 4, 5, 6,7 ,8 ,9, 10];
for (let num2 of números2) {
    if (num2 === 2 || num2 === 5 || num2 === 7) {
        continue;
    }
    console.log(num2);
}

const números3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num3 of números3) {
    if (num3 === 5) {
        break;
    }
    console.log(num3);
}