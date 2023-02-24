import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from '../../utils/supabase';

export default async function Webhook(
    req: NextApiRequest,
    res: NextApiResponse) {

    try {
        const event = req.body;
        // Handle the event
        switch (event.type) {
           
            case 'payment_intent.succeeded':
                //Save order to db
               const { error } = await supabase
                .from('pos_orders')
                .insert({ org_id: 11, metadata: event.data.object.metadata, order_id: event.data.object.id})
                
                if (error){
                    console.log(error)
                }     
                break;

            // ... handle other event types


            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        // Return a response to acknowledge receipt of the event
        res.json({ received: true });

    } catch (error: any) {
        console.error(error)
        res.status(500).end(error.message)
    }
}