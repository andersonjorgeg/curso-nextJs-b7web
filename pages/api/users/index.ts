import { NextApiHandler } from 'next';
import { Users } from '../../../utils/users';
import prisma from '../../../libs/prisma';

// pegar usuários
const handlerGet: NextApiHandler = async (req, res) => {

  // pegar usuários ativos
  const users = await prisma.user.findMany({
    // filtrar campos
    where: {
      active: true
    },
    select: {
      id: true,
      name: true,
      email: true
    },
    // Ordenando os dados
    orderBy: [
      // asc - crescente
      // desc - decrescente
      // ! Obs: quando for só um campo, pode usar um objeto, mas quando for mais de um campo, deve-se usar um array de objetos.
      {name: 'asc'},
      {id: 'desc'}
    ],
  });
  res.json({status: true, users});
}

// inserir novos usuários
const handlerPost: NextApiHandler = async (req, res) => {

  // receber dados do corpo da requisição
  const { name, email } = req.body;

  // inserir novo usuário
  const newUser = await prisma.user.create({
    data: { name, email, }
  })

  res.status(201).json({status: true, user: newUser});
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