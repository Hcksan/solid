class Recepcionista {
  organizarMesas() {
    console.log("Organizando as mesas...");
  }
}
class ChefCozinha {
  cozinharPratoPrincipal() {
    console.log("Preparando o prato principal");
  }
}
class Garcom {
  anotarPedido() {
    console.log("Anotando o pedido...");
  }
}
class AuxiliarLimpeza {
  limpar() {
    console.log("Limpando o local...");
  }
}
class ChefConfeitaria {
  prepararSobremesa() {
    console.log("Fazendo as sobremesas...");
  }
}
class Cumin {
  servirBebidas() {
    console.log("Servindo as bebidas...");
  }
}

class Restaurante {
  private recepcionista: Recepcionista;
  private chefCozinha: ChefCozinha;
  private garcom: Garcom;
  private auxiliarLimpeza: AuxiliarLimpeza;
  private chefConfeitaria: ChefConfeitaria;
  private cumin: Cumin;
  constructor() {
    this.recepcionista = new Recepcionista();
    this.chefCozinha = new ChefCozinha();
    this.garcom = new Garcom();
    this.auxiliarLimpeza = new AuxiliarLimpeza();
    this.chefConfeitaria = new ChefConfeitaria();
    this.cumin = new Cumin();
  }
  iniciar() {
    this.recepcionista.organizarMesas();
    this.garcom.anotarPedido();
    this.chefCozinha.cozinharPratoPrincipal();
    this.garcom.anotarPedido();
    this.auxiliarLimpeza.limpar();
    this.chefConfeitaria.prepararSobremesa();
    this.cumin.servirBebidas();
  }
}
const restaurante = new Restaurante();
restaurante.iniciar();