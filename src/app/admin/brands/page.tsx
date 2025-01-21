import BrandsTable from '@/components/brands/BrandTable'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import React from 'react'

const page = () => {
  return (
    <DefaultLayout>
        <BrandsTable/>
    </DefaultLayout>
  )
}

export default page