import { bannerApi } from '@/api/bannerApi'
import BannersEdit from '@/components/banners/BannerEditForm'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import React from 'react'


async function getOneBanner(id:string) {
  const response:any = await bannerApi.getOneBanner(id);
  return response.data;
  
}

const page = async({params}: {params:{id:string}}) => {
  const response= await getOneBanner(params.id);
  const banner=response.data;
  return (
   <DefaultLayout>
    <BannersEdit banner = {banner} bannerId= {params.id}/>
   </DefaultLayout>
  )
}

export default page