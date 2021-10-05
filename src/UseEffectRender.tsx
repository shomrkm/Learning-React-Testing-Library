import React, { memo } from 'react';
import axios from 'axios';

interface Props {}

export const UseEffectRender: React.VFC<Props> = memo(() => {
  const [user, setUser] = React.useState<any>(null);
  const fetchJSON = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    return res.data;
  };

  React.useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await fetchJSON();
      setUser(fetchedUser);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : null}
    </div>
  );
});
