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

  // criar objeto que inicia como vazio
  const data: {
    // tipando os dados com typescript
    // ? indica que o campo pode ser opcional
    name?: string;
    active?: boolean;
  } = {};

  // verificar se o nome do usuário foi passado
  if (name) {
    data.name = name;
  }
  // verificar se o usuário está ativo
  if (active) {
    // ler o valor do campo ativo
    switch (active) {
      case 'true':
      case '1':
        data.active = true;
        break;
      case 'false':
      case '0':
        data.active = false;
        break;
    }
  }

  // atualizar os dados
  const updateUser = await prisma.user.update({
    where: {
      id: parseInt(id as string)
    },
    // objeto com os dados para atualizar
    data 
  })
  
  if(updateUser) {
    res.json({ status: true, user: updateUser});
    return;
  }

  res.status(404).json({ error: 'Não foi possível alterar este usuário.' });
}

const handlerDelete: NextApiHandler = async (req, res) => {
  // identificar o usuário que está sendo deletado
  const { id} = req.query;

  // deletar o usuário
  const deleteUser = await prisma.user.delete({
    where: {
      id: parseInt(id as string)
    }
  }).catch(() => {
    res.json({error: 'Usuário não existe!'});
  });
  if (deleteUser) {
    res.json({status: true});
  }
}

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET': 
      handlerGet(req, res);
      break;
    case 'PUT':
      handlerPut(req, res);
      break;
    case 'DELETE':
      handlerDelete(req, res);
      break;
  }
}

export default handler;
