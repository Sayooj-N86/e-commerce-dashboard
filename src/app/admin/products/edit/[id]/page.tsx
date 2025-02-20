import { brandApi } from '@/api/brandApi';
import { categoryApi } from '@/api/categoryApi'
import { productApi } from '@/api/productApi';
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import ProductsEdit from '@/components/products/ProductsEditForm'
import { cookies } from 'next/headers';
import React from 'react'

async function getOneProduct(id:string){
  const serverCookies = cookies();
  const accesToken = serverCookies.get('accessToken')?.value;
  const response:any = await productApi.getOneProduct(id,accesToken);
  const response1:any = await categoryApi.getAllCategory(accesToken);
  const response2:any = await brandApi.getAllBrands(accesToken);
  return {response:response.data, response1:response1.data, response2:response2.data}
}

const page = async({params}: {params:{id:string}}) => {
  const response = await getOneProduct(params.id);
  const product = response.response.data;
  const category = response.response1.data;
  const brand = response.response2.data;
  
  return (
    <DefaultLayout>
        <ProductsEdit product={product} category={category} brand={brand} productId={params.id}  />
    </DefaultLayout>
  )
}

export default page