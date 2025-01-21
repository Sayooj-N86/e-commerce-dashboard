import DefaultLayout from '@/components/Layouts/DefaultLaout'
import ProductTable from '@/components/products/ProductsTable'
import React from 'react'

const page = () => {
  return (
   <DefaultLayout>
    <ProductTable/>
   </DefaultLayout>
  )
}

export default page