import { useState } from 'react';

export const MenuLateral = () => {
  const [hiddenMenu, setHiddenMenu] = useState('');

  const handleMenuLateral = () => {
    setHiddenMenu(hiddenMenu ? '' : 'hidden-menu-lateral');
  };
  return (
    <div className='div-menu-lateral'>
      <button onClick={handleMenuLateral} className='button-menu-lateral'></button>
      <ul className={`ul-menu-lateral ${hiddenMenu}`}>
        <li>Home</li>
        <li>Posts</li>
        <li>Fotos</li>
        <li>Quem Somos</li>
        <li>Contatos</li>
      </ul>
    </div>
  );
};
