window.watsonAssistantChatOptions = {
    integrationID: "814fa5a5-953a-482f-aee2-2cb5d9d87728",
    region: "us-south",
    serviceInstanceID: "8a23610e-7cde-411e-98a0-a2a5e0839572",
    onLoad: async (instance) => {
        await instance.render();
        instance.updateLocale("pt-br");
        
        // Verifica se o botão "Mecânico Virtual" foi clicado em alguma página específica
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('bot') === 'geronimo') {
            instance.openChat();
        }
    },
};

setTimeout(function() {
    var t = document.createElement("script");
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || "latest") + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});

document.addEventListener("DOMContentLoaded", () => {
    const botaoMenu = document.querySelector(".menu-hamburguer");
    const menu = document.querySelector(".menu")
    botaoMenu.addEventListener("click", () => {
        menu.classList.toggle("ativo")
    })
});

document.addEventListener("DOMContentLoaded", () => {
    var botoes = document.querySelectorAll(".botao");
    botoes.forEach(function(botao) {
        botao.addEventListener("click", function() {
            var chatButton = document.querySelector("#WACLauncher__Button");
            chatButton.click();
        });
    });
});
