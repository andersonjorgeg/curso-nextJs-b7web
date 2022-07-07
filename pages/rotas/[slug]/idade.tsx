import Head from 'next/head';
import { useRouter } from 'next/router'
import { Layout } from '../../../components/Layout'

const IdadeRota = () => {

  const router = useRouter();
  const { slug} = router.query;

  return (
    <Layout>
      <div>
        <Head>
          <title>Rotas - {slug}</title>
        </Head>
        <h1>{slug} tem 80 anos</h1>
      </div>
    </Layout>
  )
}

export default IdadeRota;