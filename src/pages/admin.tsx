import React from 'react'
import { supabase } from '@/utils/supabase'
import Orders from '@/components/Orders'


export default function Admin() {

  const [posOrders, setPosOrders] = React.useState<any>([])

  React.useEffect(() => {
    const channel = supabase
      .channel('table-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'pos_orders',
        },
        (payload: any) => {
          console.log(payload)
          setPosOrders((prevorders: any) => [...prevorders , payload.new])
        }
      )
      .subscribe()
  }, [])


  return (
    <>
      <h1>Testing to see what happens</h1>
      <h1>Testing to see what happens</h1>
        <Orders orders={posOrders}/>
    </>
  )
}
