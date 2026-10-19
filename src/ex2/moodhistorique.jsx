function MoodHistorique(props) {
  return (
    <div>
      <h2>Historique des humeurs</h2>
      {props.humeurs.map((item, index) => (
        <div key={index} className="mood-history-item">
          <div
            className="mood-history-label"
            style={{ backgroundColor: item.color }}
          >
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoodHistorique;
