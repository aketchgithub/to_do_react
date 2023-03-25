import React from 'react';

function LoginButton({ onClick }) {
  return (
    <button className='btn' onClick={onClick}>Login</button>
  );
}

export default LoginButton;
