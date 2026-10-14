// import logo from "./logo.svg";
// import styles from "./app.module.css";
// function App() {
//   let ageStg = 19;
//   // let logore =require("./logo192.png");
//   let stylelist={color:"red",backgroundColor:'yellow', margin: '10px'};
//   let stg = {
//     nom: "raiess",
//     prenom: "mohamed",
//     group: 201,
//     filliere: "dev",
//     age: ageStg,
//   };
//   function isAdult() {
//     return stg.age > 20 ? "adult" : "mineur";
//   }
//   return (
//     <div>
//       <p style={stylelist}>nom : {stg.nom}</p>
//       <p  style={{color:"black",backgroundColor:'orange', margin: '10px'}}>prenom : {stg.prenom}</p>
//       <p  style={{color:"white",backgroundColor:'red', margin: '10px'}}>group : {stg.group}</p>
//       <p  style={{color:"red",backgroundColor:'blue', margin: '10px'}}>
//         age : {stg.age}-----{ageStg}
//       </p>
//       <p  className={styles.test}>is adult :{isAdult()}</p>
//       <img src={logo} alt="hi" />
//       {/* <img src={logore} /> */}
//     </div>
//   );
// }
// import Visiteur from './visiteur'
// import Client from './client'
// function app(){
//   let connect=true
//   let nom="taha";
//   if (connect=false){
//     return(
//       <div>
//         <Visiteur/>
//       </div>
//     )

//   }
//   else {
//     return(
//       <div>
//         <Client nom={nom}/>
//       </div>
//     )
//   }

// }

// import { useState } from "react";
// function App() {
//   const [cont, setcont] = useState(9);
//   function plus() {
//     setcont(cont + 3);
//   }
//   function moin() {
//     setcont(cont - 2);
//   }
//   let connect = true;
//   let nom = "taha";
//   if ((connect = false)) {
//     return (
//       <div>
//         <Visiteur />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <Client nom={nom} />
//         <div>
//           <button onClick={moin}>-</button>
//           <div>{cont}</div>
//           <button onClick={plus}>+</button>
//         </div>
//       </div>
//     );
//   }
// }


// import { useState } from 'react';
// function App(){
//   const [nb,setnb]=useState(9)
//   function plus(){
//     setnb(nb+2)
//   }
//   function moin(){
//     setnb(nb-5)
//   }
//   return(
//     <div>
//       <button onClick={plus}>+</button>
//       <div>{nb}</div>
//       <button onClick={moin}>-</button>
//     </div>
//   )
// }
// export default App;