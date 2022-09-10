/*
Hora >=6 && Hora <=11 (Bom dia!);
Hora >=12 && Hora <=17 (Boa tarde!);
Hora >=18 && Hora <=23 (Boa noite!);
*/

const hora = 04;
if (hora>=6 && hora<=11) {
    console.log('Bom dia!');
} else if (hora>=12 && hora<=17) {
    console.log('Boa tarde!');
} else if (hora>=18 && hora<=23) {
    console.log('Boa noite!');
} else if (hora>=0 && hora<=5){
    console.log('Tarde para ficar acordado!');
}



const horario =0;
if (horario>=6 && horario<=11) {
    console.log('Bom dia!');
} else if(horario>=12 && horario<=17) {
    console.log('Boa tarde!');
} else if(horario>=18 && horario<=23) {
    console.log('Boa noite!');
} else if(horario>=0 && horario<=5) {
    console.log('Não é hora de estar acordado!');
} else if(horario<0 && horario>11) {
    console.log('Horáio inexistente, o relógio está doidão!');
}

const nota = 6;
const situacaoDoAluno = nota>=7 ? 'Aprovado' : 'Reprovado';
console.log(situacaoDoAluno);

const pontos = 2;
if (pontos>=0 && pontos<=6.99) {
    console.log('Reprovado');
} else if(pontos>=7 && pontos<=10) {
    console.log('Aprovado');
}

