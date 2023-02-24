import React from 'react'

export default function Orders({orders}: any) {
    
    if (!orders) return <h1>No orders</h1>
    return (
        <>
        <div>
           {orders.map((item: any) => (
            JSON.stringify(item,null,6)
           ))}
        </div>
        </>
    )
}
