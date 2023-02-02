const peso1 = 1.6;
const peso2 = Number(2.8);
console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
//Number.isInteger() mostra se o valor é inteiro
//nesse caso ira da falso, pois, o valor apresentado nao é inteiro
const avaliacao1 = 80
const avaliacao2 = 74

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media.toFixed(2));
console.log(media.toString());
console.log(media.toString(2));//em binário
console.log(typeof media);

