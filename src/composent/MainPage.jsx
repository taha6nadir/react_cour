import RecipeList from "./RecipeList";
import Help from "./Help";
import RecipeFilter from "./RecipeFilter";
function MainPage() {
  return (
    <div className="page-layout">
      <header className="header">
        <h1>Creative Recipe Builder</h1>
        <RecipeFilter />
        <button className="btn_creer">Créer une nouvelle recette</button>
      </header>
      <Help />
      <RecipeList />
    </div>
  );
}
export default MainPage;
