import { Layout } from '../components/Layout';
import Head from 'next/head';
import Styles from '../styles/usuarios.module.css';

const Usuarios = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Usuários</title>
        </Head>
        <h1>Página Usuários</h1>

        {/* Consultar API criada nas aulas */}


      </div>
    </Layout>
  )
}

// server side rendering
export const getServerSideProps = async () => {

  // DRY - Don't Repeat Yourself
  // DRY - serve para não repetir código
  

  return {
    props: {

    }
  }
}

export default Usuarios;