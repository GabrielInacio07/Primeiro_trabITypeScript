"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    numeroConta;
    saldo;
    constructor(numeroConta, saldo) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
    transferir(valor, destino) {
        this.sacar(valor);
        destino.depositar(valor);
        console.log("Transferenciada Realizada!!");
    }
}
exports.default = ContaBancaria;
