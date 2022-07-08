import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Layout } from '../components/Layout';
import XicaraImage from '../public/xicara.jpg';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* SEO - estática */}
          <title>Next Primeiro Site</title>
          <meta name="title" content="Next Primeiro Site"/>
          <meta name="description" content="Esta é uma descrição descritiva do site kkkk"/>

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="http://localhost:3000/"/>
          <meta property="og:title" content="Next Primeiro Site"/>
          <meta property="og:description" content="Esta é uma descrição descritiva do site kkkk"/>
          <meta property="og:image" content="http://localhost:3000/xicara.jpg"/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="http://localhost:3000/"/>
          <meta property="twitter:title" content="Next Primeiro Site"/>
          <meta property="twitter:description" content="Esta é uma descrição descritiva do site kkkk"/>
          <meta property="twitter:image" content="http://localhost:3000/xicara.jpg"></meta>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Bem vindo(a) a minha própria página!
          </h1>

          {/* imagem local */}
          <Image 
            src={XicaraImage} 
            alt="xicara"
            width={384}
            height={250}
            className="mt-4"
          />

          {/* imagem remota */}
          {/* <Image
            src="https://www.google.com.br/logos/google.jpg"
            alt="sea"
            width={100}
            height={50}
            className="mt-4"
          /> */}

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </Layout>
  )
}

export default Home
