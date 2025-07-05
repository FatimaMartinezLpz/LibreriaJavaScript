const Milib = {

  areaCirculo: function (radio) {
    if (isNaN(radio) || radio <= 0) return "No válido";
    return Math.PI * Math.pow(radio, 2);
  },

  perimetroCirculo: function (radio) {
    if (isNaN(radio) || radio <= 0) return "No válido";
    return 2 * Math.PI * radio;
  },

  cuadrado: function (numero) {
    if (isNaN(numero)) return "No válido";
    return numero * numero;
  },

  raizCuadrada: function (numero) {
    if (isNaN(numero) || numero < 0) return "No válido";
    return Math.sqrt(numero);
  },

  elevado: function (base, exponente) {
    if (isNaN(base) || isNaN(exponente)) return "No válido";
    return Math.pow(base, exponente);
  },

  sumaLista: function (lista) {
    if (!Array.isArray(lista) || lista.length === 0 || lista.some(isNaN)) return "No válido";
    return lista.reduce((a, b) => a + b, 0);
  },

  promedioLista: function (lista) {
    if (!Array.isArray(lista) || lista.length === 0 || lista.some(isNaN)) return "No válido";
    return this.sumaLista(lista) / lista.length;
  },

  maximoLista: function (lista) {
    if (!Array.isArray(lista) || lista.length === 0 || lista.some(isNaN)) return "No válido";
    return Math.max(...lista);
  },

  minimoLista: function (lista) {
    if (!Array.isArray(lista) || lista.length === 0 || lista.some(isNaN)) return "No válido";
    return Math.min(...lista);
  },

  conversorGradosADecimales: function (grados, minutos, segundos) {
    if (
      isNaN(grados) || isNaN(minutos) || isNaN(segundos) ||
      minutos < 0 || minutos >= 60 ||
      segundos < 0 || segundos >= 60
    ) {
      return "No válido";
    }
    return grados + (minutos / 60) + (segundos / 3600);
  },

  radianesAGrados: function (radianes) {
    if (isNaN(radianes)) return "No válido";
    return radianes * (180 / Math.PI);
  },

  factorial: function (n) {
    if (isNaN(n) || n < 0 || !Number.isInteger(n)) return "No válido";
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }

};
