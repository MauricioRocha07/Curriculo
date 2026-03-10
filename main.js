// Botão voltar ao topo
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Mostrar/esconder conteúdo
document.querySelectorAll("h2").forEach(h2 => {
    const icon = h2.querySelector(".toggle-icon");
    const sectionContent = h2.nextElementSibling;

    if (icon) {
        icon.addEventListener("click", () => {
            if (sectionContent.style.display === "none") {
                sectionContent.style.display = "block";
                icon.textContent = "-";
            }
        });
    }
});

// Validação do formulário
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let userNameInput = document.getElementById("userName");
    let userEmailInput = document.getElementById("userEmail");
    let userMessageInput = document.getElementById("userMessage");
    let isValid = true;

    [userNameInput, userEmailInput, userMessageInput].forEach((field) => {
        let oldWarning = field.nextElementSibling;
        
        if (oldWarning && oldWarning.classList.contains("error-msg")) {
            oldWarning.remove();
        }    

        if (field.value.trim() === "") {
            isValid = false;
            let warningMessage = document.createElement("span");
            warningMessage.textContent = "Preencha este campo.";
            warningMessage.style.color = "red";
            warningMessage.classList.add("error-msg");

            field.insertAdjacentElement("afterend", warningMessage);
        }
    });

    if (isValid) {
        alert("Formulário enviado com sucesso!");
    }    
});
