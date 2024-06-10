export function capturarValor(event) {
    const inputClicado = event.target; // Captura o elemento que foi clicado
    const valor = inputClicado.value;
    const id = inputClicado.id;
    return {valor, id}
  }