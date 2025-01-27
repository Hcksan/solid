import calcularSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";
import GeraRelatorio from "./GeraRelatorio";
import QuadroColaboradores from "./QuadroColaboradores";
import { Cargos } from "./enum/cargos";
import Pagamento from "./Pagamento";


//Principio da responsabilidade única

const quadroColaboradores = new QuadroColaboradores();
const calculaSalario = new calcularSalario();
const geradorDeRelatorios = new GeraRelatorio(
  quadroColaboradores.colaboradores,
  calculaSalario
);
const pagamento = new Pagamento(calculaSalario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadroColaboradores.contratarColaborador(colaborador1);
quadroColaboradores.contratarColaborador(colaborador2);
quadroColaboradores.contratarColaborador(colaborador3);

console.log(geradorDeRelatorios.gerarJson());

console.log(colaborador1);
pagamento.pagar(colaborador1);
console.log(colaborador1);
