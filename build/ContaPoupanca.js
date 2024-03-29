"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBancaria_1 = __importDefault(require("./ContaBancaria"));
class ContaPP extends ContaBancaria_1.default {
    taxaDeOperacao;
    constructor(numeroConta, saldo, taxaDeOperacao) {
        super(numeroConta, saldo);
        this.taxaDeOperacao = taxaDeOperacao;
    }
    sacar(valor) {
        if (valor > this.saldo) {
            console.log(`[ERROR] o valor de saque: ${valor} está acima do seu saldo!: ${this.saldo}`);
        }
        else {
            this.saldo -= valor;
            valor -= this.taxaDeOperacao;
            console.log(`Saque realizado! + a taxa de ${this.taxaDeOperacao} o saque fica ${valor}`);
        }
    }
    depositar(valor) {
        valor -= this.taxaDeOperacao;
        this.saldo += valor;
        console.log(`Deposito efetuado: ${valor}`);
    }
    mostrarDados() {
        console.log('-------------------------------------------');
        console.log(`O numero da Conta Poupança é:  ${this.numeroConta}`);
        console.log(`O saldo da sua Conta Pounpança é: ${this.saldo} `);
        console.log(`A taxa de operação da sua Conta Poupança é: ${this.taxaDeOperacao}`);
        console.log('-------------------------------------------');
    }
}
exports.default = ContaPP;
//const pp = new ContaPP("1234",500,5);
//pp.mostrarDados()
// pp.sacar(100)
// pp.mostrarDados()
// pp.sacar(100)
// pp.mostrarDados()
// pp.depositar(100)
// pp.mostrarDados()
