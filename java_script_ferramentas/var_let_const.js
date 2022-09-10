if (true) {
    var a = 10;
}
console.log(a);

//Com "var" a variável irá funcionar dentro ou fora do bloco.

if (true) {
    let b = 15;
}
console.log(b);

//Com "let" a variável irá funcionar apenas dentro do bloco.

if (true) {
    const c = 20;
}
console.log(c);

//Com "const" a variável irá funcionar apenas dentro do bloco.

if (true) {
    let nome = 'Guilherme';
    nome = 'Letícia';
    console.log(nome);
}

if (true) {
    const pessoa = 'Guilherme';
    pessoa = 'Letícia';
    console.log(pessoa);
}

var nome = 'Guilherme';
var nome = 'Letícia';
console.log(nome);

let num = 10;
num++;
num++;
console.log(num);

const numeral = 10;
numeral++;
numeral++;
console.log(numeral);