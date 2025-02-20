import { brandApi } from '@/api/brandApi';
import { categoryApi } from '@/api/categoryApi';
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import ProductAdd from '@/components/products/ProductsAddForm'
import { cookies } from 'next/headers';
import React from 'react'


async function getAllCategory(){
  const serverCookies = cookies();
    const accesToken = serverCookies.get('accessToken')?.value;
  const response:any= await categoryApi.getAllCategory(accesToken);
  const response1:any= await brandApi.getAllBrands(accesToken);
  return {response:response.data,response1:response1.data};
}

const page =async () => {

  const response = await getAllCategory();
  console.log("",response)
  const categoryData= response.response.data;
  const brandData = response.response1.data;
 
  return (
    <DefaultLayout>
        <ProductAdd categories={categoryData}  brands={brandData}/>
    </DefaultLayout>
  )
}

export default page