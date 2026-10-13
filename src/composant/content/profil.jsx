import Detail from "../content/detail.jsx";
import Generale from "../content/general.jsx";
import Other from "../content/other.jsx";
import "./profil.css";

function profil(){
    return(
        <div className="profile-layout" id="profile">
            <Detail />
            <div className="profile-main">
                <Generale />
                <Other />
            </div>
        </div>
    )
}
export default profil;