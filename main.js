document.getElementById("btnTest").addEventListener("click", function () {
  let utilisateurs = prompt("Combien d'utilisateurs dans le projet ?");

  if (utilisateurs > 10) {
    document.getElementById("resultat").textContent = "Projet collaboratif";
  } else {
    document.getElementById("resultat").textContent = "Petit projet";
  }
});