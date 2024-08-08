import { NavLink } from "react-router-dom"

const Nav = ()=>{
  return(
    <div id="navbar">
       
            <h1 id='logo'>🤯</h1>
    <NavLink className="link" to="/">Home</NavLink>
    <NavLink className="link" to="/form">Form</NavLink>
    </div>
  )
}
export default Nav