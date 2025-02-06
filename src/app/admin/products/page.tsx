import { brandApi } from '@/api/brandApi';
import { categoryApi } from '@/api/categoryApi';
import { productApi } from '@/api/productApi';
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import ProductTable from '@/components/products/ProductsTable'
import React from 'react'

async function getAllProducts(){
const response:any = await productApi.getAllProducts();
return response.data;
}

const page = async () => {
  const products = await getAllProducts();

 
    
  return (
   <DefaultLayout>
    <ProductTable />
   </DefaultLayout>
  )
}

export default page