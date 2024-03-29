import Banco from "./banco";
import ContaCorrente from "./ContaCorrente";
import ContaPP from "./ContaPoupanca";
import Relatorio from "./Relatorio";
import promptSync from 'prompt-sync';

class Executavel {
    banco: Banco;
    relatorio: Relatorio;

    constructor() {
        this.banco = new Banco();
        this.relatorio = new Relatorio();
    }

    exibirMenu(): void {
        const prompt = promptSync();
        let opcao = '';

        while (opcao !== '5') {
            console.log("\n--- MENU PRINCIPAL ---");
            console.log("1. Criar conta");
            console.log("2. Selecionar conta");
            console.log("3. Remover conta");
            console.log("4. Gerar relatório");
            console.log("5. Finalizar");
            opcao = prompt("Qual opção deseja?: ");

            switch (opcao) {
                case '1':
                    this.criarConta();
                    break;
                case '2':
                    this.selecionarConta();
                    break;
                case '3':
                    this.removerConta();
                    break;
                case '4':
                    this.gerarRelatorio();
                    break;
                case '5':
                    console.log("Finalizando aplicação.");
                    break;
                default:
                    console.log("Opção inválida!");
            }
        }
    }

    criarConta(): void {
        const prompt = promptSync();
        console.log("Qual tipo de conta deseja criar? (1. Corrente / 2. Poupança)");
        const tipoConta = prompt("Escolha o tipo de conta: ");

        const numeroConta = prompt("Informe o número da conta: ");
        const saldo = parseFloat(prompt("Informe o saldo inicial: "));

        if (tipoConta === '1') {
            const limite = parseFloat(prompt("Informe o limite da conta corrente: "));
            const credito = parseFloat(prompt("Informe o crédito da conta corrente: "));
            const contaCorrente = new ContaCorrente(numeroConta, saldo, credito, limite);
            this.banco.inserir(contaCorrente);
            console.log("Conta corrente criada com sucesso!");
        } else if (tipoConta === '2') {
            const taxaDeOperacao = parseFloat(prompt("Informe a taxa de operação da conta poupança: "));
            const contaPoupanca = new ContaPP(numeroConta, saldo, taxaDeOperacao);
            this.banco.inserir(contaPoupanca);
            console.log("Conta poupança criada com sucesso!");
        } else {
            console.log("Tipo de conta inválido!");
        }
    }

    selecionarConta(): void {
        const prompt = promptSync();
        const numeroConta = prompt("Informe o número da conta: ");
        const conta = this.banco.procurarConta(numeroConta);
        if (conta) {
            this.exibirMenuConta(conta);
        }
        
    }

    exibirMenuConta(conta: ContaCorrente | ContaPP): void {
        const prompt = promptSync();
        let opcao = '';

        while (opcao !== 'e') {
            console.log("\n--- MENU CONTA ---");
            console.log("a. Depositar");
            console.log("b. Sacar");
            console.log("c. Transferir");
            console.log("d. Gerar relatório");
            console.log("e. Retornar ao menu anterior");
            opcao = prompt("Qual operação deseja realizar?: ");

            switch (opcao) {
                case 'a':
                    const valorDeposito = parseFloat(prompt("Informe o valor a ser depositado: "));
                    conta.depositar(valorDeposito);
                    break;
                case 'b':
                    const valorSaque = parseFloat(prompt("Informe o valor a ser sacado: "));
                    conta.sacar(valorSaque);
                    break;
                case 'c':
                    const valorTransferencia = parseFloat(prompt("Informe o valor a ser transferido: "));
                    const numeroContaDestino = prompt("Informe o número da conta destino: ");
                    const contaDestino = this.banco.procurarConta(numeroContaDestino);
                    if (contaDestino) {
                        conta.transferir(valorTransferencia, contaDestino);
                    } else {
                        console.log("Conta destino inexistente!");
                    }
                    break;
                case 'd':
                    this.relatorio.gerarRelatorio(conta);
                    break;
                case 'e':
                    console.log("Retornando ao menu anterior.");
                    break;
                default:
                    console.log("Opção inválida!");
            }
        }
    }

    removerConta(): void {
        const prompt = promptSync();
        const numeroConta = prompt("Informe o número da conta a ser removida: ");
        const conta = this.banco.procurarConta(numeroConta);
        if (conta) {
            this.banco.remover(conta);
            console.log("Conta removida com sucesso!");
        }
        
    }

    gerarRelatorio(): void {
        this.relatorio.gerarRelatorio(this.banco);
    }
}

const executavel = new Executavel();
executavel.exibirMenu();
