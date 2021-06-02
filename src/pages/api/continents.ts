import { NextApiRequest, NextApiResponse } from "next";
import { continents } from './continents.json'

export default async function Continents(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method not allowed')
    return
  }

  return res.status(200).json(continents)
}