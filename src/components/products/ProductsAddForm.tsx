"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxFive from "@/components/FormElements/Checkboxes/CheckboxFive";
import CheckboxFour from "@/components/FormElements/Checkboxes/CheckboxFour";
import CheckboxOne from "@/components/FormElements/Checkboxes/CheckboxOne";
import CheckboxThree from "@/components/FormElements/Checkboxes/CheckboxThree";
import CheckboxTwo from "@/components/FormElements/Checkboxes/CheckboxTwo";
import SwitcherFour from "@/components/FormElements/Switchers/SwitcherFour";
import SwitcherOne from "@/components/FormElements/Switchers/SwitcherOne";
import SwitcherThree from "@/components/FormElements/Switchers/SwitcherThree";
import SwitcherTwo from "@/components/FormElements/Switchers/SwitcherTwo";
import DatePickerTwo from "@/components/FormElements/DatePicker/DatePickerTwo";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import MultiSelect from "@/components/FormElements/MultiSelect";
import SelectGroupTwo from "@/components/FormElements/SelectGroup/SelectGroupTwo";
import FileUploaderSingle from "../FormElements/fileupload/ImageUploader";
import { Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import DropzoneWrapper from "../styles/react-dropzoner/Index";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SelectOne from "../Dropdowns/SelectOne";
import { productApi } from "@/api/productApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES =[
    "image/jpg",
    "image/jpeg", 
    "image/png",
    "image/webp",
];
const Schema = z.object( {
    category : z.string().nonempty({message:"required"}),
    product : z.string().nonempty({message:"required"}),
    brand : z.string().nonempty({message:"required"}),
    price: z.any(),
    description: z.string().nonempty({message:"required"}),
    imageFile :
    z
    .any().refine(
      value => {
        const acceptedTypes = ACCEPTED_IMAGE_TYPES
  
        if (typeof value === 'string') {
          return true
        } else if (typeof value === 'object') {
          const isTypeAccepted = acceptedTypes.includes(value?.type)
  
          return isTypeAccepted
        }
  
        return false
      },
      {
        message: 'Invalid image format'
      }
    ),
});

const ProductAdd = ({categories,brands}:any) => {
    
    const { register, handleSubmit,reset,control,formState:{errors}} = useForm<TSchema>({
    resolver: zodResolver(Schema)
    })
    type TSchema = z.infer<typeof Schema>;

    const router = useRouter();

    const submitData = async (data:any)=>{
      try{
        const response = await productApi.createProduct(data);
        console.log(response);
        if(response.data.success){
          toast.success(response.data.message);
          router.push("/admin/products");
         
        }
      }
      catch(errors: any){
        console.log(errors);
        toast.error(errors.response.data.message)
      }

        console.log("::::",data)

    }

  return (
    <>
      <Breadcrumb pageName="Product Add" innerPage="products" tableLink="/admin/products"/>

      <div className=" gap-9 sm:grid-cols-2">
        <form onSubmit={handleSubmit(submitData)}>
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="flex flex-col gap-5.5 p-6.5 ">
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Product Name
                </label>
                <input
                  type="text"
                  {...register("product",{required:true})}
                  placeholder="name of the product"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
                </div>
                <div>
                  <SelectOne
                  register={register("category")}
                  name="category"
                  placeHolder="category"
                  data={categories}
                  />
                  {errors.category && (<p>{errors.category.message}</p>)}
                </div>
                <div>
                  <SelectOne
                  register={register("brand")}
                  name="brand"
                  placeHolder="brand"
                  data={brands}
                  />
                  {errors.brand && (<p>{errors.brand.message}</p>)}
                </div>
                <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Price
                </label>
                <input
                  type="text"
                  {...register("price",{required:true})}
                  placeholder="price"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
                </div>
                <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  product description
                </label>
                <textarea
                rows={5}
                  {...register("description",{required:true})}
                  placeholder="product description"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
                </div>
              
              <div>
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Product Image
                  </label>
                  <DropzoneWrapper>
                    <Typography variant="h6" sx={{ mb: 2.5 }}>
                      {!!errors.imageFile && (
                        <span
                          style={{
                            color: "red",
                            fontSize: "14px",
                            marginLeft: "2px",
                          }}
                        >
                          Invalid Image format or Image is Required{" "}
                          {!!errors.imageFile}
                        </span>
                      )}
                    </Typography>
                    <Controller
                      name="imageFile"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <div>
                          <FileUploaderSingle
                            file={field.value}
                            setFile={field.onChange}
                            error={errors.imageFile}
                          />
                        </div>
                      )}
                    />
                  </DropzoneWrapper>
                  {/* <input
                    type="text"
                    placeholder="Active Input"
                    className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
                  /> */}
                <div className="flex gap-5 justify-center pt-3">
                    <button type="submit"  className="bg-blue-600 text-white font-semibold p-3 w-50 rounded-lg text-[1.1rem]">Submit</button>
                    <button type="reset" onClick={ () => reset()  } className="bg-blue-600 text-white font-semibold  w-50 rounded-lg text-[1.1rem]">Reset</button>
                </div>
                </div>
            </div>
          </div>
        </div>
        </form>
      </div>
    </>
  );
};

export default ProductAdd;
