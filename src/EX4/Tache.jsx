
function Tache(props) {
  return (
    <div>
      <p
        style={{
          textDecoration:
            props.tache.statut === "Terminé"
              ? "line-through"
              : "none",}}
      >
        {props.tache.titre}
      </p>
      <p>Statut : {props.tache.statut}</p>
      <button onClick={() => props.onDelete(props.tache.id)}>
        Supprimer
      </button>
    </div>
  );
}

export default Tache;
