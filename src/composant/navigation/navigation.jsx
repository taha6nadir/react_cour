import "./navigation.css";

function navigation() {
  return (
    <nav className="site-navigation" aria-label="Main navigation">
      <a className="navigation-brand" href="#home">Student Profile</a>
      <ul className="navigation-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default navigation;