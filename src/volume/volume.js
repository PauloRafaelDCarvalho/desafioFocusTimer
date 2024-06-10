import { capturarValor } from "./catchValue.js"
import { changeVolume } from "./changeVolume.js";

const btnVolumeList = document.querySelectorAll(".volume");

btnVolumeList.forEach(Volume => Volume.addEventListener("click", event => {
  const valores = capturarValor(event)

  changeVolume(valores.id, valores.valor)

  console.log(`O ID ${typeof valores.id} de Valor ${valores.valor}`)
}))