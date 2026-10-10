import logo from "./logo.svg";
import styles from "./app.module.css";
function App() {
  let ageStg = 19;
  // let logore =require("./logo192.png");
  let stylelist={color:"red",backgroundColor:'yellow', margin: '10px'};
  let stg = {
    nom: "raiess",
    prenom: "mohamed",
    group: 201,
    filliere: "dev",
    age: ageStg,
  };

  function isAdult() {
    return stg.age > 20 ? "adult" : "mineur";
  }
  return (
    <div>
      <p style={stylelist}>nom : {stg.nom}</p>
      <p  style={{color:"black",backgroundColor:'orange', margin: '10px'}}>prenom : {stg.prenom}</p>
      <p  style={{color:"white",backgroundColor:'red', margin: '10px'}}>group : {stg.group}</p>
      <p  style={{color:"red",backgroundColor:'blue', margin: '10px'}}>
        age : {stg.age}-----{ageStg}
      </p>
      <p  className={styles.test}>is adult :{isAdult()}</p>
      <img src={logo} alt="hi" />
      {/* <img src={logore} /> */}
    </div>
  );
}
export default App;