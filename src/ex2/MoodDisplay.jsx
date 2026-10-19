function MoodDisplay(props) {
    return (
        <div className="mood-display" style={{ backgroundColor: props.color }}>
            <p >aujourd'hui, je me sens {props.humeur}</p>
        </div>
    );
}
export default MoodDisplay;