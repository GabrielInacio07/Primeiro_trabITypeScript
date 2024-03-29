"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaCorrente_1 = __importDefault(require("./ContaCorrente"));
const ContaPoupanca_1 = __importDefault(require("./ContaPoupanca"));
class Banco {
    contas;
    constructor() {
        this.contas = [];
    }
    inserir(conta) {
        this.contas.push(conta);
    }
    remover(conta) {
        const index = this.contas.indexOf(conta);
        if (index !== -1) {
            this.contas.splice(index, 1);
        }
        else if (index == -1) {
            console.log("Conta não existe");
        }
    }
    procurarConta(numeroConta) {
        for (const conta of this.contas) {
            if (conta.numeroConta === numeroConta) {
                return conta;
            }
        }
        return console.log("Essa Conta não existe");
    }
    mostrarDados() {
        this.contas.forEach(element => {
            if (element instanceof ContaPoupanca_1.default) {
                element.mostrarDados();
            }
            else if (element instanceof ContaCorrente_1.default) {
                element.mostrarDados();
            }
            else {
                console.log("Array não encontrado");
            }
        });
    }
}
exports.default = Banco;
