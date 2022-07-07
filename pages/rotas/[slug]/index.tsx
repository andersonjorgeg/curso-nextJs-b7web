import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Layout } from '../../../components/Layout';
import Styles from '../../../styles/Home.module.css';

const RotaItem = () => { 

  // * propriedades do useRouter
  const router = useRouter();
  const { slug } = router.query;

  // * métodos do useRouter
  const handleClickPush = () => {
    // router.push() - adiciona no histórico
    router.push(`/rotas/${slug}/idade`);
  }

  const handleClickReplace = () => {
    // router.replace() - substitui o histórico
    router.replace(`/rotas/${slug}/idade`);
  }

  // * eventos do useRouter
  useEffect(() => {
    // executar uma função quando trocar de rota
    // on() - vai ligar o evento
    // routeChangeComplete() - quando trocar de rota
    router.events.on('routeChangeComplete', (url: string) => {
      console.log(`Indo para ${url}`);
    });
    
    // off() - vai desligar o evento
    return () => {
      router.events.off('routeChangeComplete', (url: string) => {
        console.log(`Voltando para ${url}`);
      }
    );}

  }, [])

  return (
    <Layout>
      <div className={Styles.fs30}>
        <Head>
          <title>Rotas - {slug}</title>
        </Head>
        <h1>Página de {slug}</h1>
        <p>query: {slug}</p>
        <p>pathname: {router.pathname}</p>
        <p>isFallback: {router.isFallback ? 'true' : 'false'}</p>

        <a href={`${slug}/idade`}>acessar idade</a><br/>

        <button className={Styles.fs30} onClick={handleClickPush}>
          acessar idade de {slug} usando o router.push
        </button><br/><br/>

        <button className={Styles.fs30} onClick={handleClickReplace}>
          acessar idade de {slug} usando o router.replace
        </button>

      </div>
    </Layout>
  );
}

export default RotaItem;
