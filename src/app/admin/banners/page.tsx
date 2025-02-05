import { bannerApi } from '@/api/bannerApi'
import { categoryApi } from '@/api/categoryApi'
import BannersTable from '@/components/banners/BannerTable'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import React from 'react'


async function getAllBanners(){
  const response = await bannerApi.getAllBanners();
  return response.data;
}

const page = async () => {

  const banners = await getAllBanners();
  const bannerData =  banners.data;
  console.log(bannerData);


  return (
  <DefaultLayout>
    <BannersTable banners={bannerData}/>
  </DefaultLayout>
  )
}

export default page