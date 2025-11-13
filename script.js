// Lista de participantes
const participantes = ["Maria", "João", "Ana", "Carlos", "Fernanda", "Lucas", "Juliana"];

// Lista de produtos correspondentes
const produtos = [
  "produto1.webp",
  "produto2.jpeg",
  "produto3.jpg",
  "produto4.webp",
  "produto5.webp",
  "produto6.webp",
  "produto7.webp"
];

let contador = 0;

function sortear() {
  // Mostrar o ganhador
  document.getElementById("resultado").textContent =
    "Parabéns, " + participantes[contador] + "! Você ganhou a caixa de skin care!";

  // Mostrar a imagem correspondente
  const imagem = document.getElementById("produto");
  imagem.src = produtos[contador];
  imagem.style.display = "block";

  // Avançar para o próximo participante
  contador++;
  if (contador >= participantes.length) {
    contador = 0; // Reinicia o contador quando chega ao final
  }
}
