import { categoryApi } from '@/api/categoryApi'
import CategoryTable from '@/components/category/CategoryTable'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import React from 'react'

async function getAllCategory() {
  const response: any = await categoryApi.getAllCategory();
  return response.data;
}

const Table = async () => {

  const categories = await getAllCategory();
  const categoryData = categories.data;
  console.log(categoryData);

  return (
   < DefaultLayout>
    <CategoryTable categories={categoryData}/>
    </DefaultLayout>
  )
}

export default Table