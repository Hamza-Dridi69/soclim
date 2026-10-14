
"use strict";

// ========================================
// MENU MOBILE
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
  if (!menuToggle || !navLinks) return;

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Ouvrir le menu");
  navLinks.classList.remove("is-open");
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Ouvrir le menu" : "Fermer le menu"
    );

    navLinks.classList.toggle("is-open", !isOpen);
  });

  // Fermer le menu après un clic sur un lien.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Réinitialiser le menu lors du passage au format desktop.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) {
      closeMenu();
    }
  });

  // Fermer le menu avec la touche Échap.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });
}

// ========================================
// ANNÉE AUTOMATIQUE DANS LE FOOTER
// ========================================

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ========================================
// FORMULAIRE DE CONTACT
// MODE DÉMONSTRATION : AUCUN ENVOI RÉEL
// ========================================

const contactForm = document.querySelector("#contact-form");
const formNotice = document.querySelector("#form-notice");

if (contactForm && formNotice) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Vérification des champs obligatoires.
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    // Aucun backend ou service d'envoi n'est connecté.
    formNotice.textContent =
      "Démo uniquement : votre demande n'a pas été envoyée. " +
      "Le formulaire devra être connecté à un service de réception.";

    formNotice.setAttribute("role", "alert");
  });
}