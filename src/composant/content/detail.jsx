import Header from "../header/header.jsx";
import "./detail.css";

function detail() {
  const student = { id: 2132214, class: 5, section: "abcd" };

  return (
    <div className="card identity-card">
      <Header />
      <p>studentid:{student.id}</p>
      <p>class:{student.class}</p>
      <p>section:{student.section}</p>
    </div>
  );
}
export default detail;
