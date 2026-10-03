"use strict";

// Isi nomor WhatsApp dengan kode negara tanpa tanda + (contoh format: 62812...)
// dan email dengan alamat yang sudah Anda siapkan sebelum situs dipublikasikan.
const BYTECRAFT_CONTACT = {
  whatsapp: "6285176788166",
  whatsappDisplay: "+62 851-7678-8166",
  email: "muhamaddamar1812@gmail.com",
};

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");

function closeMenu() {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Buka menu navigasi");
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Buka menu navigasi" : "Tutup menu navigasi");
  nav.classList.toggle("open", !isOpen);
});

nav.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuButton.focus();
  }
});

const inquiry = "Halo ByteCraft Studio, saya ingin berkonsultasi mengenai pembuatan website. Boleh saya jelaskan kebutuhan saya?";
const waHref = BYTECRAFT_CONTACT.whatsapp
  ? `https://wa.me/${BYTECRAFT_CONTACT.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(inquiry)}`
  : "";

document.querySelectorAll('[data-contact="whatsapp"]').forEach((link) => {
  const label = link.matches('[data-contact-label="whatsapp"]') ? link : link.querySelector('[data-contact-label="whatsapp"]');
  if (waHref) {
    link.href = waHref;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.removeAttribute("aria-disabled");
    if (label) label.textContent = BYTECRAFT_CONTACT.whatsappDisplay;
  } else {
    link.href = "#contact";
    link.setAttribute("aria-disabled", "true");
  }
});

document.querySelectorAll('[data-contact="email"]').forEach((link) => {
  const label = link.matches('[data-contact-label="email"]') ? link : link.querySelector('[data-contact-label="email"]');
  if (BYTECRAFT_CONTACT.email) {
    link.href = `mailto:${BYTECRAFT_CONTACT.email}`;
    if (label) label.textContent = BYTECRAFT_CONTACT.email;
  } else {
    link.href = "#contact";
    link.setAttribute("aria-disabled", "true");
  }
});
