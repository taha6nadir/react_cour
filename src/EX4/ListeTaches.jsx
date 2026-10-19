// On veut développer une petite interface de gestion de tâches. L'utilisateur pourra ajouter des
// tâches à une liste et supprimer celles dont il n'a plus besoin.
// On dispose des données suivantes :
// tasks = [
// {
// "id": 5,
// "titre": "Maîtriser UML",
// "statut": "Terminé"
// },
// {
// "id": 7,
// "titre": "Réviser JS",
// "statut": "En cours"
// }
// ]
// Créez un composant ListeTaches avec deux states : taches (tableau, initialisé avec
// deux tâches de départ de la forme { id, texte, statut }) et nouvelleTache (chaîne vide).
// 2. Ajoutez un formulaire avec un champ texte contrôlé et un bouton Ajouter. À la
// soumission, ajoutez une tâche à la liste sans modifier directement le tableau (utilisez
// [...taches, nouvelleTache]).
// Ignorez les textes vides ( Si la nouvelleTache est null) et videz le champ après
// l'ajout.
// 3. Créez un composant Tache qui reçoit en props tache. Il affiche le texte, une case à
// cocher et un bouton Supprimer.
// 4. Affichez les tâches avec map (avec une key basée sur l'id). Une tâche terminée est
// barrée (textDecoration: "line-through").
// 5. Implémentez basculerTache(id) (inverse terminee)
// 6. Implémentez supprimerTache(id) (utilise filter)
// 7. Affichez sous la liste : « X tâche(s) restante(s) sur Y ». Si la liste est vide, affichez «
// Aucune tâche pour le moment »

import { useState } from "react";
import Tache from "./Tache";

function ListeTaches() {
  const [taches, settaches] = useState([
    {
      id: 5,
      titre: "Maîtriser UML",
      statut: "Terminé",
    },
    {
      id: 7,
      titre: "Réviser JS",
      statut: "En cours",
    },
  ]);

  const [nouvelleTache, setNouvelleTache] = useState("");

  function supprimerTache(id) {
    settaches(taches.filter((tch) => tch.id !== id));
  }

  return (
    <div>
      <h1>Liste de tâches</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (nouvelleTache === "") return;

          const nouvelleTacheObj = {
            id: Date.now(),
            titre: nouvelleTache,
            statut: "En cours",
          };

          settaches([...taches, nouvelleTacheObj]);
          setNouvelleTache("");
        }}
      >
        <input
          type="text"
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}/>

        <button type="submit">Ajouter</button>
      </form>

      {taches.length === 0 ? (
        <p>Aucune tâche pour le moment</p>
      ) : (
        taches.map((tch) => (
          <Tache key={tch.id} tache={tch} onDelete={supprimerTache} />
        ))
      )}
      <p>
        {taches.filter((tch) => tch.statut !== "Terminé").length} tâche(s)
        restante(s) sur {taches.length}
      </p>
    </div>
  );
}

export default ListeTaches;
