

const nomeHeroi = 'Rico Rodrigues'
const expHeroi = 12000

let nivel = 'Ferro'

if (expHeroi >= 10001){

    nivel = 'Radiante'

} else if (expHeroi >= 9001) {

    nivel = 'Imortal'

} else if (expHeroi >= 8001) {

    nivel = 'Ascendente'

} else if (expHeroi >= 7001) {

    nivel = 'Platina'

} else if (expHeroi >= 5001) {

    nivel = 'Ouro'

} else if (expHeroi >= 2001) {

    nivel = 'Prata'

} else if (expHeroi >= 1001) {

    nivel = 'Bronze'

}


console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);