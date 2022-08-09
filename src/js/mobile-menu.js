

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileLogoRef = document.querySelector("[data-logo]");
  const mobileBodyRef = document.querySelector("[data-body]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    mobileLogoRef.classList.toggle("logo--hidden");
    mobileBodyRef.classList.toggle("no-scroll--burger-menu");

    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => {
      if (!e.matches) return;
      mobileMenuRef.classList.remove("is-open");
      mobileBodyRef.classList.remove("no-scroll--burger-menu");
      mobileLogoRef.classList.remove("logo--hidden");
      menuBtnRef.classList.remove("is-open");

      menuBtnRef.setAttribute('aria-expanded', false);

    });

  });
})();