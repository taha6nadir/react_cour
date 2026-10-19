import { useState } from "react";
import Valeur from "./Valeur";
import PasIncr from "./pasincrimenter";
import PasDincr from "./pasdesincrimenter";
import "./Counter.css";

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
        <main className="counter-page">
            <Valeur counter={cnt} />
            <div className="counter-actions">
                <button type="button" onClick={incr}>Incrémenter</button>
                <button type="button" onClick={decr}>Décrémenter</button>
                <button type="button" onClick={initial}>Initialiser</button>
            </div>
            <PasIncr setPasIncrementation={setPasIncrementation} />
            <PasDincr setPasDecrementation={setPasDecrementation} />
        </main>
    );
}

export default Counter