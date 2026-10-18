// Alternância simples entre português e inglês para os textos marcados com data-pt/data-en.
(() => {
  const button = document.getElementById("languageToggle");
  if (!button) return;
  let currentLanguage = "pt";
  button.addEventListener("click", () => {
    currentLanguage = currentLanguage === "pt" ? "en" : "pt";
    document.documentElement.lang = currentLanguage === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-pt][data-en]").forEach((element) => {
      const translated = element.getAttribute(`data-${currentLanguage}`);
      if (translated !== null) element.innerHTML = translated;
    });
    button.textContent = currentLanguage === "pt" ? "EN" : "PT";
    button.setAttribute("aria-label", currentLanguage === "pt" ? "Switch to English" : "Mudar para português");
  });
})();