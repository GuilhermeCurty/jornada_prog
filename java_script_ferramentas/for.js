console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
console.log('Linha 6');
console.log('Linha 7');
console.log('Linha 8');
console.log('Linha 9');
console.log('Linha 10');

for(let i = 350; i<= 1000; i ++) { 
    // console.log(i);
console.log(`Linha ${i}`);
}

for(let i = 0; i<= 500; i += 10) {
    console.log(`Usuário ${i}`);
}

for(let i = 500; i>= 0; i -= 20) {
    console.log(`Usuário ${i}`);
}

for(let i = 0; i<= 100; i ++) {
    const par = i % 2 === 0;
    console.log(i, par);
}

 const Frutas = ['Maçã', 'Uva', 'Melancia', 'Goiaba', 'Melão', 'Manga', 'Jabuticaba', 'Acerola', 'Limão', 'Laranja'];
 for(i = 0; i< Frutas.length; i ++) {
    //  console.log(i);
    console.log(Frutas[i]);
    // console.log(`Índice  ${i} - `, Frutas[i]);

}