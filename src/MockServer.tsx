import React, { memo } from 'react';
import axios from 'axios';

export const MockServer: React.VFC = memo(() => {
  const [clicked, setClicked] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [error, setError] = React.useState('');

  const fetchUser = async () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => {
        setUsername(res.data.username);
        setClicked(true);
      })
      .catch(() => {
        setError('Fetching Failed !');
      });
  };
  const buttonText = clicked ? 'Loaded' : 'Start Fetch';

  return (
    <div>
      <button type='button' onClick={fetchUser} disabled={clicked}>
        {buttonText}
      </button>
      {username && <h3>{username}</h3>}
      {error && <p data-testid='error'>{error}</p>}
    </div>
  );
});
