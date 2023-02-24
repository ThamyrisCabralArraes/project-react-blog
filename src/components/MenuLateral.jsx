import { useState } from 'react';
import { Link } from 'react-router-dom';

export const MenuLateral = () => {
  const [hiddenMenu, setHiddenMenu] = useState('');

  const handleMenuLateral = () => {
    setHiddenMenu(hiddenMenu ? '' : 'hidden-menu-lateral');
  };
  return (
    <div className='div-menu-lateral'>
      <button onClick={handleMenuLateral} className='button-menu-lateral'></button>
      <ul className={`ul-menu-lateral ${hiddenMenu}`}>
        <li>
          <Link to={'/'} className='link-menu-lateral'>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/posts'} className='link-menu-lateral'>
            Posts
          </Link>
        </li>
        <li>
          <Link className='link-menu-lateral'>Fotos</Link>
        </li>
        <li>
          <Link className='link-menu-lateral'>Quem Somos</Link>
        </li>
        <li>
          <Link className='link-menu-lateral'>Contatos</Link>
        </li>
      </ul>
    </div>
  );
};
