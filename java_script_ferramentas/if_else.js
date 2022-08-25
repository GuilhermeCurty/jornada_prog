/*
Hora >=6 && Hora <=11 (Bom dia!);
Hora >=12 && Hora <=17 (Boa tarde!);
Hora >=18 && Hora <=23 (Boa noite!);
*/

const hora = 18;
if (hora>=6 && hora<=11) {
    console.log('Bom dia!');
} else if (hora>=12 && hora<=17) {
    console.log('Boa tarde!');
} else if (hora>=18 && hora<=23) {
    console.log('Boa noite!');
} else if (hora>=0 && hora<=5){
    console.log('Tarde para ficar acordado!');
}


if(hora >= 6) {
    console.log('bom dia');
}
if(hora >= 12) {
    console.log('boa tarde');
}
if(hora >= 18) {
    console.log('boa noite');
}
if(hora >= 0) {
    console.log('boa madrguda');
}