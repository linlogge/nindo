import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { term } = req.query;
  try {
    const result = await axios.get<any[]>(`https://api.nindo.de/search/smart/${term}`).then((res) => res.data);
    res.status(200).json(result);
  } catch {
    res.status(404).json("No artist found");
  }
};
