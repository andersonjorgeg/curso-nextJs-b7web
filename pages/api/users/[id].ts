import { NextApiHandler } from 'next';
import { Users } from '../../../utils/users';
import prisma from '../../../libs/prisma';

const handler: NextApiHandler = async (req, res) => {
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

export default handler;
