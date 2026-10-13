import Header from "../header/header.jsx";
import "./detail.css";

function detail(props) {
  return (
    <div className="card identity-card">
      <Header />
      <p>studentid:{props.id}</p>
      <p>class:{props.class}</p>
      <p>section:{props.section}</p>
      <ul>
        {props.students.map((Stg, index) => (
          <li key={index}>{Stg}</li>
        ))}
      </ul>
    </div>
  );
}
export default detail;
