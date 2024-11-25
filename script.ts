// Sélectionne le champ d'affichage des résultats
const resultField = document.getElementById("result") as HTMLInputElement;

// Sélectionne tous les boutons avec la classe "btn"
const buttons = document.querySelectorAll<HTMLButtonElement>(".btn");

// Initialise une variable pour conserver l'expression mathématique actuelle
let currentExpression = "";

// Ajoute un écouteur d'événement "click" pour chaque bouton
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value; // Récupère la valeur du bouton via l'attribut "data-value"

    // Vérifie si la valeur est invalide (par précaution)
    if (!value) return;

    // Si le bouton est "C" (effacer tout)
    if (value === "C") {
      currentExpression = ""; // Réinitialise l'expression
    } 
    // Si le bouton est "=" (calculer le résultat)
    else if (value === "=") {
      try {
        // Évalue l'expression mathématique en utilisant eval
        currentExpression = eval(currentExpression).toString();
      } catch {
        // En cas d'erreur (expression invalide), affiche un message d'erreur
        currentExpression = "Erreur";
      }
    } 
    // Si le bouton est "Effacer" (efface un caractère)
    else if (value === "Back") {
      currentExpression = currentExpression.slice(0, -1); // Supprime le dernier caractère
    } 
    // Pour tous les autres boutons (chiffres, opérateurs, etc.)
    else {
      // Si une erreur était affichée précédemment, réinitialise l'expression
      if (currentExpression === "Erreur") currentExpression = "";
      // Ajoute la valeur du bouton à l'expression
      currentExpression += value;
    }

    // Met à jour le champ d'affichage avec l'expression actuelle
    resultField.value = currentExpression;
  });
});
