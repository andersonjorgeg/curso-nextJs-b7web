import { NextApiHandler } from 'next';

const handler: NextApiHandler = (req, res) => {
  let nRand: number = Math.floor(Math.random() * 100);
  res.json({ nRand});
}

export default handler;
