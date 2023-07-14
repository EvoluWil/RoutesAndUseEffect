import { NavLink } from "react-router-dom";

import './Header.css';

import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="TrybeShoes" />

      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <NavLink className='link' to='/'>
          <strong>HOME</strong>
        </NavLink>
        <NavLink className='link' to='/men'>
          <strong>MASCULINO</strong>
        </NavLink>
        <NavLink className='link' to='/women'>
          <strong>FEMININO</strong>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
