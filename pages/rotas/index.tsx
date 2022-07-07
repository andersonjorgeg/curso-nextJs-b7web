/* 
* Aula sobre - Rotas - useRouter
*/

import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../../components/Layout';

const Rotas = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Rotas</title>
        </Head>
        <h1>Rotas</h1>
        <ul>
          <li><Link href="/rotas/roberto">Roberto</Link></li>
          <li><Link href="/rotas/carlos">Carlos</Link></li>
          <li><Link href="/rotas/monique">Monique</Link></li>
        </ul>
      </div>
    </Layout> 
  )
} 

export default Rotas;
