// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Menu } from '@/data/Menu'
import { FullMenu, MenuItem } from '@/utils/types'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function getSingleMenuItems(
    req: NextApiRequest,
    res: NextApiResponse<MenuItem>
) {
    //turn req.query to number
    const id = req.query.id && (+req.query.id)
    //find menu item
    const menuitem = Menu.filter((item => item.id === id))

    if (req.method == 'GET' && menuitem.length >= 1) {
        res.status(200).json({ ...menuitem[0] })
    } else {
        res.status(400).json({ errorMessage: 'Couldn`t find the item you are requesting' })
    }

}
