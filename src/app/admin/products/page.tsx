import { brandApi } from '@/api/brandApi';
import { categoryApi } from '@/api/categoryApi';
import { productApi } from '@/api/productApi';
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import ProductTable from '@/components/products/ProductsTable'
import { cookies } from 'next/headers';
import React from 'react'

async function getAllProducts(){
  const serverCookies = cookies();
  const accessToken = serverCookies.get('accessToken')?.value;
const response:any = await productApi.getAllProducts(accessToken);
return response.data;
}

const page = async () => {
  const products = await getAllProducts();
  const productData = products.data;
  console.log(productData);
 
    
  return (
   <DefaultLayout>
    <ProductTable products={productData}/>
   </DefaultLayout>
  )
}

export default page