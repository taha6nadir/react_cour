import { useState } from "react";
import "./RecipeItem.css";
function RecipeItem() {
  const [recettes,setrecettes] = useState([
    {
      nom: "mangue",
      image:"/img/mangue.png",
      categorie: "Boisson",
      list_ingr: ["mangue", "lait d'amande", "miel"],
      description: "boisson fraiche..",
      niveau: 1,
    },
    {
      nom: "tacos",
      image:"/img/tacos.png",
      categorie: "Plat",
      list_ingr: ["tortialla", "tomate", "poulet"],
      description: "un tacos gourment et delicieux",
      niveau: 4,
    },
  ]);
  function supprimer(index) {
    const newRecettes = [...recettes];
    newRecettes.splice(index, 1);
    setrecettes(newRecettes);
  }

  return(
    <div>
        {recettes.map((recette,index)=>(
            <div key={index} className="contenaire">
                <img src={recette.image} alt="photo" />
                <div className="titre_categ">
                    <h4 className="nom">{recette.nom}</h4>
                    <p className="categorie">{recette.categorie}</p>
                </div>
                <p className="description">{recette.description}</p>
                <div className="list_ingr">
                    <h5>Ingrédients:</h5>
                    <ul>
                        {recette.list_ingr.map((ingr,index)=>(
                            <li key={index}>{ingr}</li>
                        ))}
                    </ul>
                </div>
                <p className="niveau">Difficulté: {recette.niveau}</p>
                <div className="btn">
                    <button className="btn_modif">Modifier</button>
                    <button className="btn_dupliquer" >Dupliquer</button>
                    <button className="btn_suppr" onClick={() => supprimer(index)}>Supprimer</button>
                </div>
            </div>
        ))}
        
    </div>
  )
}
export default RecipeItem;
