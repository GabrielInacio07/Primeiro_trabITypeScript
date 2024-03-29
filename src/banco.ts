import ContaBancaria from "./ContaBancaria";
import ContaCorrente from "./ContaCorrente"
import ContaPP from "./ContaPoupanca"
import Imprimivel from "./imprimivel";

class Banco implements Imprimivel {
    protected contas: Array<ContaBancaria> ;
    
    constructor() {
        this.contas = [];
    }

     
     inserir(conta: ContaBancaria): void {
        this.contas.push(conta);
    }

    
    remover(conta: ContaBancaria): void {
        const index = this.contas.indexOf(conta);
        if (index !== -1) {
            this.contas.splice(index, 1);
        }else if(index == -1){
            console.log("Conta não existe")
        }

        
    }

   
    procurarConta(numeroConta: string): ContaCorrente | ContaPP | void {
        for (const conta of this.contas) {
            if (conta.numeroConta === numeroConta) {
                return conta as ContaCorrente | ContaPP;
            }
        }
        return console.log("Essa Conta não existe");
    }

   mostrarDados():void{

    this.contas.forEach(element => {
        if (element instanceof ContaPP){
            element.mostrarDados()
        }else if(element instanceof ContaCorrente){
            element.mostrarDados()
        }else{
            console.log("Array não encontrado")
        }  
    });
   
   }

}

export default Banco