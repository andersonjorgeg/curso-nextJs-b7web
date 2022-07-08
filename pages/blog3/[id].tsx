/* 
* getStaticPaths é um array de objetos que contém as informações de cada página
*/

import { GetStaticProps } from 'next';
import { Post } from '../../types/Post';
import { ParsedUrlQuery } from 'querystring';
import { Layout } from '../../components/Layout';
import Head from 'next/head';

type Props = {
  post: Post;
}

const BlogItem = ({ post }: Props) => {
  return (
    <Layout>
      <div>
        <Head>
          {/* SEO - dinâmica */}
          <title>{post.title}</title>
          <meta name="title" content={post.title}/>
          <meta name="description" content={post.body.substring(0, 25) + '...'}/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content={`http://localhost:3000/blog3/${post.id}`}/>
          <meta property="og:title" content={post.title}/>
          <meta property="og:description" content={post.body.substring(0, 25) + '...'}/>
          <meta property="og:image" content="http://localhost:3000/xicara.jpg"/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content={`http://localhost:3000/blog3/${post.id}`}/>
          <meta property="twitter:title" content={post.title}/>
          <meta property="twitter:description" content={post.body.substring(0, 25) + '...'}/>
          <meta property="twitter:image" content="http://localhost:3000/xicara.jpg"></meta>
        </Head>
        <h1>Blog</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </Layout>
  )
}

export default BlogItem;

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  // criar lista de paths
  const paths = posts.map(post => ({
    params: { id: post.id.toString()}
  }));

  // link com a explicação do fallback 
  // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
  return { paths, fallback: false };
}

// fazer o typeScript do id
interface Iparams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {

  // usando o Iparams para obter o id
  const { id } = context.params as Iparams;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  // mandar o post para props
  return { 
    props: { 
      post
    }
  }

}
