import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className="w-full h-16 mx-auto px-20 flex items-center justify-between py-3 bg-white">
      <div className="flex items-center gap-2">
        <span className=" text-lg tracking-tight">iRepair</span>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <Button>Login</Button>
      </div>
      {/* Mobile menu button (optional, for future expansion) */}
      <div className="md:hidden">{/* Hamburger menu could go here */}</div>
    </nav>
  );
};

export default Navbar;
