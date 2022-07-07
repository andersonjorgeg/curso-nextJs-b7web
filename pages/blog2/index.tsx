/* 
* Aula sobre SSG (Static Site Generation) - Página estática
* usando os dados de uma API externa usando o Next.js
*/
// 3. criar e importar o typescript dos dados
import { Post } from '../../types/Post';

// 6. tipar o props
type Props = {
  name: string;
  posts: Post[];
}

// 7. passar a props para o componente
const Blog2 = ({ name, posts }: Props) => {
  return (
    <div>
      <h1>Página Blog2</h1>
      <p>Blog de {name}</p>

      {/* 8. renderizar os posts */}
      <ul>
        {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          )
        )}
      </ul>

    </div>
  )
}

export default Blog2;

// 1. transformar a função em asicrona
// async - transformar a função em asicrona
export const getStaticProps = async () => {

  // 2. fazer a requisição para a API externa usando fetch
  // fetch - é um método que permite fazer requisições HTTP
  // sintaxe: fetch(url, [options])
  // await - espera que a requisição seja concluída
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // json() - é um método que converte o resultado da requisição em json
  // 4. usar o type 
  const posts: Post[] = await res.json();

  return {
    props: {
      name: 'Anderson',
      // 5. retornar o dado
      posts
    },
    // 9. usar o revalidate para estipular o tempo em que a página será recarregada
    revalidate: 10 // 10 segundos
  }
}
