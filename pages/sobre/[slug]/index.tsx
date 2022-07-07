import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout } from '../../../components/Layout';

const SobreItem = () => {

  // useRouter é um hook que permite acessar as rotas do navegador
  const router = useRouter();

  // useRouter().query é um objeto que contém os parâmetros da rota
  const { slug } = router.query;

  return (
    <Layout>
      <div>
        <Head>
          <title>Sobre - {slug}</title>
        </Head>
        <h1>Página de {slug}</h1>
      </div>
    </Layout>
  )
}

export default SobreItem;
