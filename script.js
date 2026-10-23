// CONFIGURAÇÃO: substitua pelo número oficial do restaurante antes de publicar.
// Use código do país + DDD + número, somente dígitos. Exemplo fictício: 5511999999999.
const WHATSAPP_NUMBER = "5500000000000";
const DEMO_MODE = true;

function whatsappLink(message) {
  if (DEMO_MODE || WHATSAPP_NUMBER === "5500000000000") {
    alert("Este é um site demonstrativo. Configure o número oficial do WhatsApp e defina DEMO_MODE = false no arquivo script.js antes de publicar.");
    return "#contato";
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
document.querySelectorAll(".order-item").forEach(button => {
  button.addEventListener("click", () => {
    const link = whatsappLink(`Olá, PIER 10! Gostaria de informações sobre: ${button.dataset.item}.`);
    if (link !== "#contato") window.open(link, "_blank", "noopener,noreferrer");
  });
});
["bannerWhats", "contactWhats"].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener("click", event => {
    event.preventDefault();
    const link = whatsappLink("Olá, PIER 10! Gostaria de consultar o cardápio e fazer um pedido.");
    if (link !== "#contato") window.open(link, "_blank", "noopener,noreferrer");
  });
});
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
    document.querySelectorAll(".food-card").forEach(card => {
      card.hidden = button.dataset.filter !== "todos" && card.dataset.category !== button.dataset.filter;
    });
  });
});
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();