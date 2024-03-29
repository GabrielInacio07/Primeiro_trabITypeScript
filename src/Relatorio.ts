import ContaBancaria from "./ContaBancaria";
import Imprimivel from "./imprimivel";

class Relatorio{
    gerarRelatorio(objeto: Imprimivel){
        objeto.mostrarDados();
    }
}

export default Relatorio