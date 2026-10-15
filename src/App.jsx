import Gestion from "./gestion";
import { useState } from "react";
function App() {
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");
  const [street, setstreet] = useState("");
  const [addres, setaddres] = useState("");
  const [city, setcity] = useState("");
  const [cod_zip, setcod_zip] = useState("");
  const [tel, settel] = useState("");
  const [mail, setmail] = useState("");
  const [state, setstate] = useState("");
  const [level, setlevel] = useState("");
  console.log("hi");
  return (
    <div>
      <header>
        <h1>memebrship registration</h1>
      </header>
      <form>
        first name:
        <input
          name="first"
          type="text"
          value={first}
          onChange={(e) => setfirst(e.target.value)}
          required
        />
        <br />
        <br />
        last name:
        <input
          name="last"
          type="text"
          value={last}
          onChange={(e) => setlast(e.target.value)}
          required
        />
        <br />
        <br />
        street adresse:
        <input
          name="street"
          type="text"
          value={street}
          onChange={(e) => setstreet(e.target.value)}
          required
        />
        <br />
        <br />
        address line:
        <input
          name="addres"
          value={addres}
          onChange={(e) => setaddres(e.target.value)}
          type="text"
        />
        <br />
        <br />
        city:
        <input
          name="city"
          type="text"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          required
        />
        <br />
        <br />
        state:
        <select
          name="state"
          value={state}
          onChange={(e) => setstate(e.target.value)}
          required
        >
          <option value="">Choisir un état</option>
          <option value="American">American</option>
          <option value="France">France</option>
          <option value="Morocco">Morocco</option>
        </select>
        <br />
        <br />
        Zip code:
        <input
          name="cod_zip"
          type="text"
          value={cod_zip}
          onChange={(e) => setcod_zip(e.target.value)}
          required
        />
        <br />
        <br />
        phone number
        <input
          name="tel"
          type="tel"
          value={tel}
          onChange={(e) => settel(e.target.value)}
          required
        />
        <br />
        <br />
        email:
        <input
          name="mail"
          type="email"
          value={mail}
          onChange={(e) => setmail(e.target.value)}
          required
        />
        <br />
        <br />
        choose your memebrship level: <br />
        <input
          name="hello"
          type="radio"
          value="Bronze"
          checked={level === "Bronze"}
          onChange={(e) => setlevel(e.target.value)}
        />
        bronze
        <input
          name="hello"
          type="radio"
          value="Silver"
          checked={level === "Silver"}
          onChange={(e) => setlevel(e.target.value)}
        />
        silver
        <input
          name="hello"
          type="radio"
          value="Gold"
          checked={level === "Gold"}
          onChange={(e) => setlevel(e.target.value)}
        />
        Gold
        <input
          name="hello"
          type="radio"
          value="Platinum"
          checked={level === "Platinum"}
          onChange={(e) => setlevel(e.target.value)}
        />
        Platinum
        <br />
        <br />
      </form>
      <Gestion first={first} />
    </div>
  );
}
export default App;
