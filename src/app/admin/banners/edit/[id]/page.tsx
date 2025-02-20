import { bannerApi } from '@/api/bannerApi'
import { categoryApi } from '@/api/categoryApi';
import BannersEdit from '@/components/banners/BannerEditForm'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import { cookies } from 'next/headers';
import React from 'react'


async function getOneBanner(id:string) {
  const serverCookies = cookies();
  const accessToken = serverCookies.get('accessToken')?.value;
  const response:any = await bannerApi.getOneBanner(id,accessToken);
  const response1:any = await categoryApi.getAllCategory(accessToken);
  return {response:response.data,response1:response1.data};
  
}

const page = async({params}: {params:{id:string}}) => {
  const response= await getOneBanner(params.id);
  const banner=response.response.data;
  const category=response.response1.data;
  return (
   <DefaultLayout>
    <BannersEdit banner = {banner} category={category} bannerId= {params.id}/>
   </DefaultLayout>
  )
}

export default page