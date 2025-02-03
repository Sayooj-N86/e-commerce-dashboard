import { categoryApi } from '@/api/categoryApi'
import CategoryEdit from '@/components/category/CategoryEditForm'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import React from 'react'

async function getOneCategory(id:string) {
  const response:any = await categoryApi.getOneCategory(id);
   return response.data; 
}

const page = async ({params}: { params: { id : string}}) => {
  const response=  await getOneCategory(params.id);
  console.log(response)
  const category = response.data;

  return (
   <DefaultLayout>
    <CategoryEdit category ={category} categoryId = {params.id}/>
   </DefaultLayout>
  )
}

export default page