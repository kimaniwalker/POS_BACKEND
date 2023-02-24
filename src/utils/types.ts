export type MenuItem = {
    id?: number
    name?: string
    description?: string
    price?: number
    isAvailable?: boolean
    isFeatured?: boolean
    reviews?: string[],
    errorMessage?: string,
    imageUrl?: string,
    category?: string
    sizes?: string[]
    sides?: string[]
}

export type FullMenu = {
    menu: MenuItem[]
}

export type PosOrders = {
    orders: any[]
}
