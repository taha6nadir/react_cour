import { useState } from "react";
function Textar() {
  const [msge, setmsg] = useState("");
  let cont = msge.length;
  let clr = "black";
  if (cont >= 20) {
    clr = "red";
  }
  return (
    <div>
      <form>
        <textarea
          maxLength={20}
          name="msg"
          id=""
          value={msge}
          onChange={(e) => setmsg(e.target.value)}
        />
      </form>
      <p style={{ color: clr }}>{cont}</p>
      <h2> Aperçu en direct</h2>
      <div>Bonjour {msge}</div>
    </div>
  );
}
export default Textar;
