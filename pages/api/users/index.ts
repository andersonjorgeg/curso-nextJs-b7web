import { NextApiHandler } from 'next';
import { Users } from '../../../utils/users';

// pegar todos os usuários
const handlerGet: NextApiHandler = async (req, res) => {
  res.json(Users);
}

// inserir novos usuários
const handlerPost: NextApiHandler = async (req, res) => {
  res.json({status: true});
}

const handler: NextApiHandler = (req, res) => {
  /* 
    GET - serve para buscar informações
    POST - serve para criar informações
    PUT - serve para atualizar informações
    DELETE - serve para deletar informações
  */
  switch (req.method) {
    case 'GET': 
      handlerGet(req, res);
      break;
    case 'POST':
      handlerPost(req, res);
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}

export default handler;