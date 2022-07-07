import styles  from '../styles/Home.module.css';

type Props = {
  sobrenome: string;
}

const VariaveisAmbiente = ({ sobrenome }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <h1>Variáveis Ambiente</h1>
        <h2>Ordem de prioridade das variáveis de ambiente:</h2>
        <p>.env.local</p>
        <p>.env.development</p>
        <p>.env.production</p>
        <p>.env</p>
        <hr/>
        <h2>Variáveis de ambiente podem ser publicas e privadas:</h2>
        <p>
          Por padrão as variáveis de ambiente são privadas.
        </p>
        <p>
          Para tornar uma variável publica, basta adicionar o prefixo <strong>NEXT_PUBLIC_nome-da-variavel</strong> ao nome da variável.<br/>
          para usar <strong>process.env.NEXT_PUBLIC_nome-da-variavel</strong>,
          para funcionar precisa reiniciar o servidor.
        </p>
        <p>Exemplo:</p>
        <p>
          <strong>Meu nome é {process.env.NEXT_PUBLIC_NOME}</strong>
        </p>
        <p>
          Para pegar as variáveis de ambiente privadas é necessário usar o getStaticProps do componente para passar como props, ou seja, a variavel de ambiente vai ser pega no lado do servidor.<br/>
        </p>
        <p>Exemplo:</p>
        <p>
          <strong>Meu sobrenome é {sobrenome}</strong>
        </p>
      </div>
    </>
  )
}

// pegar a variavel de ambiente privada - do lado do servidor
export const getStaticProps = () => {
  return {
    props: {
      sobrenome: process.env.SOBRENOME
    }
  }
}

export default VariaveisAmbiente;
