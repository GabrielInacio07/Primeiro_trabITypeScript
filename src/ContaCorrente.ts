import ContaBancaria from "./ContaBancaria";
import Imprimivel from "./imprimivel";


class ContaCorrente extends ContaBancaria implements Imprimivel {
    protected credito: number;
    protected limite: number
    constructor(numeroConta:string,saldo: number,credito: number,limite:number){
        super(numeroConta, saldo);
            this.credito = credito;
            this.limite = limite
        
            
    }

    public sacar(valor: number): void {
        if (valor > this.saldo){
            this.limite += this.credito;
            console.log(`Você recebeu o credito de: ${this.credito} e seu limite passa a ser ${this.limite}`) 
        }else{
            this.saldo -= valor;
            console.log("Saque efetuado: " + valor)
        }
           
    }

    public depositar(valor: number): void {
        this.saldo += valor;
        console.log("Deposito efetuado: " + valor)
    }

   

    mostrarDados(): void {
        console.log('-------------------------------------------')
        console.log(`O numero da Conta Corrente é:  ${this.numeroConta}`)
        console.log(`O saldo da sua Conta Corrente é: ${this.saldo} `)
        console.log(`O credito de sua Conta Corrente é: ${this.credito}`)
        console.log(`O limite de sua Conta Corrente é: ${this.limite}`)
        console.log('-------------------------------------------')      
       
    }
    
}
//const cc = new ContaCorrente("09875",1000,50,2000);
//cc.mostrarDados()
// cc.sacar(1001)
// cc.mostrarDados()

export default ContaCorrente



