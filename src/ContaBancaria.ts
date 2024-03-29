import Imprimivel from "./imprimivel";

abstract class ContaBancaria{
    public numeroConta: string;
    public saldo: number;

    constructor(numeroConta: string, saldo:number){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        
    }

    abstract sacar (valor: number): void;
    abstract depositar(valor: number): void; 

    public transferir(valor: number,destino:ContaBancaria):void{
        this.sacar(valor)
        destino.depositar(valor) 
        console.log("Transferenciada Realizada!!")      
    }
    
}



export default ContaBancaria


