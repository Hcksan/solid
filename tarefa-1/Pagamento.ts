import Colaborador from "./Colaborador";
import CalculaSalario from "./CalculaSalario";

export default class Pagamento {
  constructor(private sericoCalculaSalario: CalculaSalario) {}

  pagar(colaborador: Colaborador) {
    const salarioColaborador = this.sericoCalculaSalario.calcular(
      colaborador.cargo
    );
    colaborador.saldo = salarioColaborador;
  }
}
