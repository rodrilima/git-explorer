import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

import {
  Title, Form, Repositories, Error,
} from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');

  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');
    if (storagedRepositories) return JSON.parse(storagedRepositories);
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!newRepo) return setInputError('Enter the author/name of the repository');
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      setNewRepo('');
      setInputError('');
      return setRepositories([...repositories, repository]);
    } catch (err) {
      return setInputError('Error searching for this repository');
    }
  }

  return (
    <>

      <img src={logo} alt="Github Explorer" />

      <Title>Explore Repositories on Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Type the name of the repository"
        />
        <button type="submit">Search</button>
      </Form>

      { inputError && <Error>{inputError}</Error> }

      <Repositories>
        {repositories.map((repository) => (
          <Link to={`/repositories/${repository.full_name}`} key={repository.full_name}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>

    </>
  );
};

export default Dashboard;
