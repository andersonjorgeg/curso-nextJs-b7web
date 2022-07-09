import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  let { nome } = req.query;
  res.json({ nome: `Você enviou o nome: ${nome}` });
}

export default handler;