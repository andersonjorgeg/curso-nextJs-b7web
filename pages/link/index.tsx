import Link from 'next/link';

const LinkAula = () => {
  return (
    <div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li>
          <Link 
            href={{
              pathname: '/link/[slug]',
              query: {slug: 'anderson'}
            }}
          >
            Anderson
          </Link>
        </li>
        <li>
          <Link
            href="/link/contato"
            // replace - não faz o push no history, ou seja, essa rota não vai para o history do navegador
            replace
          >
            Contato
          </Link>
        </li>
        <li>
          <Link
            href="/link/contato2"
            // scroll - faz o scroll para o topo da página - false 
            scroll={false}
          >
            Contato 2
          </Link>
        </li>
        <li>
          <Link
            href="/link/contato3"
            // passHref - passa o href para o componente Link
            passHref
          >
            <a>Contato 3</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LinkAula;
