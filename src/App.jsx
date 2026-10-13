import Profil from "./composant/content/profil.jsx";
import Navigation from "./composant/navigation/navigation.jsx";
import Footer from "./composant/footer/footer.jsx";

function App() {
  return (
    <div className="app-shell" id="home">
      <Navigation />
      <main className="page-content">
        <header className="page-heading">
          <h1>Student Profile Page</h1>
          <p>A responsive student profile page design.</p>
        </header>
        <Profil />
      </main>
      <Footer />
    </div>
  );
}

export default App;
