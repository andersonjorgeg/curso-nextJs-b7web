import prisma from './prisma';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllUsers: async (page: number) => {
    let take = 2;
    let skip = 0;
    
    if(page) {
      skip = (page - 1) * take;
    }

    const users = await prisma.user.findMany({

      skip,

      // take - pegar registros
      take,

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
      orderBy: {
      id: 'asc'
      }
    });

    return users;

  }
}