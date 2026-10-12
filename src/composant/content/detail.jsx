import Header from "../header/header.jsx";
function detail() {
  let student = { id: 2132214, class: 5, section: "abcd" };
  return (
    <div>
      <Header />
      <p>studentid:{student.id}</p>
      <p>class:{student.class}</p>
      <p>section:{student.section}</p>
    </div>
  );
}
export default detail;
