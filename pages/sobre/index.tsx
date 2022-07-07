import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { MyButton } from '../../components/MyButton';
import Styles from '../../styles/Sobre.module.css';
import { Layout } from '../../components/Layout';

/* criar componente */
const Sobre = () => {
  // criar estado 
  const [contador, setContador] = useState(19);

  // criar função
  const handleContadorBtnIncrement = () => {
    setContador(contador + 1);
  }

  const handleContadorBtnDecrement = () => {
    setContador(contador - 1);
  }

  return (
    <Layout>
      <div>
      <Head>
        <title>Sobre</title>
      </Head>
        <h1 className={Styles.sobreTitle}>Página Sobre Anderson ({contador})</h1>
        {/* css inline no jsx */}
        {/* <ul style={{ backgroundColor: (contador < 25 ? "#00FF00" : "#00FF"), fontSize: "20px" }}> */}
        <ul className="lista">
          <li><Link href="/sobre/anderson">Anderson</Link></li>
          <li><Link href="/sobre/joao">João</Link></li>
          <li><Link href="/sobre/alan">Alan</Link></li>
        </ul>

        <button onClick={handleContadorBtnIncrement} className="btn btn-primary">Aumentar</button>
        <MyButton onClick={handleContadorBtnDecrement} label="Diminuir" />

        {/* 
          Script - é um componente nativo do react que é responsável por carregar scripts
          props:
            src - url do script
            strategy - estratégia de carregamento
              - afterInteractive: ( padrão ) Carregar imediatamente após a página se tornar interativa
              - beforeInteractive: Carregar antes que a página seja interativa
              - lazyOnload: Carregar durante o tempo ocioso
            onload(() => {}) - função que será executada após o script ser carregado
        */} 
        <Script 
          src="https://kit.fontawesome.com/a076d05399.js"
          strategy="afterInteractive" 
          onLoad={() => {
            console.log('Script carregado');
            }
          }
        />

        {/* eslint-disable-next-line @next/next/inline-script-id */}
        {/* <Script strategy="afterInteractive">
          {`window.alert('Olá mundo')`}
        </Script> */}

        <style jsx global>{`
          .lista { 
            background-color: #00FF00;
          }
          .lista li {
            font-size: 20px;
          }
          body {
            background-color: #232323;
            color: #fff;
          }
        `}</style>

      </div>
    </Layout>
  )
}

export default Sobre;
