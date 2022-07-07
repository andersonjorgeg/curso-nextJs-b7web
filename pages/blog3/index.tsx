/* 
* Aula sobre SSG (Static Site Generation) - Página estática
* usando os dados de uma API externa usando o Next.js
*/
import Head from 'next/head';
import { Layout } from '../../components/Layout';
import { Post } from '../../types/Post';

type Props = {
  name: string;
  posts: Post[];
}

const Blog3 = ({ name, posts }: Props) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Blog 3</title>
        </Head>
        <h1>Página Blog3</h1>
        <p>Blog de {name}</p>

        <ul>
          {posts.map((post) => (
              <li key={post.id}>
                <a href={`/blog3/${post.id}`}>
                  <h2>{post.title}</h2>
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </Layout>
  )
}

export default Blog3;

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      name: 'Anderson',
      posts
    },
    revalidate: 7200 // 2 horas
  }
}
