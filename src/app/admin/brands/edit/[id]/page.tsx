import { brandApi } from '@/api/brandApi'
import BrandsEdit from '@/components/brands/BrandEditForm'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import React from 'react'

async function getOneBrand(id:string) {
  const response:any = await brandApi.getOneBrand(id);
  return response.data;
}

const page = async ({ params }: {params: {id:string}}) => {
  const response = await getOneBrand(params.id);
  console.log(response)
  const brand = response.data;

  return (
    <DefaultLayout>
        <BrandsEdit brand={brand} brandId= {params.id}/>
    </DefaultLayout>
  )
}

export default page