import Detail from "../content/detail.jsx";
import Generale from "../content/general.jsx";
import Other from "../content/other.jsx";
import "./profil.css";

function profil(){
    let student ={id: 2132214, class: 5, section: "abcd" }
    let students = ["taha", "nadir", "saidi"];
    return(
        <div className="profile-layout" id="profile">
            <Detail students={students} id={student.id} class={student.class} section={student.section}/>
            <div className="profile-main">
                <Generale />
                <Other />
            </div>
        </div>
    )
}
export default profil;