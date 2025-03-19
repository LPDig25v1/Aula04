import { encrypt } from "./criptografia.js";
import readlineSync from "readline-sync";
import chalk from "chalk"

let ret = encrypt("Oi gente tudo bem?")

console.log("saída: ",ret);

/*let nome = readlineSync.question("Digite seu Nome: ");
console.log("Oi " + nome +" tudo bem com você?")*/

console.log(chalk.red("Hello World!"));

//console.log("Oi gente")

/*for(let i=0; i<10;i++) {
    console.log("Oi gente")
}*/