function PasIncr(props) {
    return(
    <fieldset className="counter-step-group">
        <legend>Pas d'incrémentation</legend>
        <div className="counter-step-options">
            <button type="button" onClick={()=>props.setPasIncrementation(1)}>1</button>
            <button type="button" onClick={()=>props.setPasIncrementation(2)}>2</button>
            <button type="button" onClick={()=>props.setPasIncrementation(3)}>3</button>
            <button type="button" onClick={()=>props.setPasIncrementation(4)}>4</button>
        </div>
    </fieldset>
    )
}
export default PasIncr