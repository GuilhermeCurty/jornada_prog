const num=10;

if (num>=2 && num<=5){
    console.log("Número real entre 0 e 5.");
} else {
    console.log("Número real não se encontra entre 0 e 5.");
}

/* if - Se determinada situação ocorrer, faça isso (o código).
   else - Se o "if" não ocorrer, faça aquilo (o código).
*/

const num2=50;

if (num2>=0 && num2<=30) {
    console.log("Número real se encontra entre 0 e 30.");
} else if (num2>=31 && num2<=70){
    console.log("Número real se encontra entre 31 e 70.");
} else if (num2>=71 && num2<=100){
    console.log("Número real se encontra entre 71 e 100.");
}else{
    console.log("Número real não se encontra entre 0 e 100.");
}

const altura=1.8;

if (altura>=0.05 && altura<=1.5) {
    console.log("Estatura baixa.");
} else if (altura>=1.6 && altura<=1.7) {
    console.log("Estatura mediana.");
} else if  (altura>=1.8 && altura<=2.5) {
    console.log("Estatura alta.");
}

// Por que 1.55 não está dando certo?

