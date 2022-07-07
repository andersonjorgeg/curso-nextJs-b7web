/* 
* server side rendering (SSR) - é o processo de renderização de páginas no servidor
* getServerSideProps usa-se a função para renderizar a página no lado do servidor
*/

import { Todo } from '../types/Todo';
import styles from '../styles/Home.module.css'

type Props = {
  todo: Todo[]
}

const Ssr = ({ todo }: Props) => {
  return (
    <div> 
      <h1>Listas de tarefas - Server Side Rendering (SSR)</h1>

      <ul>
          {todo.map(todoItem => (
            <li key={todoItem.id}>
              <h2>
                {todoItem.title} - {todoItem.completed ? <span className={styles.verde}>{'Concluído'}</span> : <span className={styles.vermelho}>{'Pendente'}</span>}
              </h2>
            </li>
          ))}
      </ul>

    </div>
  )
}

export default Ssr;

/* 
* implementando o server side rendering (SSR)
*/

// 1. usar o getServerSideProps para retornar os dados da API
export const getServerSideProps = async () => {
  // fazer requisição com o fetch
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todoList: Todo[] = await res.json();
  return { 
    props: {
      todo: todoList
    }
   }
}
