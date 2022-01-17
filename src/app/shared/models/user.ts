export class User {
    senha: string;
    id: number;
    nome: string;
    rotas: string[];

    constructor(senha: string, id:number, nome: string, rotas: string[]){
        this.senha = senha;
        this.id = id;
        this.nome = nome;
        this.rotas = rotas;
    }
}