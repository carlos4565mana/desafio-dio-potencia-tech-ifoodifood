let name = prompt("Digite seu nome: ");
function promptInt(mensagem, tenteNovamente) {
  var msg = mensagem;
  while (true) {
      let ret = parseInt(prompt(msg));
      if (!isNaN(ret)) return ret;
      msg = tenteNovamente;
  }
}
let xp = promptInt("Por favor digite o numero do xp: ","Por favor, digite um número.\nTente novamente.");

let nivel = "";
if (xp <= 1000) {
  nivel = "Ferro"
} else if (xp <= 2000) {
  nivel = "Bronze"
} else if (xp <= 6000) {
  nivel = "Prata"
} else if (xp <= 7000) {
  nivel = "Ouro"
} else if (xp <= 8000) {
  nivel = "Platina"
} else if (xp <= 9000) {
  nivel = "Ascendente"
} else if (xp <= 10000) {
  nivel = "Imortal"
} else if (xp >= 10001) {
  nivel = "Radiante"
}
alert(`O Herói de nome ${name} está no nível de ${nivel}`)

