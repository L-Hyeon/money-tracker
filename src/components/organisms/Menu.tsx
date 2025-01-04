import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {}, []);

  return <nav>Menu</nav>;
};

export default Menu;
