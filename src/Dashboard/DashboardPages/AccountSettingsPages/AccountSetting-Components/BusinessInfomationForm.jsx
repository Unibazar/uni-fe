// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import getCountryList from 'react-select-country-list';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import { saveCredentials } from '@/redux/slice/credentialSlice';
// import FormField from '@/baseComponents/FormField/FormField';
// import CustomButton from '@/baseComponents/CustomButton/CustomButton';

// const countries = getCountryList().getData();

// function BusinessInfomationForm({ platform, data }) {
//   const userId = useSelector(state => state?.user?.user?.user?._id);
//   const dispatch = useDispatch();

//   // Validation schema
//   const validationSchema = Yup.object().shape({
//     sellerId: Yup.string().required('Seller ID is required'),
//     clientId: Yup.string().required('Client ID is required'),
//     clientSecret: Yup.string().required('Client Secret is required'),
//     marketplace: Yup.string().required('Marketplace is required'),
//     refreshToken: Yup.string().required('Refresh Token is required'),
//     region: Yup.string().required('Region is required'),
//     secret_key: Yup.string().required('Secret Key is required'),
//     merchant_id: Yup.string().required('Merchant Id is required'),
//   });

//   // Set up the form using react-hook-form with proper defaultValues
//   const {
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     defaultValues: {
//       sellerId: data?.sellerId || '',
//       clientId: data?.clientId || '',
//       clientSecret: data?.clientSecret || '',
//       marketplace: data?.marketplace || '',
//       refreshToken: data?.refreshToken || '',
//       region: data?.region || 'IN',
//       secret_key: data?.secret_key || '',
//       merchant_id: data?.merchant_id || '',
//     },
//   });

//   // Update form values when data changes
//   useEffect(() => {
//     if (data) {
//       reset({
//         sellerId: data.sellerId || '',
//         clientId: data.clientId || '',
//         clientSecret: data.clientSecret || '',
//         marketplace: data.marketplace || '',
//         refreshToken: data.refreshToken || '',
//         region: data.region || 'IN',
//         secret_key: data?.secret_key || '',
//         merchant_id: data?.merchant_id || '',
//         appId:data?.appId || '',
//         appSecret:data?.appSecret || ''
//       });
//     }
//   }, [data, reset]);

//   const onSubmit = formData => {
//     try {
//       const finalData = { userId: userId, [platform]: { ...formData } };
//       dispatch(saveCredentials(finalData));
//     } catch (error) {
//       console.error('Error saving credentials:', error);
//     }
//   };
// console.log(platform,"platform")
//   return (
//     <form className='w-full flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
//       {platform === 'amazon' ? (
//         <>
//           <Controller
//             name='sellerId'
//             control={control}
//             render={({ field }) => (
//               <FormField
//                 {...field}
//                 type='text'
//                 label='Seller ID'
//                 placeholder='Enter Seller ID'
//                 error={errors.sellerId?.message}
//                 fullWidth
//                 variant='outlined'
//               />
//             )}
//           />

//           <Controller
//             name='clientId'
//             control={control}
//             render={({ field }) => (
//               <FormField
//                 {...field}
//                 type='text'
//                 label='Client ID'
//                 placeholder='Enter Client ID'
//                 error={errors.clientId?.message}
//                 fullWidth
//                 variant='outlined'
//               />
//             )}
//           />

//           <Controller
//             name='clientSecret'
//             control={control}
//             render={({ field }) => (
//               <FormField
//                 {...field}
//                 type='text'
//                 label='Client Secret'
//                 placeholder='Enter Client Secret'
//                 error={errors.clientSecret?.message}
//                 fullWidth
//                 variant='outlined'
//               />
//             )}
//           />

//           <Controller
//             name='marketplace'
//             control={control}
//             render={({ field }) => (
//               <FormField
//                 {...field}
//                 type='text'
//                 label='Marketplace'
//                 placeholder='Enter Marketplace'
//                 error={errors.marketplace?.message}
//                 fullWidth
//                 variant='outlined'
//               />
//             )}
//           />

//           <Controller
//             name='refreshToken'
//             control={control}
//             render={({ field }) => (
//               <FormField
//                 {...field}
//                 type='text'
//                 label='Refresh Token'
//                 placeholder='Enter Refresh Token'
//                 error={errors.refreshToken?.message}
//                 fullWidth
//                 variant='outlined'
//               />
//             )}
//           />

//           <Controller
//             name='region'
//             control={control}
//             render={({ field }) => (
//               <FormField
//                 {...field}
//                 type='select'
//                 label='Region'
//                 placeholder='Select Region'
//                 error={errors.region?.message}
//                 fullWidth
//                 variant='outlined'
//                 options={countries.map(country => ({
//                   value: country.value,
//                   label: country.label,
//                 }))}
//               />
//             )}
//           />
//         </>
//       ) : platform === "flipkart"?(
//         <>
//         <Controller
//           name='appId'
//           control={control}
//           render={({ field }) => (
//             <FormField
//               {...field}
//               type='text'
//               label='App Id'
//               placeholder='Enter APP ID'
//               error={errors.appId?.message}
//               fullWidth
//               variant='outlined'
//             />
//           )}
//         />
//         <Controller
//           name='appSecret'
//           control={control}
//           render={({ field }) => (
//             <FormField
//               {...field}
//               type='text'
//               label='App Secret'
//               placeholder='Enter App Secret'
//               error={errors.appSecret?.message}
//               fullWidth
//               variant='outlined'
//             />
//           )}
//         />
//       </>
//       ):(
//         <>
//           <Controller
//             name='secret_key'
//             control={control}
//             render={({ field }) => (
//               <FormField
//                 {...field}
//                 type='text'
//                 label='Secret Key'
//                 placeholder='Enter Refresh Token'
//                 error={errors.secret_key?.message}
//                 fullWidth
//                 variant='outlined'
//               />
//             )}
//           />
//           <Controller
//             name='merchant_id'
//             control={control}
//             render={({ field }) => (
//               <FormField
//                 {...field}
//                 type='text'
//                 label='Merchant Id'
//                 placeholder='Enter Merchant Id'
//                 error={errors.merchant_id?.message}
//                 fullWidth
//                 variant='outlined'
//               />
//             )}
//           />
//         </>
//       )}

//       <div className='flex justify-start gap-2 w-full mt-4'>
//         <CustomButton
//           type='button'
//           variant='outlined'
//           onClick={() => {}} // Add close handler if needed
//           size='small'
//           fullWidth={false}
//           className='hidden'
//         >
//           Close
//         </CustomButton>
//         <CustomButton type='submit' className='primary' size='small' fullWidth={false}>
//           Save
//         </CustomButton>
//       </div>
//     </form>
//   );
// }

// export default BusinessInfomationForm;


// import React from "react";
// import { useForm, Controller } from "react-hook-form";

// function BusinessInformationForm() {
//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       businessName: "",
//       productCategory: "",
//       businessContact: "",
//       website: "",
//       gst: "",
//     },
//   });
  

//   const onSubmit = (data) => {
//     // console.log("Business Information:", data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 p-4 border rounded-lg">
//       <Controller
//         name="businessName"
//         control={control}
//         render={({ field }) => (
//           <input {...field} placeholder="Business Name" className="p-2 border rounded" required />
//         )}
//       />

//       <Controller
//         name="productCategory"
//         control={control}
//         render={({ field }) => (
//           <input {...field} placeholder="Product Category" className="p-2 border rounded" required />
//         )}
//       />

//       <Controller
//         name="businessContact"
//         control={control}
//         render={({ field }) => (
//           <input {...field} placeholder="Business Contact" className="p-2 border rounded" required />
//         )}
//       />

//       <Controller
//         name="website"
//         control={control}
//         render={({ field }) => (
//           <input {...field} placeholder="Website (Optional)" className="p-2 border rounded" />
//         )}
//       />

//       <Controller
//         name="gstNumber"
//         control={control}
//         render={({ field }) => (
//           <input {...field} placeholder="GST Number (Optional)" className="p-2 border rounded" />
//         )}
//       />

//       <button type="submit" className="p-2 bg-teal-700 text-white rounded">Submit</button>
//     </form>
//   );
// }

// export default BusinessInformationForm;



import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, updateUser } from "@/redux/slice/userSlice";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

function BusinessInformationForm() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state?.user?.user?.user?._id);
  const businessInfo = useSelector((state) => state?.user?.user?.businessInfo);
  const [popup, setPopup] = useState({ visible: false, message: "", type: "" });

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      businessName: "",
      productCategory: "",
      businessContact: "",
      website: "",
      gst: "",
    },
  });

  // ✅ Load existing business info when component mounts
  useEffect(() => {
    dispatch(loadUser()).then((data) => {
      const userBusinessInfo = data?.payload?.user?.businessInfo;
      if (userBusinessInfo) {
        setValue("businessName", userBusinessInfo.businessName || "");
        setValue("productCategory", userBusinessInfo.productCategory || "");
        setValue("businessContact", userBusinessInfo.businessContact || "");
        setValue("website", userBusinessInfo.website || "");
        setValue("gst", userBusinessInfo.gst || "");
      }
    });
  }, [dispatch, setValue]);

  // ✅ Handle form submission
  const onSubmit = (data) => {
    const formData = {
      id: userId,
      businessName: data.businessName,
      productCategory: data.productCategory,
      businessContact: data.businessContact,
      website: data.website,
      gst: data.gst,
    };

    dispatch(updateUser(formData))
      .then((result) => {
        if (updateUser.fulfilled.match(result)) {
        const user = result.payload.user;

          setPopup({
            visible: true,
            message: `Hi ${user.personalInfo?.name}, your Business information updated successfully!`,
            type: "success",
          });
          // alert("Business information updated successfully!");
          dispatch(loadUser()); // ✅ Refresh user data
        } else {
          alert("Failed to update business information.");
        }
      })
      .catch(() => {
        alert("An error occurred while updating business information.");
      });
  };


  const handleClosePopup = () => {
    setPopup({ ...popup, visible: false });
  };
  return (
    <>
    
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 p-4 border rounded-lg">
      <Controller
        name="businessName"
        control={control}
        render={({ field }) => (
          <input {...field} placeholder="Business Name" className="p-2 border rounded" required />
        )}
      />

      <Controller
        name="productCategory"
        control={control}
        render={({ field }) => (
          <input {...field} placeholder="Product Category" className="p-2 border rounded" required />
        )}
      />

      <Controller
        name="businessContact"
        control={control}
        render={({ field }) => (
          <input {...field} placeholder="Business Contact" className="p-2 border rounded" required />
        )}
      />

      <Controller
        name="website"
        control={control}
        render={({ field }) => (
          <input {...field} placeholder="Website (Optional)" className="p-2 border rounded" />
        )}
      />

      <Controller
        name="gst"
        control={control}
        render={({ field }) => (
          <input {...field} placeholder="GST Number (Optional)" className="p-2 border rounded" />
        )}
      />

      <button type="submit" className="p-2 bg-teal-700 text-white rounded">Save Changes</button>
    </form>
     <Dialog open={popup.visible} onClose={handleClosePopup}>
     <DialogTitle>{popup.type === "success" ? "Success" : "Error"}</DialogTitle>
     <DialogContent>
       <p>{popup.message}</p>
     </DialogContent>
     <DialogActions>
       <Button onClick={handleClosePopup} color="primary">
         Close
       </Button>
     </DialogActions>
   </Dialog>
    </>
  );
}

export default BusinessInformationForm;
