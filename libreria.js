const Milib = {
  areaCirculo: function (radio) {
    return Math.PI * Math.pow(radio, 2);
  },

  perimetroCirculo: function (radio) {
    return 2 * Math.PI * radio;
  },

  cuadrado: function (numero) {
    return numero * numero;
  },

  raizCuadrada: function (numero) {
    return numero < 0 ? "No válido" : Math.sqrt(numero);
  },

  elevado: function (base, exponente) {
    return Math.pow(base, exponente);
  },

  sumaLista: function (lista) {
    return lista.reduce((a, b) => a + b, 0);
  },

  promedioLista: function (lista) {
    if (lista.length === 0) return "Lista vacía";
    return this.sumaLista(lista) / lista.length;
  },

  maximoLista: function (lista) {
    return Math.max(...lista);
  },

  minimoLista: function (lista) {
    return Math.min(...lista);
  },

  conversorGradosADecimales: function (grados, minutos, segundos) {
    return grados + (minutos / 60) + (segundos / 3600);
  },

  radianesAGrados: function(radianes) {
    return radianes * (180 / Math.PI);
  },

  factorial: function(n) {
    if (n < 0) return "No válido";
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
};
