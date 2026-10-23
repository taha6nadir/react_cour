function RecipeFilter(props){
    return(
        <div className="recipe-filter">
            <input type="text" placeholder="Rechrcher..."/>
            <select>
                <option value="all">Tout</option>
                <option value="Plat">Plat</option>
                <option value="Boisson">Boisson</option>
                <option value="Entrée">Entrée</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    )
}
export default RecipeFilter;