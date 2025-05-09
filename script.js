document.addEventListener("DOMContentLoaded", () => {
    const carrossel = document.getElementById("boxcontainer");
    const btnEsquerda = document.getElementById("btn-esquerda");
    const btnDireita = document.getElementById("btn-direita");
  
    const rolar = (direcao) => {
      const largura = carrossel.querySelector(".box").offsetWidth + 16; // 16 = gap
      carrossel.scrollBy({
        left: direcao * largura,
        behavior: 'smooth'
      });
    };
  
    btnEsquerda.addEventListener('click', () => rolar(-1));
    btnDireita.addEventListener('click', () => rolar(1));
  });
  