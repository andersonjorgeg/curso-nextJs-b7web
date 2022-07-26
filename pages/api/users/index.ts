import { NextApiHandler } from 'next';
import { Users } from '../../../utils/users';
import prisma from '../../../libs/prisma';
import api from '../../../libs/api';

// pegar usuários
const handlerGet: NextApiHandler = async (req, res) => {

  const {page} = req.query;

  // usando o conceito de DRY - Don't Repeat Yourself
  const users = await api.getAllUsers(parseInt(page as string));

  res.json({status: true, users});
}

// inserir novos usuários
const handlerPost: NextApiHandler = async (req, res) => {

  // receber dados do corpo da requisição
  const { name, email } = req.body;

  // inserir novo usuário
  const newUser = await prisma.user.create({
    data: { name, email, }
  }).catch((event) => {
    if(event.meta.target.includes('email')) {
      res.status(400).json({status: false, error: 'Email já cadastrado'});
    } else {
      res.status(400).json({status: false, error: 'Erro ao cadastrar usuário'});
    }
  })
  if(newUser) {
    res.status(201).json({status: true, user: newUser});
  }
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