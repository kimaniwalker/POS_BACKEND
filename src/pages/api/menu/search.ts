// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Menu } from '@/data/Menu'
import { FullMenu, MenuItem } from '@/utils/types'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function searchMenu(
    req: NextApiRequest,
    res: NextApiResponse<FullMenu>
) {
    //turn req.query to number
    const category = req.query.category
    //find menu item
    const menuitem = Menu.filter((item => item.category === category))

    if (req.method == 'GET' && menuitem) {
        res.status(200).json({ menu: menuitem })
    } else {
        res.status(400).json({
            menu: [{
                errorMessage: 'Something went wrong'
            }]
        })
    }

}
