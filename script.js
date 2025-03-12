document.addEventListener("DOMContentLoaded", function () {
    const aumentarFonte = document.getElementById("aumentar-fonte");
    const diminuirFonte = document.getElementById("diminuir-fonte");
    const modoContraste = document.getElementById("modo-contraste");
    let tamanhoFonteBase = 16;

    function ajustarFonte(aumentar) {
        document.querySelectorAll("body, h1, h2, h3, h4, h5, h6, p, a, li, button, label, input, textarea").forEach(elemento => {
            let tamanhoAtual = parseFloat(window.getComputedStyle(elemento).fontSize);
            let novoTamanho = aumentar ? tamanhoAtual + 2 : tamanhoAtual - 2;
            if (novoTamanho >= 10) { // Evita fontes muito pequenas
                elemento.style.fontSize = novoTamanho + "px";
            }
        });
    }

    aumentarFonte.addEventListener("click", function () {
        ajustarFonte(true);
    });

    diminuirFonte.addEventListener("click", function () {
        ajustarFonte(false);
    });

    modoContraste.addEventListener("click", function () {
        // Alterna a classe de alto contraste
        document.body.classList.toggle("alto-contraste");

        // Altera o fundo das seções específicas
        const secoes = document.querySelectorAll("#inicio, #galeria, #contato");
        secoes.forEach(secao => {
            secao.classList.toggle("fundo-preto");
        });
    });
});
