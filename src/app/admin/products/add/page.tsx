import { brandApi } from '@/api/brandApi';
import { categoryApi } from '@/api/categoryApi';
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import ProductAdd from '@/components/products/ProductsAddForm'
import React from 'react'


async function getAllCategory(){
  const response:any= await categoryApi.getAllCategory();
  const response1:any= await brandApi.getAllBrands();
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