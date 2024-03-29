import ContaBancaria from "./ContaBancaria";
import ContaCorrente from "./ContaCorrente";
import Imprimivel from "./imprimivel";


class ContaPP extends ContaBancaria implements Imprimivel{
    private taxaDeOperacao: number;
    constructor(numeroConta: string,saldo: number,taxaDeOperacao: number){
        super(numeroConta, saldo)
        this.taxaDeOperacao = taxaDeOperacao
       
        
    }


    public sacar(valor: number): void {
        if(valor > this.saldo){
            console.log(`[ERROR] o valor de saque: ${valor} está acima do seu saldo!: ${this.saldo}`)
        }else{
            this.saldo -= valor
            valor -= this.taxaDeOperacao
            console.log(`Saque realizado! + a taxa de ${this.taxaDeOperacao} o saque fica ${valor}`)
        }
       
    }

    public depositar(valor: number): void {
        valor -= this.taxaDeOperacao
        this.saldo += valor;
        console.log(`Deposito efetuado: ${valor}`)
    }

  

    mostrarDados(): void {
        console.log('-------------------------------------------')
        console.log(`O numero da Conta Poupança é:  ${this.numeroConta}`)
        console.log(`O saldo da sua Conta Pounpança é: ${this.saldo} `)
        console.log(`A taxa de operação da sua Conta Poupança é: ${this.taxaDeOperacao}`)
        console.log('-------------------------------------------')

    }

}
export default ContaPP

//const pp = new ContaPP("1234",500,5);
 //pp.mostrarDados()
// pp.sacar(100)
// pp.mostrarDados()
// pp.sacar(100)
// pp.mostrarDados()
// pp.depositar(100)
// pp.mostrarDados()







