import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1d1d20] shadow-md fixed top-0 left-0 w-full z-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">🌸 B-Bou</span>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/tips">Conseils</NavLink>
            <NavLink to="/compos">Compos</NavLink>
            <NavLink to="/clips">Clips</NavLink>
            <NavLink to="/pisslow-meter">Pisslow-meter</NavLink>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#1d1d20] py-2 px-4 space-y-2 shadow-md">
          <div onClick={() => setIsOpen(false)}>
            <NavLink to="/" mobile>
              Accueil
            </NavLink>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <NavLink to="/tips" mobile>
              Conseils
            </NavLink>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <NavLink to="/compos" mobile>
              Compos
            </NavLink>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <NavLink to="/clips" mobile>
              Clips
            </NavLink>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <NavLink to="/pisslow-meter" mobile>
              Pisslow-meter
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  to,
  children,
  mobile,
}: {
  to: string;
  children: string;
  mobile?: boolean;
}) => (
  <Link
    to={to}
    className={`relative block px-3 py-2 rounded-md text-white group hover:text-white transition-all duration-300 ease-in-out
    ${mobile ? "w-full text-center border-b border-white" : ""}`}
  >
    {children}
    <span
      className={` 
      ${
        !mobile
          ? "absolute left-1/2 bottom-0.5 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-5/6"
          : ""
      }`}
    ></span>
  </Link>
);

export default Navbar;
