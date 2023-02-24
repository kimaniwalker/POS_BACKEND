// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export async function createPaymentIntent(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
        if (req.method == 'GET') {
            
            const stripe = require('stripe')('sk_test_oYBRAIPJUMbEVmlpCQbyqqDL00ohkyvHbn');

            const customer = await stripe.customers.retrieve(
                'cus_IHfdK5qVO86u2v'
              );



        res.status(200).json(customer)
    } else {
        res.status(400).json({
            menu: [{
                errorMessage: 'Invalid Request method. Must be a GET request'
            }]
        })
    }

}



