import DefaultLayout from '@/components/Layouts/DefaultLaout'
import ProductAdd from '@/components/products/ProductsAddForm'
import React from 'react'

const page = () => {
  return (
    <DefaultLayout>
        <ProductAdd/>
    </DefaultLayout>
  )
}

export default page