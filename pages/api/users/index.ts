import { NextApiHandler } from 'next';
import { Users } from '../../../utils/users';
import prisma from '../../../libs/prisma';

// pegar todos os usuários
const handlerGet: NextApiHandler = async (req, res) => {

  // receber dados da url da requisição
  const { search, age  } = req.query;

  res.status(200).json(Users);
}

// inserir novos usuários
const handlerPost: NextApiHandler = async (req, res) => {

  // receber dados do corpo da requisição
  const { name, age } = req.body;

  res.status(201).json({status: true, user: { name, age}});
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