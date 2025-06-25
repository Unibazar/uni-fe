// import React, { useEffect } from 'react';
// import { TextField, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio, FormControl } from "@mui/material";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Image from 'next/image';
// import { FiPlusCircle } from 'react-icons/fi';
// import { IoIosArrowRoundForward } from 'react-icons/io';
// import { IoIosCloseCircle } from 'react-icons/io';
// import { Controller } from "react-hook-form";


// function FlipkartForm({ handleSubmit, onSubmit, control, ProductPhotoSrc1, productPhoto1, ProductPhotoSrc2, productPhoto2, ProductPhotoSrc3, productPhoto3, ProductPhotoSrc4, productPhoto4, errors, watch, setValue }) {

//   const hasBrandName = watch("hasBrandName", false);
//   const hasProductID = watch("hasProductID", false);


//   useEffect(() => {

//     if (hasBrandName) {
//       setValue("brandName", "");
//     }
//     if (hasProductID) {
//       setValue("productID", "");
//       setValue("productType", "");
//     }
//   }, [hasBrandName, setValue, hasProductID]);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="w-full">
//       <div>
//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-product-identity" id="panel-product-identity">
//           Price, Stock and Shipping Information 
//           </AccordionSummary>
//           <AccordionDetails className="flex flex-col gap-4">
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <div >Listing information</div>
//                 <Controller
//                   name="sellerSKUID"
//                   control={control}
//                   render={({ field }) => (
//                     <TextField
//                       {...field}
//                       error={!!errors.sellerSKUID}
//                       helperText={errors.sellerSKUID ? errors.sellerSKUID.message : ""}
//                       label="Seller SKU ID"
//                       placeholder="Enter Seller SKU ID"
//                       className="border-2 text-sm md:text-lg p-2 rounded-lg"
//                     />
//                   )}
//                 />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <div>Status Details</div>
//                 <Controller
//                   name="listingStatus"
//                   control={control}
//                   render={({ field }) => (
//                     // <TextField
//                     //   {...field}
//                     //   error={!!errors.productType}
//                     //   helperText={errors.productType ? errors.productType.message : ""}
//                     //   label="Product Type"
//                     //   placeholder="Enter Product Type"
//                     //   className="border-2 text-sm md:text-lg p-2 rounded-lg"
//                     // />
//                     <FormControl fullWidth>
//                       <InputLabel id="Listing Status">Listing Status</InputLabel>
//                       <Select
//                         {...field}
//                         labelId="listingStatus"
//                         id="listingStatus"
//                         label="Listing Status"
//                         placeholder="Select listingStatus"
//                       >
//                         <MenuItem value={'Active'}>Active</MenuItem>
//                         <MenuItem value={'Inactive'}>Inactive</MenuItem>
//                       </Select>
//                     </FormControl>
//                   )}
//                 />
//               </div>
//             </div>
//             <div>Price details</div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
                
//                 <Controller name="MRP" control={control} render={({ field }) => <TextField {...field} error={!!errors.MRP} helperText={errors.MRP ? errors.MRP.message : ''} label="MRP " placeholder="Enter MRP " className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="yourSellingPrice" control={control} render={({ field }) => <TextField {...field} error={!!errors.yourSellingPrice} helperText={errors.yourSellingPrice ? errors.yourSellingPrice.message : ''} label="Your selling price " placeholder="Enter Your selling price " className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>

//             <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller
//                   name="minimumOrderQuantity"
//                   control={control}
//                   render={({ field }) => (
//                     <FormControl fullWidth>
//                       <InputLabel id="Listing Status">Minimum Order Quantity (MinOQ)</InputLabel>
//                       <Select
//                         {...field}
//                         labelId="minimumOrderQuantity"
//                         id="minimumOrderQuantity"
//                         label="Minimum Order Quantity (MinOQ)"
//                         placeholder="Select Minimum Order Quantity (MinOQ)"
//                       >
//                         <MenuItem value={'1'}>1</MenuItem>
//                         <MenuItem value={'2'}>2</MenuItem>
//                       </Select>
//                     </FormControl>
//                   )}
//                 />
//               </div>
//               <div>Inventory details</div>
//             <div className="flex gap-7 flex-wrap">
              
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                   <Controller
//                   name="fullfilmentBy"
//                   control={control}
//                   render={({ field }) => (
//                     <FormControl fullWidth>
//                       <InputLabel id="Fullfilment by">Fullfilment by</InputLabel>
//                       <Select
//                         {...field}
//                         labelId="Fullfilment by"
//                         id="Fullfilment by"
//                         label="Fullfilment by"
//                         placeholder="Select Fullfilment by"
//                       >
//                         <MenuItem value={'Seller'}>Seller</MenuItem>
                      
//                       </Select>
//                     </FormControl>
//                   )}
//                 />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                   <Controller
//                   name="procurementType"
//                   control={control}
//                   render={({ field }) => (
//                     <FormControl fullWidth>
//                       <InputLabel id="Procurement type">Procurement type</InputLabel>
//                       <Select
//                         {...field}
//                         labelId="Procurement type"
//                         id="Procurement type"
//                         label="Procurement type"
//                         placeholder="Select Procurement type"
//                       >
//                         <MenuItem value={'In stock'}>In stock</MenuItem>
//                         <MenuItem value={'Express'}>Express</MenuItem>
//                         <MenuItem value={'Domestic Procurement'}>Domestic Procurement</MenuItem>
//                         <MenuItem value={'Made To Order'}>Made To Order</MenuItem>
                      
//                       </Select>
//                     </FormControl>
//                   )}
//                 />
//               </div>

//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
                
//                 <Controller name="procurementSLA" control={control} render={({ field }) => <TextField {...field} error={!!errors.procurementSLA} helperText={errors.procurementSLA ? errors.procurementSLA.message : ''} label="Procurement SLA " placeholder="Enter Procurement SLA " className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="Stock" control={control} render={({ field }) => <TextField {...field} error={!!errors.Stock} helperText={errors.Stock ? errors.Stock.message : ''} label="Stock" placeholder="Enter Stock " className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div>Shipping provider</div>
//             <div className="flex flex-col gap-2 md:flex-1 w-full">
//                   <Controller
//                   name="shippingProvider"
//                   control={control}
//                   render={({ field }) => (
//                     <FormControl fullWidth>
//                       <InputLabel id="Shipping provider">Shipping provider</InputLabel>
//                       <Select
//                         {...field}
//                         labelId="Shipping provider"
//                         id="Shipping provider"
//                         label="Shipping provider"
//                         placeholder="Select Shipping provider"
//                       >
//                         <MenuItem value={'Flipkart'}>Flipkart</MenuItem>
//                       </Select>
//                     </FormControl>
//                   )}
//                 />
//               </div>
//               <div>Delivery charge to customer</div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="Localelivery charge" control={control} render={({ field }) => <TextField {...field} error={!!errors.Stock} helperText={errors.Stock ? errors.Stock.message : ''} label="Local delivery charge" placeholder="Enter Local delivery charge " className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//           </AccordionDetails>
//         </Accordion>

//         {/* Product Description Accordion */}
//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-description" id="panel-description">
//             Description
//           </AccordionSummary>
//           <AccordionDetails>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="description" control={control} render={({ field }) => <TextField {...field} error={!!errors.description} helperText={errors.description ? errors.description.message : ''} label="Description" multiline rows={6} placeholder="Enter Product Description" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-4 md:flex-1 w-full">
//                 <Controller name="bulletPoint" control={control} render={({ field }) => <TextField {...field} error={!!errors.bulletPoint} helperText={errors.bulletPoint ? errors.bulletPoint.message : ''} label="Bullet Point" multiline rows={6} placeholder="Enter Bullet Point For Your Product" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>

//             {/* Upload Photos Section */}
//             <div className="flex mt-4 gap-7 flex-wrap">
//               <div className="flex-1">
//                 <h1>Upload Photos</h1>
//                 <div className="flex border-2 p-4 mt-2 rounded-lg justify-evenly gap-4 flex-wrap">
//                   <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
//                     {ProductPhotoSrc1 && <Image src={ProductPhotoSrc1} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
//                     {ProductPhotoSrc1 && (
//                       <IoIosCloseCircle
//                         className="text-xl absolute -top-2 -right-2 text-red-500"
//                         onClick={() => {
//                           setProductPhotoSrc1('');
//                           setProductData({ ...ProductData, productPhoto1: null });
//                         }}
//                       />
//                     )}
//                     {!ProductPhotoSrc1 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto1.current.click()} />}
//                     <input
//                       type="file"
//                       className="hidden"
//                       name="productPhoto1"
//                       ref={productPhoto1}
//                       onChange={e => {
//                         handleFileChange(e);
//                         setProductPhotoSrc1(URL.createObjectURL(e.target.files[0]));
//                       }}
//                     />
//                   </div>
//                   <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
//                     {ProductPhotoSrc2 && <Image src={ProductPhotoSrc2} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
//                     {ProductPhotoSrc2 && (
//                       <IoIosCloseCircle
//                         className="text-xl absolute -top-2 -right-2 text-red-500"
//                         onClick={() => {
//                           setProductPhotoSrc2('');
//                           setProductData({ ...ProductData, productPhoto2: null });
//                         }}
//                       />
//                     )}
//                     {!ProductPhotoSrc2 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto2.current.click()} />}
//                     <input
//                       type="file"
//                       className="hidden"
//                       name="productPhoto1"
//                       ref={productPhoto2}
//                       onChange={e => {
//                         handleFileChange(e);
//                         setProductPhotoSrc1(URL.createObjectURL(e.target.files[0]));
//                       }}
//                     />
//                   </div>
//                   <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
//                     {ProductPhotoSrc3 && <Image src={ProductPhotoSrc3} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
//                     {ProductPhotoSrc3 && (
//                       <IoIosCloseCircle
//                         className="text-xl absolute -top-2 -right-2 text-red-500"
//                         onClick={() => {
//                           setProductPhotoSrc3('');
//                           setProductData({ ...ProductData, productPhoto3: null });
//                         }}
//                       />
//                     )}
//                     {!ProductPhotoSrc3 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto3.current.click()} />}
//                     <input
//                       type="file"
//                       className="hidden"
//                       name="productPhoto1"
//                       ref={productPhoto3}
//                       onChange={e => {
//                         handleFileChange(e);
//                         setProductPhotoSrc3(URL.createObjectURL(e.target.files[0]));
//                       }}
//                     />
//                   </div>
//                   <div className="relative w-[7rem] h-[7rem] border-2 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
//                     {ProductPhotoSrc4 && <Image src={ProductPhotoSrc4} height={50} width={50} alt="p1" className="w-full h-full object-contain" />}
//                     {ProductPhotoSrc4 && (
//                       <IoIosCloseCircle
//                         className="text-xl absolute -top-2 -right-2 text-red-500"
//                         onClick={() => {
//                           setProductPhotoSrc4('');
//                           setProductData({ ...ProductData, productPhoto4: null });
//                         }}
//                       />
//                     )}
//                     {!ProductPhotoSrc4 && <FiPlusCircle className="text-2xl opacity-70" onClick={() => productPhoto4.current.click()} />}
//                     <input
//                       type="file"
//                       className="hidden"
//                       name="productPhoto1"
//                       ref={productPhoto4}
//                       onChange={e => {
//                         handleFileChange(e);
//                         setProductPhotoSrc4(URL.createObjectURL(e.target.files[0]));
//                       }}
//                     />
//                   </div>
//                   {/* Repeat for other product photos */}
//                 </div>
//               </div>
//             </div>
//           </AccordionDetails>
//         </Accordion>

//         {/* Product Details Accordion */}
//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-product-detail" id="panel-product-detail">
//             Product Details
//           </AccordionSummary>
//           <AccordionDetails className="flex flex-col gap-4">
//             <div className="flex gap-7 flex-wrap">
//               <div className="w-full">
//                 <FormLabel id="productCustomisation">Does this Product Have Customisation</FormLabel>
//                 <Controller
//                   name="hasProductCustomisation"
//                   control={control}
//                   render={({ field }) => (
//                     <RadioGroup {...field} aria-labelledby="productCustomisation" defaultValue="no">
//                       <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//                       <FormControlLabel value="no" control={<Radio />} label="No" />
//                     </RadioGroup>
//                   )}
//                 />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="targetAudienceKeyword" control={control} render={({ field }) => <TextField {...field} error={!!errors.targetAudienceKeyword} helperText={errors.targetAudienceKeyword ? errors.targetAudienceKeyword.message : ''} label="Target Audience Keyword" placeholder="Enter Keyword" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="modelNumber" control={control} render={({ field }) => <TextField {...field} error={!!errors.modelNumber} helperText={errors.modelNumber ? errors.modelNumber.message : ''} label="Model Number" placeholder="Enter Model Number" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="modelName" control={control} render={({ field }) => <TextField {...field} error={!!errors.modelName} helperText={errors.modelName ? errors.modelName.message : ''} label="Model Name" placeholder="Enter Model Name" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="manufacturer" control={control} render={({ field }) => <TextField {...field} error={!!errors.manufacturer} helperText={errors.manufacturer ? errors.manufacturer.message : ''} label="Manufacturer" placeholder="Enter Manufacturer Name" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="specialFeatures" control={control} render={({ field }) => <TextField {...field} error={!!errors.specialFeatures} helperText={errors.specialFeatures ? errors.specialFeatures.message : ''} label="Special Features" placeholder="Enter Special Features" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="material" control={control} render={({ field }) => <TextField {...field} error={!!errors.material} helperText={errors.material ? errors.material.message : ''} label="Material" placeholder="Enter Material" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="itemTypeName" control={control} render={({ field }) => <TextField {...field} error={!!errors.itemTypeName} helperText={errors.itemTypeName ? errors.itemTypeName.message : ''} label="Item Type Name" placeholder="Enter Item Type Name" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="subjectCharacter" control={control} render={({ field }) => <TextField {...field} error={!!errors.subjectCharacter} helperText={errors.subjectCharacter ? errors.subjectCharacter.message : ''} label="Subject Character" placeholder="Enter Subject Character" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="color" control={control} render={({ field }) => <TextField {...field} error={!!errors.color} helperText={errors.color ? errors.color.message : ''} label="Color" placeholder="Enter Color" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="noOfPieces" control={control} render={({ field }) => <TextField {...field} error={!!errors.noOfPieces} helperText={errors.noOfPieces ? errors.noOfPieces.message : ''} label="No Of Pieces" placeholder="Enter Number Of Pieces" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="occasion" control={control} render={({ field }) => <TextField {...field} error={!!errors.occasion} helperText={errors.occasion ? errors.occasion.message : ''} label="Occasion" placeholder="Enter Occasion" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="partNumber" control={control} render={({ field }) => <TextField {...field} error={!!errors.partNumber} helperText={errors.partNumber ? errors.partNumber.message : ''} label="Part Number" placeholder="Enter Part Number" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="subBrand" control={control} render={({ field }) => <TextField {...field} error={!!errors.subBrand} helperText={errors.subBrand ? errors.subBrand.message : ''} label="Sub Brand" placeholder="Enter Sub Brand" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="manufacturerContactInfo" control={control} render={({ field }) => <TextField {...field} multiline rows={3} error={!!errors.manufacturerContactInfo} helperText={errors.manufacturerContactInfo ? errors.manufacturerContactInfo.message : ''} label="Manufacturer Contact Information" placeholder="Enter Manufacturer Contact Information" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="w-full">
//                 <FormLabel id="requiredAssembly">Does this Product Required Assembly</FormLabel>
//                 <Controller
//                   name="requiredAssembly"
//                   control={control}
//                   render={({ field }) => (
//                     <RadioGroup {...field} aria-labelledby="requiredAssembly" defaultValue="no">
//                       <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//                       <FormControlLabel value="no" control={<Radio />} label="No" />
//                     </RadioGroup>
//                   )}
//                 />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="finishType" control={control} render={({ field }) => <TextField {...field} error={!!errors.finishType} helperText={errors.finishType ? errors.finishType.message : ''} label="Finish Type" placeholder="Enter Finish Type" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="unitCount" control={control} render={({ field }) => <TextField {...field} error={!!errors.unitCount} helperText={errors.unitCount ? errors.unitCount.message : ''} label="Unit Count" placeholder="Enter Number Of Units Available" className="border-2 text-sm md:text-lg p -2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="unitCountType" control={control} render={({ field }) => <TextField {...field} error={!!errors.unitCountType} helperText={errors.unitCountType ? errors.unitCountType.message : ''} label="Unit Count Type" placeholder="Enter Unit Type" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="manufactureMinAge" control={control} render={({ field }) => <TextField {...field} error={!!errors.manufactureMinAge} helperText={errors.manufactureMinAge ? errors.manufactureMinAge.message : ''} label="Manufacture Minimum Age" placeholder="Enter Manufacture Minimum Age" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="manufactureMaxAge" control={control} render={({ field }) => <TextField {...field} error={!!errors.manufactureMaxAge} helperText={errors.manufactureMaxAge ? errors.manufactureMaxAge.message : ''} label="Manufacture Maximum Age" placeholder="Enter Manufacture Maximum Age" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="includedComponents" control={control} render={({ field }) => <TextField {...field} error={!!errors.includedComponents} helperText={errors.includedComponents ? errors.includedComponents.message : ''} label="Included Components" placeholder="Enter Included Components" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="leagueName" control={control} render={({ field }) => <TextField {...field} error={!!errors.leagueName} helperText={errors.leagueName ? errors.leagueName.message : ''} label="League Name" placeholder="Enter League Name" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex flex-col gap-2 md:flex-1 w-full">
//               <Controller name="teamName" control={control} render={({ field }) => <TextField {...field} error={!!errors.teamName} helperText={errors.teamName ? errors.teamName.message : ''} label="Team Name" placeholder="Enter Team Name" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="externalProductInfoEntity" control={control} render={({ field }) => <TextField {...field} error={!!errors.externalProductInfoEntity} helperText={errors.externalProductInfoEntity ? errors.externalProductInfoEntity.message : ''} label="External Product Information Entity" placeholder="Enter External Product Information Entity" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="externalProductInfo" control={control} render={({ field }) => <TextField {...field} error={!!errors.externalProductInfo} helperText={errors.externalProductInfo ? errors.externalProductInfo.message : ''} label="External Product Information" placeholder="Enter External Product Information" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="importerContactInfo" control={control} render={({ field }) => <TextField {...field} multiline rows={4} error={!!errors.importerContactInfo} helperText={errors.importerContactInfo ? errors.importerContactInfo.message : ''} label="Importer Contact Information" placeholder="Enter Importer Contact Information" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="packerContactInfo" control={control} render={({ field }) => <TextField {...field} multiline rows={4} error={!!errors.packerContactInfo} helperText={errors.packerContactInfo ? errors.packerContactInfo.message : ''} label="Packer Contact Information" placeholder="Enter Packer Contact Information" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>

//             {/* Product Dimension Form */}
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="heightBaseToTop" control={control} render={({ field }) => <TextField {...field} error={!!errors.heightBaseToTop} helperText={errors.heightBaseToTop ? errors.heightBaseToTop.message : ''} label="Height Base To Top" placeholder="Enter Height Base To Top" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller
//                   name="heightUnit"
//                   control={control}
//                   render={({ field }) => (
//                     <FormControl fullWidth>
//                       <InputLabel id="heightUnit">Height Unit</InputLabel>
//                       <Select {...field} label="height Unit" className="text-sm md:text-lg rounded-lg">
//                         <MenuItem value="meter">meter</MenuItem>
//                         <MenuItem value="centimeter">Centimeter</MenuItem>
//                       </Select>
//                     </FormControl>
//                   )}
//                 />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="lengthLongerHorizontalEdge" control={control} render={({ field }) => <TextField {...field} error={!!errors.lengthLongerHorizontalEdge} helperText={errors.lengthLongerHorizontalEdge ? errors.lengthLongerHorizontalEdge.message : ''} label="Length Longer Horizontal Edge" placeholder="Enter Length Longer Horizontal Edge" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller
//                   name="lengthLongerHorizontalEdgeUnit"
//                   control={control}
//                   render={({ field }) => (
//                     <FormControl fullWidth>
//                       <InputLabel id="lengthLongerHorizontalEdgeUnit">length Longer Horizontal Edge Unit</InputLabel>
//                       <Select {...field} label="length Longer Horizontal Edge Unit" className="text-sm md:text-lg rounded-lg">
//                         <MenuItem value="meter">Meter</MenuItem>
//                         <MenuItem value="centimeter">Centimeter</MenuItem>
//                       </Select>
//                     </FormControl>
//                   )}
//                 />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="widthShorterHorizontalEdge" control={control} render={({ field }) => <TextField {...field} error={!!errors.widthShorterHorizontalEdge} helperText={errors.widthShorterHorizontalEdge ? errors.widthShorterHorizontalEdge.message : ''} label="Width Shorter Horizontal Edge" placeholder="Enter Width Shorter Horizontal Edge" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller
//                   name="widthShorterHorizontalEdgeUnit"
//                   control={control}
//                   render={({ field }) => (
//                     <FormControl fullWidth>
//                       <InputLabel id="widthShorterHorizontalEdgeUnit">Width Shorter Horizontal Edge Unit</InputLabel>
//                       <Select {...field} label="Width Shorter Horizontal Edge Unit" className="text-sm md:text-lg rounded-lg">
//                         <MenuItem value="unit">Unit</MenuItem>
//                         <MenuItem value="centimeter">Centimeter</MenuItem>
//                       </Select>
//                     </FormControl>
//                   )}
//                 />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="animalTheme" control={control} render={({ field }) => <TextField {...field} error={!!errors.animalTheme} helperText={errors.animalTheme ? errors.animalTheme.message : ''} label="Animal Theme" placeholder="Enter Animal Theme" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="toyFigureType" control={control} render={({ field }) => <TextField {...field} error={!!errors.toyFigureType} helperText={errors.toyFigureType ? errors.toyFigureType.message : ''} label="Toy Figure Type" placeholder="Enter Toy Figure Type" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-offer" id="panel-offer">
//             Offer
//           </AccordionSummary>
//           <AccordionDetails className="flex flex-col gap-4">
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="sellerSKU" control={control} render={({ field }) => <TextField {...field} error={!!errors.sellerSKU} helperText={errors.sellerSKU ? errors.sellerSKU.message : ''} label="Seller SKU" placeholder="Enter Seller SKU" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="quantity" control={control} render={({ field }) => <TextField {...field} error={!!errors.quantity} helperText={errors.quantity ? errors.quantity.message : ''} label="Quantity" placeholder="Enter Quantity" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="yourPrice" control={control} render={({ field }) => <TextField {...field} error={!!errors.yourPrice} helperText={errors.yourPrice ? errors.yourPrice.message : ''} label="Your Price" placeholder="Enter Your Price" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="maxRetailPrice" control={control} render={({ field }) => <TextField {...field} error={!!errors.maxRetailPrice} helperText={errors.maxRetailPrice ? errors.maxRetailPrice.message : ''} label="Maximum Retail Price" placeholder="Enter Maximum Retail Price" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller
//                   name="offeringConditionType"
//                   control={control}
//                   render={({ field }) => (
//                     <TextField
//                       {...field}
//                       error={!!errors.offeringConditionType}
//                       helperText={errors.offeringConditionType ? errors.offeringConditionType.message : ""}
//                       label="Offering Condition Type"
//                       placeholder="Enter Offering Condition Type"
//                       className="border-2 text-sm md:text-lg p-2 rounded-lg"
//                     />
//                   )}
//                 />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller
//                   name="merchantShippingGroup"
//                   control={control}
//                   render={({ field }) => (
//                     <TextField
//                       {...field}
//                       error={!!errors.merchantShippingGroup}
//                       helperText={errors.merchantShippingGroup ? errors.merchantShippingGroup.message : ""}
//                       label="Merchant Shipping Group"
//                       placeholder="Enter Merchant Shipping Group"
//                       className="border-2 text-sm md:text-lg p-2 rounded-lg"
//                     />
//                   )}
//                 />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="w-full">
//                 <FormLabel id="fullfillmentChannel">Fullfillment Channel</FormLabel>
//                 <Controller
//                   name="fullfillmentChannel"
//                   control={control}
//                   render={({ field }) => (
//                     <RadioGroup
//                       {...field}
//                       aria-labelledby="fullfillmentChannel"
//                       defaultValue="1"
//                     >
//                       <FormControlLabel value="1" control={<Radio />} label="I will ship this item myself (Self Ship) or I will pack this item and Amazon will pick up & ship (Easy Ship) (Merchant Fulfilled)" />
//                       <FormControlLabel value="2" control={<Radio />} label="Amazon will ship and provide customer service (Fulfilled by Amazon)" />
//                     </RadioGroup>
//                   )}
//                 />
//               </div>
//             </div>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-safety" id="panel-safety">
//             Safety & Compliance
//           </AccordionSummary>
//           <AccordionDetails className="flex flex-col gap-4">
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="safetyWarning" control={control} render={({ field }) => <TextField {...field} error={!!errors.safetyWarning} helperText={errors.safetyWarning ? errors.safetyWarning.message : ''} label="Safety Warning" placeholder="Enter Safety Warning" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="country" control={control} render={({ field }) => <TextField {...field} error={!!errors.country} helperText={errors.country ? errors.country.message : ''} label="Country/Region of Origin" placeholder="Enter Country/Region of Origin" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="w-full">
//                 <FormLabel id="batteriesRequired">Are batteries required?</FormLabel>
//                 <Controller
//                   name="hasBatteries"
//                   control={control}
//                   render={({ field }) => (
//                     <RadioGroup {...field} aria-labelledby="batteriesRequired" defaultValue="no">
//                       <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//                       <FormControlLabel value="no" control={<Radio />} label="No" />
//                     </RadioGroup>
//                   )}
//                 />
//               </div>
//             </div>
//             <div className="flex gap-7 flex-wrap">
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller name="itemWeight" control={control} render={({ field }) => <TextField {...field} error={!!errors.itemWeight} helperText={errors.itemWeight ? errors.itemWeight.message : ''} label="Item Weight" placeholder="Enter Item Weight" className="border-2 text-sm md:text-lg p-2 rounded-lg" />} />
//               </div>
//               <div className="flex flex-col gap-2 md:flex-1 w-full">
//                 <Controller
//                   name="weightUnit"
//                   control={control}
//                   render={({ field }) => (
//                     <FormControl fullWidth>
//                       <InputLabel id="weightUnit">Weight Unit</InputLabel>
//                       <Select {...field} label="Weight Unit" className="text-sm md:text-lg rounded-lg">
//                         <MenuItem value="grams">Grams</MenuItem>
//                         <MenuItem value="kg">KiloGrams</MenuItem>
//                       </Select>
//                     </FormControl>
//                   )}
//                 />
//               </div>
//             </div>
//           </AccordionDetails>
//         </Accordion>
//       </div>

//       <div className="submitBtn mt-4 flex justify-between items-center gap-5">
//         <button type="button" className="p-2 px-4 bg-[#535454] text-white rounded-lg flex gap-2 items-center">
//           Cancel
//         </button>
//         <div className="flex gap-5 items-center">
//           <button className="p-2 px-4 bg-[#518f8c] text-white rounded-lg flex gap-2 items-center text-sm md:text-normal">Save as Draft </button>
//           <button onClick={e => handleSubmit(e)} className="p-2 px-4 bg-[#08A9A0] text-white rounded-lg flex gap-2 items-center">
//             Save{' '}
//             <span className="text-2xl">
//               <IoIosArrowRoundForward />
//             </span>{' '}
//           </button>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default FlipkartForm



import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Box,
  FormControlLabel,
} from "@mui/material";
import { useSelector } from "react-redux";
import { CheckBox } from "@mui/icons-material";

const FlipkartListingForm = () => {
  const [formData, setFormData] = useState({
    sku: "",
    product_id: "",
    price: { mrp: 0, selling_price: 0, currency: "INR" },
    tax: { hsn: "", tax_code: "" },
    listing_status: "ACTIVE",
    shipping_fees: { local: 0, zonal: 0, national: 0, currency: "INR" },
    fulfillment_profile: "NON_FBF",
    fulfillment: {
      dispatch_sla: 1,
      shipping_provider: "FLIPKART",
      procurement_type: "REGULAR",
    },
    packages: [
      {
        name: "",
        dimensions: { length: 0, breadth: 0, height: 0 },
        weight: 0,
        description: "",
        handling: { fragile: false },
        notional_value: { amount: 0, unit: "PERCENTAGE" },
      },
    ],
    locations: [{ id: "", status: "ENABLED", inventory: 0 }],
    address_label: {
      manufacturer_details: [""],
      importer_details: [""],
      packer_details: [""],
      countries_of_origin: ["IN"],
    },
    dating_label: { mfg_date: 0, shelf_life: 0 },
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const accessToken = useSelector((state) => state?.user?.user?.user?.flipkart?.accessToken)
console.log(accessToken,"accessToken")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  

  const handleNestedChange = (path, value) => {
    const keys = path.split(".");
    setFormData((prev) => {
      const updated = { ...prev };
      let current = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  const handlePackageChange = (index, field, value) => {
    const updatedPackages = [...formData.packages];
    updatedPackages[index][field] = value;
    setFormData((prev) => ({ ...prev, packages: updatedPackages }));
  };

  const handleLocationChange = (index, field, value) => {
    const updatedLocations = [...formData.locations];
    updatedLocations[index][field] = value;
    setFormData((prev) => ({ ...prev, locations: updatedLocations }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      // const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with actual access token
      const response = await axios.post(
        "http://localhost:4000/api/flipkart/inventory-management/createListings",
        // "https://admin.naturalganic.com/api/flipkart/inventory-management/createListings",
        { [formData.sku]: formData, accessToken:accessToken },

        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      );

      if (response.data[formData.sku].status === "success") {
        setSuccess(true);
      } else {
        setError(response.data[formData.sku].errors);
      }
    } catch (err) {
      console.error("Error creating listing:", err.response?.data || err.message);
      setError(err.response?.data || { message: "Failed to create listing" });
    }
  };

  return (
    <Container>
    <Typography variant="h4" gutterBottom>
      Flipkart Product Listing
    </Typography>
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        {/* SKU */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="SKU"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Product ID */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Product ID"
            name="product_id"
            value={formData.product_id}
            onChange={handleChange}
            required
          />
        </Grid>

        {/* Price */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="MRP"
            type="number"
            value={formData.price.mrp}
            onChange={(e) =>
              handleNestedChange("price.mrp", parseFloat(e.target.value))
            }
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Selling Price"
            type="number"
            value={formData.price.selling_price}
            onChange={(e) =>
              handleNestedChange("price.selling_price", parseFloat(e.target.value))
            }
            required
          />
        </Grid>

        {/* Tax */}
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="HSN"
            name="hsn"
            value={formData.tax.hsn}
            onChange={(e) => handleNestedChange("tax.hsn", e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={6}>
          {/* <TextField
            fullWidth
            label="Tax Code"
            name="tax_code"
            value={formData.tax.tax_code}
            onChange={(e) => handleNestedChange("tax.tax_code", e.target.value)}
            required
          /> */}
          <FormControl fullWidth>
            <InputLabel>Tax Code</InputLabel>
            <Select
              value={formData.tax.tax_code}
              onChange={(e) => handleNestedChange("tax.tax_code", e.target.value)}
              label="Tax Code"
            >
              <MenuItem value="GST_0">GST 0</MenuItem>
              {/* <MenuItem value="INACTIVE">Inactive</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>

        {/* Listing Status */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Listing Status</InputLabel>
            <Select
              value={formData.listing_status}
              onChange={(e) => handleNestedChange("listing_status", e.target.value)}
              label="Listing Status"
            >
              <MenuItem value="ACTIVE">Active</MenuItem>
              <MenuItem value="INACTIVE">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Shipping Fees */}
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Local Shipping Fee"
            type="number"
            value={formData.shipping_fees.local}
            onChange={(e) =>
              handleNestedChange("shipping_fees.local", parseFloat(e.target.value))
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Zonal Shipping Fee"
            type="number"
            value={formData.shipping_fees.zonal}
            onChange={(e) =>
              handleNestedChange("shipping_fees.zonal", parseFloat(e.target.value))
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="National Shipping Fee"
            type="number"
            value={formData.shipping_fees.national}
            onChange={(e) =>
              handleNestedChange("shipping_fees.national", parseFloat(e.target.value))
            }
          />
        </Grid>

        {/* Fulfillment Profile */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Fulfillment Profile</InputLabel>
            <Select
              value={formData.fulfillment_profile}
              onChange={(e) => handleNestedChange("fulfillment_profile", e.target.value)}
              label="Fulfillment Profile"
            >
              <MenuItem value="NON_FBF">Non-FBF</MenuItem>
              <MenuItem value="FBF_LITE">FBF Lite</MenuItem>
              <MenuItem value="FBF">FBF</MenuItem>
              <MenuItem value="FBF_AND_FBF_LITE">FBF & FBF Lite</MenuItem>
              <MenuItem value="FBF_AND_NON_FBF">FBF & Non-FBF</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Fulfillment Details */}
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Dispatch SLA (Days)"
            type="number"
            value={formData.fulfillment.dispatch_sla}
            onChange={(e) =>
              handleNestedChange("fulfillment.dispatch_sla", parseInt(e.target.value))
            }
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Shipping Provider</InputLabel>
            <Select
              value={formData.fulfillment.shipping_provider}
              onChange={(e) =>
                handleNestedChange("fulfillment.shipping_provider", e.target.value)
              }
              label="Shipping Provider"
            >
              <MenuItem value="FLIPKART">Flipkart</MenuItem>
              <MenuItem value="SELLER">Seller</MenuItem>
              <MenuItem value="FLIPKART_SELLER">Flipkart & Seller</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Procurement Type</InputLabel>
            <Select
              value={formData.fulfillment.procurement_type}
              onChange={(e) =>
                handleNestedChange("fulfillment.procurement_type", e.target.value)
              }
              label="Procurement Type"
            >
              <MenuItem value="REGULAR">Regular</MenuItem>
              <MenuItem value="EXPRESS">Express</MenuItem>
              <MenuItem value="INTERNATIONAL">International</MenuItem>
              <MenuItem value="MADE_TO_ORDER">Made to Order</MenuItem>
              <MenuItem value="DOMESTIC">Domestic</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Packages */}
        {formData.packages.map((pkg, index) => (
          <Grid container spacing={3} key={index}>
            <Grid item xs={12}>
              <Typography variant="h6">Package {index + 1}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Package Name"
                value={pkg.name}
                onChange={(e) => handlePackageChange(index, "name", e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Length (cm)"
                type="number"
                value={pkg.dimensions.length}
                onChange={(e) =>
                  handlePackageChange(index, "dimensions", {
                    ...pkg.dimensions,
                    length: parseFloat(e.target.value),
                  })
                }
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Breadth (cm)"
                type="number"
                value={pkg.dimensions.breadth}
                onChange={(e) =>
                  handlePackageChange(index, "dimensions", {
                    ...pkg.dimensions,
                    breadth: parseFloat(e.target.value),
                  })
                }
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label="Height (cm)"
                type="number"
                value={pkg.dimensions.height}
                onChange={(e) =>
                  handlePackageChange(index, "dimensions", {
                    ...pkg.dimensions,
                    height: parseFloat(e.target.value),
                  })
                }
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Weight (kg)"
                type="number"
                value={pkg.weight}
                onChange={(e) =>
                  handlePackageChange(index, "weight", parseFloat(e.target.value))
                }
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Description"
                value={pkg.description}
                onChange={(e) =>
                  handlePackageChange(index, "description", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={
                  <CheckBox
                    checked={pkg.handling.fragile}
                    onChange={(e) =>
                      handlePackageChange(index, "handling", {
                        ...pkg.handling,
                        fragile: e.target.checked,
                      })
                    }
                  />
                }
                label="Fragile"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Notional Value Amount"
                type="number"
                value={pkg.notional_value.amount}
                onChange={(e) =>
                  handlePackageChange(index, "notional_value", {
                    ...pkg.notional_value,
                    amount: parseFloat(e.target.value),
                  })
                }
                required
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Notional Value Unit</InputLabel>
                <Select
                  value={pkg.notional_value.unit}
                  onChange={(e) =>
                    handlePackageChange(index, "notional_value", {
                      ...pkg.notional_value,
                      unit: e.target.value,
                    })
                  }
                  label="Notional Value Unit"
                >
                  <MenuItem value="PERCENTAGE">Percentage</MenuItem>
                  <MenuItem value="INR">INR</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        ))}

        {/* Locations */}
        {formData.locations.map((location, index) => (
          <Grid container spacing={3} key={index}>
            <Grid item xs={12}>
              <Typography variant="h6">Location {index + 1}</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Location ID"
                value={location.id}
                onChange={(e) =>
                  handleLocationChange(index, "id", e.target.value)
                }
                required
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Location Status</InputLabel>
                <Select
                  value={location.status}
                  onChange={(e) =>
                    handleLocationChange(index, "status", e.target.value)
                  }
                  label="Location Status"
                >
                  <MenuItem value="ENABLED">Enabled</MenuItem>
                  <MenuItem value="DISABLED">Disabled</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Inventory"
                type="number"
                value={location.inventory}
                onChange={(e) =>
                  handleLocationChange(index, "inventory", parseInt(e.target.value))
                }
                required
              />
            </Grid>
          </Grid>
        ))}

        {/* Address Label */}
        <Grid item xs={12}>
          <Typography variant="h6">Address Label</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Manufacturer Details"
            value={formData.address_label.manufacturer_details[0]}
            onChange={(e) =>
              handleNestedChange("address_label.manufacturer_details", [e.target.value])
            }
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Importer Details"
            value={formData.address_label.importer_details[0]}
            onChange={(e) =>
              handleNestedChange("address_label.importer_details", [e.target.value])
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Packer Details"
            value={formData.address_label.packer_details[0]}
            onChange={(e) =>
              handleNestedChange("address_label.packer_details", [e.target.value])
            }
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Country of Origin (ISO Code)"
            value={formData.address_label.countries_of_origin[0]}
            onChange={(e) =>
              handleNestedChange("address_label.countries_of_origin", [e.target.value])
            }
            required
          />
        </Grid>

        {/* Dating Label */}
        <Grid item xs={12}>
          <Typography variant="h6">Dating Label</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Manufacturing Date (EPOCH)"
            type="number"
            value={formData.dating_label.mfg_date}
            onChange={(e) =>
              handleNestedChange("dating_label.mfg_date", parseInt(e.target.value))
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Shelf Life (Seconds)"
            type="number"
            value={formData.dating_label.shelf_life}
            onChange={(e) =>
              handleNestedChange("dating_label.shelf_life", parseInt(e.target.value))
            }
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Create Listing
          </Button>
        </Grid>
      </Grid>
    </Box>

    {/* Success/Error Messages */}
    {success && (
      <Typography variant="body1" color="success" sx={{ mt: 2 }}>
        Listing created successfully!
      </Typography>
    )}
    {error && (
      <Typography variant="body1" color="error" sx={{ mt: 2 }}>
        Error: {error.message || "Failed to create listing."}
      </Typography>
    )}
  </Container>

  );
};

export default FlipkartListingForm;