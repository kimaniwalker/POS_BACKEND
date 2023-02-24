// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const stripe = require('stripe')(process.env.STRIPE_SK);


export default async function createPaymentIntent(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method == 'POST') {


        console.log(req.body)
        const customer = await stripe.customers.create();
        const ephemeralKey = await stripe.ephemeralKeys.create(
            { customer: customer.id },
            { apiVersion: '2019-09-09' }
        );

        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'usd',
            payment_method_types: ['card'],
            customer: req.body.customer,
            description: req.body.description,
            metadata: req.body.metadata,
            receipt_email: req.body.receipt_email,
            shipping: req.body.shipping,
            setup_future_usage: 'off_session',
            statement_descriptor: req.body.statement_descriptor,
            application_fee_amount: req.body.application_fee_amount,
        }, {
            stripeAccount: req.body.stripeAccount,
        });



        res.status(200).json({
            paymentIntent: paymentIntent.client_secret,
            ephemeralKey: ephemeralKey.secret,
            customer: customer.id,
            publishableKey: 'pk_test_E1w7nEQKNaAPqAdDPdgFogN000yif31NpU'
        });
    } else {
        res.status(400).json({
            menu: [{
                errorMessage: 'Invalid Request method. Must be a GET request'
            }]
        })
    }

}
