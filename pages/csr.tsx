/* 
* client side rendering (SSR) - é o processo de renderização de páginas no cliente
* useEffect usa-se o hook para renderizar a página no lado do cliente
*/


import styles from '../styles/Home.module.css'
import { Todo } from '../types/Todo';
import { useEffect, useState } from 'react';

const Csr = () => {
  // <> - no typescript, é um tipagem genérica
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  /* 
  * implementando o client side rendering (SSR)
  */

  useEffect(() => {
    loadTodo();
  }, []);
  
  const loadTodo = async () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((list: Todo[]) => {
        setTodoList(list);
        setLoading(false);
      })
  }

  return (
    <div>
      <h1>Listas de tarefas - Client Side Rendering (CSR) </h1>

      {loading && <h2>Carregando...</h2>}

      <ul>
        {todoList.map(todoItem => (
          <li key={todoItem.id}>
            <h2>{todoItem.title} - {todoItem.completed ? <span className={styles.verde}>{'Concluído'}</span> : <span className={styles.vermelho}>{'Pendente'}</span>}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Csr;
