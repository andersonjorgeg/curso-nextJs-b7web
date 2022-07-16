import { NextApiHandler } from 'next';
import { Users } from '../../../utils/users';
import prisma from '../../../libs/prisma';

const handlerGet: NextApiHandler = async (req, res) => {
  // recebe o id do usuário que esta sendo requisitado
  const { id } = req.query;

  const user = await prisma.user.findFirst({
    where: { 
      // passar o id que vem da req.query como string para inteiro
      id: parseInt(id as string),
      active: true
    }
  });

  //condição para verificar se o usuário existe
  if (user) {
    res.json({ status: true, user});
    return;
  }

  // se não encontrar o usuário que está sendo requisitado, retorna um erro.
  res.status(404).json({ error: 'Usuário não existe!' });
}

const handlerPut: NextApiHandler = async (req, res) => {
  // identificar o usuário que está sendo atualizado
  const { id } = req.query;

  // pegar os dados do corpo da requisição para atualizar o usuário
  const { name, active } = req.body;

  // atualizar os dados
  const updateUser = await prisma.user.update({
    where: {
      id: parseInt(id as string)
    },
    data: {
      name,
      active: active === 'true' ? true : false
    }
  })
  
  if(updateUser) {
    res.json({ status: true, user: updateUser});
    return;
  }

  res.status(404).json({ error: 'Não foi possível alterar este usuário.' });
}

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET': 
      handlerGet(req, res);
      break;
    case 'PUT':
      handlerPut(req, res);
      break;
  }
}

export default handler;
