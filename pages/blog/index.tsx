/* 
* Aula sobre SSG (Static Site Generation) - Página estática
* 
*/

import Head from "next/head";
import { Layout } from "../../components/Layout";

// 4. fazer a tipagem dos dados com o typescript
type Props = {
  name: string;
}

// 3. usar a props para passar dados para o componente
const Blog = ({ name }: Props) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Blog</title>
        </Head>
        <h1>Página Blog</h1>
        {/* 5. usar a props para passar dados para o componente */}
        <p>Blog de {name}</p>
      </div>
    </Layout>
  )
}

// getStaticProps é um método que é executado antes de renderizar a página e que retorna um objeto com os dados que serão usados para renderizar a página.

// 1. criar a função getStaticProps e exportá-la para que seja usada pelo Next.js
export const getStaticProps = () => {

  // 2. retornar um objeto com os dados que serão usados para renderizar a página
  return {
    props: {
      name: 'Anderson'
    }
  }
}

export default Blog;
