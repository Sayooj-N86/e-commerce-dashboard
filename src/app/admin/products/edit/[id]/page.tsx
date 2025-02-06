import { brandApi } from '@/api/brandApi';
import { categoryApi } from '@/api/categoryApi'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import ProductsEdit from '@/components/products/ProductsEditForm'
import React from 'react'



const page = async() => {
  
  return (
    <DefaultLayout>
        <ProductsEdit/>
    </DefaultLayout>
  )
}

export default page