import { categoryApi } from '@/api/categoryApi';
import BannersAdd from '@/components/banners/BannerAddForm'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import { cookies } from 'next/headers';
import React from 'react'

async function getAllCategory() {
  const serverCookies= cookies();
  const accessToken = serverCookies.get('accessToken')?.value;
  const response:any =await categoryApi.getAllCategory(accessToken);
  return response.data;
}

const page =async () => {
   const categories = await getAllCategory();
    const categoryData= categories.data;
    console.log(categoryData);
  return (
   <DefaultLayout>
    <BannersAdd  categories={categoryData}/>
   </DefaultLayout>
  )
}

export default page