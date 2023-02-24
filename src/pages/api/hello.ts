// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MenuItem } from '@/utils/types'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MenuItem>
) {
  res.status(200).json({ id: 1, name: 'John Doe', description: 'test', price: 8.99, isAvailable: true, isFeatured: true, reviews: ['test', 'testing', 'teafkjfadaf'], category: 'breakfast' })

}
