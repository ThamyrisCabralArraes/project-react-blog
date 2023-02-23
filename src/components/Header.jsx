import { useState } from 'react';
import { SignIn } from './SignIn';

export const Header = () => {
  const [follow, setFollow] = useState('follow');
  const [unfollow, setUnfollow] = useState(' + Seguir');
  const [displayNone, setDisplayNone] = useState('displayNone');

  const handleFollow = () => {
    setFollow(follow === 'follow' ? 'unfollow' : 'follow');
    setUnfollow(unfollow === ' + Seguir' ? 'Seguindo' : ' + Seguir');
  };

  const handleShowSingIn = () => {
    setDisplayNone(displayNone ? '' : 'displayNone');
  };

  return (
    <div>
      <div className='div-header'>
        <div className='div-header-lateral'>
          {' '}
          <h3> 🌎 BlogNerdsNaGringa</h3>
          <p className='meu-nome'>
            Thamyris Isabella Cabral e Silva{' '}
            <button onClick={handleFollow} className={follow}>
              {unfollow}
            </button>
          </p>{' '}
        </div>
        <div className='div-buttons-header'>
          <button className='sign-up'>Sign Up</button>
          <button onClick={handleShowSingIn} className='log-in'>
            Log In
          </button>
        </div>
      </div>
      <div className={`box-login ${displayNone}`}>
        <SignIn />
      </div>
    </div>
  );
};
