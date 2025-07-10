/*
//CODIGO EXEMPLO======================================================
import { User } from "./models/User";
import { UserRepository } from "./repositories/UserRepository";

const repo = new UserRepository();

// Mostrar todos os usuários
console.log("\n=== Usuários Atuais ===");
const usuarios = repo.getAll(); // retorna um array
usuarios.forEach(user => console.log(user)); // uso de array.forEach

// Adicionar novo usuário
const novo = new User(3, "Carol", "carol@email.com");
repo.add(novo);
console.log("\nUsuário 'Carol' adicionado.");

// Remover usuário com ID 1
repo.removeById(1);
console.log("\nUsuário com ID 1 removido.");

// Mostrar usuários atualizados
console.log("\n=== Usuários Atualizados ===");
repo.getAll().forEach(u => console.log(u));
//====================================================================

*/

import * as readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

const patalogias:string[][] = [
["1"," Clínico Geral	Atendimento inicial, diagnóstico e tratamento de problemas gerais"],
["2"," Pediatria	Cuida da saúde de bebês, crianças e adolescentes."],
["3"," Ginecologia/Obstetrícia	Saúde da mulher, gravidez, parto e sistema reprodutor feminino."],
["4"," Dermatologia	Doenças da pele, unhas e cabelo."],
["5"," Ortopedia	Ossos, músculos, articulações e fraturas."],
["6"," Cardiologia	Doenças do coração e sistema circulatório."],
["7"," Neurologia	Doenças do cérebro, nervos e sistema nervoso."],
["8"," Psiquiatria	Saúde mental e transtornos psicológicos."],
["9"," Oftalmologia	Saúde dos olhos e visão."],
["10"," Otorrinolaringologia	Doenças do ouvido, nariz e garganta."],
]

main();

async function main(){
    console.log("================================")
    console.log("========== Hospital ============")
    console.log("================================")
    
}