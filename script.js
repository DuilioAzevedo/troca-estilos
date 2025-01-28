const botao = document.getElementById("botao");

function gerarCorAleatoria() {
  const r = Math.floor(Math.random() * 256); // Valor entre 0 e 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`; // Formato RGB
}

botao.addEventListener("click", function () {
  const conteiner = document.getElementById("conteiner");
  const corAleatoria = gerarCorAleatoria();
  conteiner.style.backgroundColor = corAleatoria;
});