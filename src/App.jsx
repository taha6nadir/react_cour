import Profil from "./composant/content/profil.jsx";
import Navigation from "./composant/navigation/navigation.jsx";
import Footer from "./composant/footer/footer.jsx"
function App() {
  return (
    <div>
      <h1 style={{margin:'0% 50%'}}>profile student</h1>
      <Navigation />
      <Profil />
      <Footer />
    </div>
  );
}

export default App;
