const Frutas =  ['Maçã', 'Uva', 'Melancia', 'Goiaba', 'Melão', 'Manga', 'Jabuticaba', 'Acerola', 'Limão', 'Laranja'];

for(let i  = 0; i < Frutas.length; i ++) {
    console.log(Frutas[i]);
    
}

const Frutas2 =  ['Maçã', 'Uva', 'Melancia', 'Goiaba', 'Melão', 'Manga', 'Jabuticaba', 'Acerola', 'Limão', 'Laranja'];

for(let i in Frutas2) {
  console.log(i);
}

const Frutas3 =  ['Maçã', 'Uva', 'Melancia', 'Goiaba', 'Melão', 'Manga', 'Jabuticaba', 'Acerola', 'Limão', 'Laranja'];

for(let x in Frutas3) {
    console.log(Frutas3[x]);
}

const Indivíduo = {
    Nome: 'Guilherme Cezar Neres de Sousa Curty',
    Sexo: 'Masculino',
    Idade: '30 anos',
    Estado_civil: 'Casado',
}

for(let x in Indivíduo) {
    console.log(Indivíduo);
}
