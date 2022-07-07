import { useRouter } from 'next/router';

const LinkRota = () => {

  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>
        Página de {slug}
      </h1>
    </div>
  )
}

export default LinkRota;
