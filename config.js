/* =========================================================
   FICHIER DE CONFIGURATION : config.js
   C'est ICI, et seulement ici, que vous mettez vos numéros.
   Ce fichier doit être dans le MEME dossier que index.html,
   prestaciones.html et contacto.html.
   ========================================================= */
const CONFIG = {

  // Numéro utilisé dans TOUS les liens WhatsApp du site.
  // Format : indicatif du pays + numéro, SANS "+" et SANS espaces.
  // Mexique : 52 + 10 chiffres.
  whatsapp: "522871527128",

  // Numéro affiché à l'écran sur la page Contacto (écrivez-le comme vous voulez).
  telefonoVisible: "+52 28 7152 7128"
};

/* =========================================================
   NE MODIFIEZ PAS CE QUI SUIT.
   Quand la page est chargée, ce code remplit les liens et le numéro :
   - un lien avec  data-wa="message"  devient un lien WhatsApp vers votre numéro
     (data-wa="" ouvre WhatsApp sans message)
   - un élément avec  data-tel  affiche le numéro visible
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {

  // 1. Liens WhatsApp
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    var mensaje = a.getAttribute("data-wa");
    a.href = "https://wa.me/" + CONFIG.whatsapp +
             (mensaje ? "?text=" + encodeURIComponent(mensaje) : "");
  });

  // 2. Numéro visible
  document.querySelectorAll("[data-tel]").forEach(function (el) {
    el.textContent = CONFIG.telefonoVisible;
  });
});
