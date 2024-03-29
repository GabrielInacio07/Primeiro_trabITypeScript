"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBancaria_1 = __importDefault(require("./ContaBancaria"));
class ContaCorrente extends ContaBancaria_1.default {
    credito;
    limite;
    constructor(numeroConta, saldo, credito, limite) {
        super(numeroConta, saldo);
        this.credito = credito;
        this.limite = limite;
    }
    sacar(valor) {
        if (valor > this.saldo) {
            this.limite += this.credito;
            console.log(`Você recebeu o credito de: ${this.credito} e seu limite passa a ser ${this.limite}`);
        }
        else {
            this.saldo -= valor;
            console.log("Saque efetuado: " + valor);
        }
    }
    depositar(valor) {
        this.saldo += valor;
        console.log("Deposito efetuado: " + valor);
    }
    mostrarDados() {
        console.log('-------------------------------------------');
        console.log(`O numero da Conta Corrente é:  ${this.numeroConta}`);
        console.log(`O saldo da sua Conta Corrente é: ${this.saldo} `);
        console.log(`O credito de sua Conta Corrente é: ${this.credito}`);
        console.log(`O limite de sua Conta Corrente é: ${this.limite}`);
        console.log('-------------------------------------------');
    }
}
//const cc = new ContaCorrente("09875",1000,50,2000);
//cc.mostrarDados()
// cc.sacar(1001)
// cc.mostrarDados()
exports.default = ContaCorrente;
