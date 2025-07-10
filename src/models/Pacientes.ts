export class Pacientes{
    constructor(
        public id:number,
        public nome:string,
        public dataNascimento:string,
        public cpf:string,
        public telefone:string,
        public email:string,
        public patologiaCodigo:number
    ){}
}