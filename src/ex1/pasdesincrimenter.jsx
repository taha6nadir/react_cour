function PasDincr(props){
    return(
    <fieldset className="counter-step-group">
        <legend>Pas de décrémentation</legend>
        <div className="counter-step-options">
            <button type="button" onClick={()=>props.setPasDecrementation(1)}>1</button>
            <button type="button" onClick={()=>props.setPasDecrementation(2)}>2</button>
            <button type="button" onClick={()=>props.setPasDecrementation(3)}>3</button>
            <button type="button" onClick={()=>props.setPasDecrementation(4)}>4</button>
        </div>
    </fieldset>
    )
}
export default PasDincr;