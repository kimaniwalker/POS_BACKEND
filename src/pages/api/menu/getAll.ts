// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Menu } from '@/data/Menu'
import { FullMenu } from '@/utils/types'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function getAllMenuItems(
    req: NextApiRequest,
    res: NextApiResponse<FullMenu>
) {
    if (req.method == 'GET') {
        res.status(200).json({ menu: Menu })
    } else {
        res.status(400).json({
            menu: [{
                errorMessage: 'Invalid Request method. Must be a GET request'
            }]
        })
    }

}
