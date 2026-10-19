import { useState } from "react";
function Student() {
  const [isVisible, setisVisible] = useState(false);
  return (
    <div>
      <div hidden={!isVisible}>
        <p>nom:etudian:taha</p>
        <p>filiere: develepment</p>
      </div>
      <button onClick={()=>(setisVisible(!isVisible))}>
        {isVisible? 'Masquer mon profil': 'Afficher mon profil'}
      </button>
      <p>{!isVisible? ' Les informations sont masquées ':"" }</p>
    </div>
  );
}
export default Student;
