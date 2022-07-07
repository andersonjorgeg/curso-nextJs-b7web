import { useRouter } from 'next/router';

const Idade = () => { 
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>{slug} tem 90 anos</h1>
    </div>
  )
}

export default Idade;
