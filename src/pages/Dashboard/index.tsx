import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Explore Repositórios no Github</Title>
    <Form action="">
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="#">
        <img
          src="https://avatars0.githubusercontent.com/u/37316634?s=460&u=b696cfb7f153a8450c34e76846bfd54c6a0e5118&v=4"
          alt=""
        />
        <div>
          <strong>Titulo/do-repositório</strong>
          <p>Descrição do repositório</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
