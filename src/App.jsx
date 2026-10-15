function App() {
  return (
    <div>
      <header>
        <h1>memebrship registration</h1>
      </header>
      <form>
        first name: <input name="first" type="text" required />
        <br />
        <br />
        last name: <input name="last" type="text" required />
        <br />
        <br />
        street adresse: <input name="street" type="text" required />
        <br />
        <br />
        address line: <input name="addres" type="text" />
        <br />
        <br />
        city: <input name="city" type="text" required />
        <br />
        <br />
        state:
        <select name="state" required>
          <option value="">Choisir un état</option>
          <option value="American">American</option>
          <option value="France">France</option>
          <option value="Morocco">Morocco</option>
        </select>
        <br />
        <br />
        Zip code: <input name="cod_zip" type="text" required />
        <br />
        <br />
        phone number <input name="tel" type="tel" required />
        <br />
        <br />
        email: <input name="mail" type="email" required />
        <br />
        <br />
        choose your memebrship level: <br />
        <input name="hello" type="radio" required />
        bronze
        <input name="hello" type="radio" />
        silver
        <input name="hello" type="radio" />
        Gold
        <input name="hello" type="radio" />
        Platinum
        <br />
        <br />
      </form>
    </div>
  );
}
export default App;
