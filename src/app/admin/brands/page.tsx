import { brandApi } from '@/api/brandApi'
import BrandsTable from '@/components/brands/BrandTable'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import React from 'react'

async function getAllBrands(){
  const response: any = await brandApi.getAllBrands();
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