// Botão voltar ao topo
const btn = document.getElementById("topo");
window.onscroll = function () {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
};
btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Mostrar/esconder conteúdo
document.querySelectorAll("h2").forEach(h2 => {
    const icon = h2.querySelector(".toggle-icon");
    const conteudo = h2.nextElementSibling;

    icon.addEventListener("click", () => {
        if (conteudo.style.display === "none") {
            conteudo.style.display = "block";
            icon.textContent = "-";
        } else {
            conteudo.style.display = "none";
            icon.textContent = "+";
        }
    });
});

// Validação do formulário
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");
    let valido = true;

    [nome, email, mensagem].forEach((campo) => {
        let avisoAntigo = campo.nextElementSibling;
        if (avisoAntigo && avisoAntigo.classList.contains("erro")) avisoAntigo.remove();

        if (campo.value.trim() === "") {
            valido = false;
            let aviso = document.createElement("span");
            aviso.textContent = "Preencha este campo.";
            aviso.style.color = "red";
            aviso.classList.add("erro");
            campo.insertAdjacentElement("afterend", aviso);
        }
    });

    if (valido) alert("Formulário enviado com sucesso!");
});
