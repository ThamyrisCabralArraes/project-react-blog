export const SignIn = () => {
  return (
    <div className='box-sign'>
      <div className='div-input-button '>
        <p>
          <label htmlFor='name'>
            <input className='input-signin' type='text' placeholder='Login' />
          </label>
        </p>
        <p>
          <label htmlFor='password'>
            <input className='input-signin' type='text' placeholder='password' />
          </label>
        </p>
        <button className='button-Login'> Entrar</button>
      </div>
    </div>
  );
};
