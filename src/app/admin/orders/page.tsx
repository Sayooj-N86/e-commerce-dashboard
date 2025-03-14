import DefaultLayout from '@/components/Layouts/DefaultLaout'
import OrderTable from '@/components/orders/OrderTable'
import React from 'react'

const page = () => {
  return (
   <DefaultLayout>
    <OrderTable/>
   </DefaultLayout>
  )
}

export default page