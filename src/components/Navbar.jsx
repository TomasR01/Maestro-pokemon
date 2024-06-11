import { NavLink } from "react-router-dom";

const Navbar = () => {

  const setActiveClass  = ({isActive}) => isActive ? 'active' : 'inactive';

  return (
    <nav>
      <span><img className="logo" src='https://e1.pxfuel.com/desktop-wallpaper/384/963/desktop-wallpaper-pokeball-pokemon-ball-png-pokebola.jpg' /></span>
      <div className="links">
        <NavLink to="/" className={setActiveClass} > Home </NavLink>
        <NavLink to="/pokemon" className={setActiveClass} > Pokemón </NavLink>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;