function PasIncr(props) {
    return(
    <div>
    <button onClick={()=>props.setPasIncrementation(1)} >1</button>
    <button onClick={()=>props.setPasIncrementation(2)} >2</button>
    <button onClick={()=>props.setPasIncrementation(3)} >3</button>
    </div>
    )
}
export default PasIncr