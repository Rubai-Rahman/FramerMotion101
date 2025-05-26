import { Outlet } from 'react-router-dom';
import Navbar from './Navar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
