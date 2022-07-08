import { NextApiHandler } from 'next';
import { Users } from '../../../utils/users';

const handler: NextApiHandler = (req, res) => {
  // recebe o id do usuário que esta sendo requisitado
  const { id } = req.query;
  
  // percorre o array de usuários
  for (let i in Users) {
    // se o id do usuário for igual ao id do usuário que está sendo requisitado
    if (Users[i].id.toString() ===  id ) {
      // retorna o usuário que está sendo requisitado
      res.json(Users[i])
      return;
    }
  }

  // se não encontrar o usuário que está sendo requisitado, retorna um erro.
  res.status(404).json({ error: 'Usuário não encontrado!' });
}

export default handler;
