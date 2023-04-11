import Cliente from "./Cliente";

export default interface ClienteRepositorio {
    salver(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}