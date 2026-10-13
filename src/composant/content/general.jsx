import "./general.css";

function generale() {
  return (
    <section className="card information-card">
      <h2 className="section-heading">General Information</h2>
      <table className="information-table">
        <tbody>
          <tr><th scope="row">Roll</th><td>:</td><td>125</td></tr>
          <tr><th scope="row">Academic Year</th><td>:</td><td>2020</td></tr>
          <tr><th scope="row">Gender</th><td>:</td><td>Male</td></tr>
          <tr><th scope="row">Religion</th><td>:</td><td>Group</td></tr>
          <tr><th scope="row">Blood</th><td>:</td><td>B+</td></tr>
        </tbody>
      </table>
    </section>
  );
}
export default generale;