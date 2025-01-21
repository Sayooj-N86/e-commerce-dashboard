import DefaultLayout from '@/components/Layouts/DefaultLaout'
import ProductsEdit from '@/components/products/ProductsEditForm'
import React from 'react'

const page = () => {
  return (
    <DefaultLayout>
        <ProductsEdit/>
    </DefaultLayout>
  )
}

export default page