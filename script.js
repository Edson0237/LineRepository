// Fonction pour animer un bouton lorsqu'il est cliqué
function animateButton(button) {
  // Réduit légèrement le bouton pour donner un effet de clic
  button.style.transform = "scale(0.9)";
  button.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.2)";
  
  // Rétablit la taille normale après un court délai (150 ms)
  setTimeout(() => {
    button.style.transform = "scale(1)";
    button.style.boxShadow = "none";
  }, 150);
}

// Sélectionne tous les boutons avec la classe "btn"
document.querySelectorAll(".btn").forEach((button) => {
  // Ajoute un écouteur d'événement "click" à chaque bouton
  button.addEventListener("click", () => {
    // Lance l'animation au clic
    animateButton(button);

    // Récupère le champ d'affichage des résultats
    const resultField = document.getElementById("result");

    // Récupère la valeur associée au bouton à partir de l'attribut "data-value"
    const value = button.getAttribute("data-value");

    // Gestion des différentes actions selon la valeur du bouton
    if (value === "C") {
      // Si le bouton est "C", efface tout le contenu de l'affichage
      resultField.value = "";
    } else if (value === "Back") {
      // Si le bouton est "Back", supprime le dernier caractère de l'affichage
      resultField.value = resultField.value.slice(0, -1);
    } else if (value === "=") {
      // Si le bouton est "=", calcule le résultat de l'expression
      try {
        resultField.value = eval(resultField.value); // Évalue l'expression
      } catch {
        resultField.value = "Erreur"; // Affiche "Erreur" en cas de problème
      }
    } else {
      // Pour tous les autres boutons (chiffres, opérateurs, etc.), ajoute leur valeur à l'affichage
      resultField.value += value;
    }
  });
});
