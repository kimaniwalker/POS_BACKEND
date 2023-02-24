// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MenuItem } from '@/utils/types'
import type { NextApiRequest, NextApiResponse } from 'next'


export async function Create(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const stripe = require('stripe')('sk_test_oYBRAIPJUMbEVmlpCQbyqqDL00ohkyvHbn');

    const customer = await stripe.customers.create({
      description: 'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
    });

  res.status(200).json({ customer })

}
