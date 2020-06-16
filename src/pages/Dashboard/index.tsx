import React from 'react';
import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="github" />
      <Title>Explore Repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/46356996?s=460&u=056040d09322e9876e2563392621435f2c6a367f&v=4"
            alt="githubProfile"
          />
          <div>
            <strong>Fernando Santos</strong>
            <p>Conteudo do Repositorio contendo tudo que vem escrito</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/46356996?s=460&u=056040d09322e9876e2563392621435f2c6a367f&v=4"
            alt="githubProfile"
          />
          <div>
            <strong>Fernando Santos</strong>
            <p>Conteudo do Repositorio contendo tudo que vem escrito</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/46356996?s=460&u=056040d09322e9876e2563392621435f2c6a367f&v=4"
            alt="githubProfile"
          />
          <div>
            <strong>Fernando Santos</strong>
            <p>Conteudo do Repositorio contendo tudo que vem escrito</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/46356996?s=460&u=056040d09322e9876e2563392621435f2c6a367f&v=4"
            alt="githubProfile"
          />
          <div>
            <strong>Fernando Santos</strong>
            <p>Conteudo do Repositorio contendo tudo que vem escrito</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
