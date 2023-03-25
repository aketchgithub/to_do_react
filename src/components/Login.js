import React, { useState } from 'react';

function LoginForm( {onCancel}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

        // Make API call to authenticate user,with the assumption that our api has an endpoint "/api/login"
       const fetchUsers = async () => {
        const response = await  fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
      
        // Check if authentication was successful
        if (response.ok) {
          // Redirect user to main page
          window.location.href = '/';
        } else {
          // Display error message to user
          const errorMessage = await response.text();
          alert(errorMessage);
        }
       };
       fetchUsers();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
      <button type='button' onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default LoginForm;
