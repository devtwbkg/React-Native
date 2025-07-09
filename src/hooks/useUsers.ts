import { useEffect, useState } from 'react';
import { api } from '../api/axiosInstance';
import { User } from '../interfaces';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get<User[]>('/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
};
