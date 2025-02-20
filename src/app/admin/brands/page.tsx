import { brandApi } from '@/api/brandApi'
import BrandsTable from '@/components/brands/BrandTable'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import { cookies } from 'next/headers'
import React from 'react'

async function getAllBrands(){
  const serverCookies = cookies();
  const accessToken= serverCookies.get('accessToken')?.value;
  const response: any = await brandApi.getAllBrands(accessToken);
  return response.data;
}

const page = async () => {

  const brands = await getAllBrands();
  const brandData = brands.data;
  console.log(brandData);


  return (
    <DefaultLayout>
        <BrandsTable brands={brandData} />
    </DefaultLayout>
  )
}

export default page