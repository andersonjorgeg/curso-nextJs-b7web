import styles from './Layout.module.css';
import { ReactElement } from 'react';
import { Navbar } from '../Navbar';

type Props = {
  children: ReactElement;
}

export const Layout = ({children}: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Meu próprio projeto 2.0</h1>
      </header>
      <Navbar />
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}