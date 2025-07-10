
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