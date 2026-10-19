function PasDincr(props){
    return(
    <div>
    <button onClick={()=>props.setPasDecrementation(1)} >1</button>
    <button onClick={()=>props.setPasDecrementation(2)} >2</button>
    <button onClick={()=>props.setPasDecrementation(3)} >3</button>
    </div>
    )
}
export default PasDincr;