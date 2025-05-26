import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <nav className="w-full max-w-[1520px] h-16 mx-auto px-20 flex items-center justify-between py-3 bg-primary">
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg tracking-tight">MyApp</span>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      {/* Mobile menu button (optional, for future expansion) */}
      <div className="md:hidden">{/* Hamburger menu could go here */}</div>
      <Button>Login</Button>
    </nav>
  );
};

export default Navbar;
