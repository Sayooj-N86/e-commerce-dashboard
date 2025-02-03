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
import { useRouter } from "next/navigation";
import { brandApi } from "@/api/brandApi";
import toast from "react-hot-toast";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES =[
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/webp",
];
const Schema = z.object( {
    brand : z.string().nonempty({message:"required"}),
    imageFile :
   z.any().refine(
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

type props ={
  brand:any,
  brandId:string
}
const BrandsEdit = ({brand,brandId}: props) => {
    
    const { register, handleSubmit,reset,control,formState:{errors}} = useForm<TSchema>({
    resolver: zodResolver(Schema),
    defaultValues: {
      brand:brand.name,
      imageFile:brand.image,
    },
    });
  
    type TSchema = z.infer<typeof Schema>;

    const router =useRouter();


      const submitData = async (data: any) => {
        try{
          const response = await brandApi.updateBrand(data ,brandId);
          console.log(response);
          if(response.data.success){
            toast.success(response.data.message);
            router.push("/admin/brand");
           
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
      <Breadcrumb pageName="Brand Edit" />

      <div className=" gap-9 sm:grid-cols-2">
        <form onSubmit={handleSubmit(submitData)}>
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Brand Name
                </label>
                <input
                  type="text"
                  {...register("brand",{required:true})}
                  placeholder="Clothes"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
                {errors.brand && (<p>{errors.brand.message}</p>)}
              </div>
              <div>
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Brand Image
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

export default BrandsEdit;
