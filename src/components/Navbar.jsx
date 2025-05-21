import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className = "flex items-center justify-between w-full h-20 px-10 bg-slate-100 backdrop-blur-md shadow-md">
        <NavLink to = "/" className = "w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md ">
            <p className = "blue-text-gradient">RA</p>
        </NavLink>
        
        <nav className = "flex text-lg gap-7 font-medium">
            <NavLink to = "/about" className={({ isActive }) => (isActive ? "text-purple-300" : "text-black")}>
                About
            </NavLink>
            <NavLink to = "/projects" className={({ isActive }) => (isActive ? "text-purple-300" : "text-black")}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar