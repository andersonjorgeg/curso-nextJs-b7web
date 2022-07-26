import { Layout } from '../components/Layout';
import Head from 'next/head';
import Styles from '../styles/usuarios.module.css';
import api from '../libs/api';
import { User } from '../types/User';

type Props = {
  users: User[];
}

const Usuarios = ({ users }: Props ) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Usuários</title>
        </Head>
        <h1>Página Usuários</h1>

        {/* Consultar API criada nas aulas */}
        <ul>
          {users.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>


      </div>
    </Layout>
  )
}

// server side rendering
export const getServerSideProps = async () => {

  // DRY - Don't Repeat Yourself
  // DRY - serve para não repetir código
  const users = await api.getAllUsers(0);
  

  return {
    props: {
      users
    }
  }
}

export default Usuarios;