import { useState } from "react";
import Valeur from "./Valeur";
import PasIncr from "./pasincrimenter";
import PasDincr from "./pasdesincrimenter";
function Counter() {
    const [cnt, setcnt] = useState(0);
    const [pasIncrementation, setPasIncrementation] = useState(2);
    const [pasDecrementation, setPasDecrementation] = useState(2);

    function initial() {
        setcnt(0);
    }

    function incr() {
        setcnt((valeurActuelle) => valeurActuelle + pasIncrementation);
    }

    function decr() {
        setcnt((valeurActuelle) => valeurActuelle - pasDecrementation);
    }

    return (
        <div>
            <Valeur counter={cnt} />
            <button type="button" onClick={decr}>Décrémenter</button>
            <button type="button" onClick={incr}>Incrémenter</button>
            <button type="button" onClick={initial}>Initialiser</button>
            <PasIncr setPasIncrementation={setPasIncrementation} />
            <PasDincr setPasDecrementation={setPasDecrementation} />
        </div>
    );
}

export default Counter