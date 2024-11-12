import type { NextApiRequest, NextApiResponse } from 'next';
import { validateUser } from '@/db/services/userServices';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body;
  const user = await validateUser({ email, password });

  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

  return res.status(200).json({ success: true, user: { email, name: user.fullName } });
}
