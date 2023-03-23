import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"


export const SharedLayout = () => {
    return <div>
    <ul>
    <Link to='/'>Home</Link>
    <Link to='/movies'>Movies</Link>
    </ul>
    <Outlet/>
    </div>

}