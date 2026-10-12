import Logo from "../../images/logo.svg"
function header() {
  return (
    <div>
      <img src={Logo} alt="logo" style={{borderRadius: '50%', width: "20%"} } />
      <h1 style={{margin:'90px'}}>hello</h1>
    </div>
  );
}
export default header