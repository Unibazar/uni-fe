// 'use client';

// import Loader from '@/components/Loader/Loader';
// import { addProduct } from '@/redux/slice/productSlice';
// import { Box, TextField, Tab, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useEffect, useRef, useState } from 'react';
// import { FiPlusCircle } from 'react-icons/fi';
// import { IoIosArrowRoundForward } from 'react-icons/io';
// import { IoIosCloseCircle } from 'react-icons/io';
// import { useDispatch, useSelector } from 'react-redux';
// import React from 'react';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { DataArray } from '@mui/icons-material';
// import AmazonForm from './FormGroup/AmazonForm';
// import FlipkartForm from './FormGroup/FlipkartForm';
// import MeeshoForm from './FormGroup/MeeshoForm';
// import MyntraForm from './FormGroup/MyntraForm';

// export default function AddProductPage() {
//   const [platform, setPlatform] = useState('amazon');
//   const [snackbarState, setSnackbarState] = useState({
//     open: false,
//     message: '',
//     severity: 'success',
//   });

//   const [ProductPhotoSrc1, setProductPhotoSrc1] = useState('');
//   const [ProductPhotoSrc2, setProductPhotoSrc2] = useState('');
//   const [ProductPhotoSrc3, setProductPhotoSrc3] = useState('');
//   const [ProductPhotoSrc4, setProductPhotoSrc4] = useState(''); // Initialize product photo state
//   const productPhoto1 = useRef(null);
//   const productPhoto2 = useRef(null);
//   const productPhoto3 = useRef(null);
//   const productPhoto4 = useRef(null);

//   const handleSnackbarClose = () => {
//     setSnackbarState(prev => ({ ...prev, open: false }));
//   };

//   const handleChange = event => {
//     console.log(event.target.name, event.target.checked);
//   };

//   const dispatch = useDispatch();
//   const navigate = useRouter();

//   const { product, isLoading } = useSelector(state => state.product);
//   const userData = useSelector(state => state?.user?.user?.user?.businessInformation);
//   console.log(userData, 'user');
//   const {
//     control,
//     handleSubmit,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     // resolver: yupResolver(validationSchema),
//   });




//   const onSubmit = data => {
//     console.log(data);

//     const payload = {
//       productType: data.productType,
//       sku: data.sku,
//       requirements: data.requirements,
//       marketplaceId: userData?.amazon.marketplace,
//       sellerId: userData?.amazon?.sellerId,
//       conditionType: data.conditionType,
//       itemName: data.itemName,
//       mainImage: {
//         link: data.productPhoto1,
//         height: 248,
//         width: 300,
//       },

//       attributes: {
//         color: [
//           {
//             language_tag: data.language_tag,
//             value: data.color,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         item_type_name: [
//           {
//             language_tag: data.language_tag,
//             value: data.itemTypeName,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         included_components: [
//           {
//             language_tag: data.language_tag,
//             value: data.value,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         fulfillment_availability: [
//           {
//             fulfillment_channel_code: data.fulfillment_channel_code,
//             quantity: data.quantity,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         manufacturer: [
//           {
//             language_tag: data.language_tag,
//             value: data.manufacturer,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         item_weight: [
//           {
//             unit: data.unit,
//             value: data.item_weight,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         recommended_browse_nodes: [
//           {
//             value: data.browserNodes,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         bullet_point: [
//           {
//             language_tag: data.language_tag,
//             value: data.bulletPoint,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         product_description: [
//           {
//             language_tag: data.language_tag,
//             value: data.description,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         brand: [
//           {
//             language_tag: data.language_tag,
//             value: data.brandName,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         supplier_declared_has_product_identifier_exemption: [
//           {
//             value: data.value,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         country_of_origin: [
//           {
//             value: data.value,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         rtip_manufacturer_contact_information: [
//           {
//             value: data.manufacturerContactInfo,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         merchant_shipping_group: [
//           {
//             value: data.value,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         item_name: [
//           {
//             language_tag: data.language_tag,
//             value: data.itemName,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         condition_type: [
//           {
//             value: data.condition_type,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         material: [
//           {
//             language_tag: data.language_tag,
//             value: data.material,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         department: [
//           {
//             value: data.department,
//           },
//         ],
//         model_name: [
//           {
//             value: data.modelName,
//           },
//         ],
//         warranty_description: [
//           {
//             value: data.warranty_description,
//           },
//         ],
//         item_dimensions: [
//           {
//             height: {
//               unit: data.unit,
//               value: data.item_dimensions,
//             },
//             length: {
//               unit: data.unit,
//               value: data.item_dimensions,
//             },
//             width: {
//               unit: data.unit,
//               value: data.item_dimensions,
//             },
//           },
//         ],
//         supplier_declared_dg_hz_regulation: [
//           {
//             value: data.value,
//           },
//         ],
//         part_number: [
//           {
//             value: data.partNumber,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         external_product_information: [
//           {
//             entity: data.entity,
//             value: data.external_product_information,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         unit_count: [
//           {
//             value: data.noOfPieces,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         packer_contact_information: [
//           {
//             language_tag: data.language_tag,
//             value: data.packer_contact_information,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         other_product_image_locator_1: [
//           {
//             media_location: data.other_product_image_locator_1,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//         main_product_image_locator: [
//           {
//             media_location: data.main_product_image_locator,
//             marketplace_id: userData?.amazon?.marketplace,
//           },
//         ],
//       },

//       fulfillmentAvailability: [
//         {
//           fulfillmentChannelCode: data.fulfillmentChannelCode,
//           quantity: data.quantity,
//         },
//       ],
//     };

//     // Dispatch the action to add the product
//     dispatch(addProduct(payload)).then(result => {
//       console.log(result, 'result');
//       if (result?.payload?.message === 'Product created/updated successfully') {
//         setSnackbarState(prev => ({ ...prev, open: true, message: 'Product Added Successfully' }));

//         navigate.push('products?q=list');
//       } else {
//         const errorMessages = result?.payload?.details?.errors?.map(error => error.message).join(', ');
//         setSnackbarState(prev => ({
//           ...prev,
//           open: true,
//           message: errorMessages || 'Unable to add product',
//           severity: 'error',
//         }));
//       }
//     });
//   };

//   const handleTabChange = (event, newValue) => {
//     setPlatform(newValue); // Update the platform state
//   };

//   useEffect(() => {
//     if (product && product.success) {
//       // Handle success if needed
//     }
//   }, [product]);

//   return (
//     <>
//       {isLoading && <Loader />}
//       <Snackbar open={snackbarState.open} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
//         <MuiAlert onClose={handleSnackbarClose} severity={snackbarState.severity} sx={{ width: '100%' }}>
//           {snackbarState.message}
//         </MuiAlert>
//       </Snackbar>
//       <div className="h-full w-full px-4 py-4 md:px-7 md:py-7">
//         <div className="title flex flex-wrap justify-between items-center">
//           <h1 className="md:text-3xl text-lg font-semibold ">Products</h1>
//           <div className="">
//             <Link href="/dashboard/products?q=list" className="box p-3 bg-[#08A9A0] text-white rounded-l-md text-sm">
//               Show All Products
//             </Link>
//           </div>
//         </div>

//         <div className="box s flex mt-4 gap-4 flex-wrap bg-white rounded-xl">
//           <Box className="w-full">
//             <TabContext value={platform}>
//               <Box>
//                 <TabList onChange={handleTabChange} aria-label="lab API tabs example">
//                   <Tab label="Amazon" value="amazon" />
//                   <Tab label="Flipkart" value="flipkart" />
//                   <Tab label="Myntra" value="myntra" />
//                   <Tab label="Meesho" value="meesho" />
//                   <Tab label="Others" value="others" />
//                 </TabList>
//               </Box>
//               <TabPanel value="amazon">
//                 <AmazonForm handleSubmit={handleSubmit} onSubmit={onSubmit} control={control} ProductPhotoSrc1={ProductPhotoSrc1} productPhoto1={productPhoto1} ProductPhotoSrc2={ProductPhotoSrc2} productPhoto2={productPhoto2} ProductPhotoSrc3={ProductPhotoSrc3} productPhoto3={productPhoto3} ProductPhotoSrc4={ProductPhotoSrc4} productPhoto4={productPhoto4} errors={errors} watch={watch} setValue={setValue} />
//               </TabPanel>
//               <TabPanel value="flipkart">
//                 <FlipkartForm handleSubmit={handleSubmit} onSubmit={onSubmit} control={control} ProductPhotoSrc1={ProductPhotoSrc1} productPhoto1={productPhoto1} ProductPhotoSrc2={ProductPhotoSrc2} productPhoto2={productPhoto2} ProductPhotoSrc3={ProductPhotoSrc3} productPhoto3={productPhoto3} ProductPhotoSrc4={ProductPhotoSrc4} productPhoto4={productPhoto4} errors={errors} watch={watch} setValue={setValue} />
//               </TabPanel>
//               {/* <TabPanel value="flipkart"><FlipkartForm handleSubmit={handleSubmit} onSubmit={onSubmit} control={control} ProductPhotoSrc1={ProductPhotoSrc1} productPhoto1={productPhoto1} ProductPhotoSrc2={ProductPhotoSrc2} productPhoto2={productPhoto2} ProductPhotoSrc3={ProductPhotoSrc3} productPhoto3={productPhoto3} ProductPhotoSrc4={ProductPhotoSrc4} productPhoto4={productPhoto4} errors={errors} watch={watch} setValue={setValue}/></TabPanel> */}
//               <TabPanel value="myntra"><MyntraForm handleSubmit={handleSubmit} onSubmit={onSubmit} control={control} ProductPhotoSrc1={ProductPhotoSrc1} productPhoto1={productPhoto1} ProductPhotoSrc2={ProductPhotoSrc2} productPhoto2={productPhoto2} ProductPhotoSrc3={ProductPhotoSrc3} productPhoto3={productPhoto3} ProductPhotoSrc4={ProductPhotoSrc4} productPhoto4={productPhoto4} errors={errors} watch={watch} setValue={setValue}/> </TabPanel>
              
//               <TabPanel value="meesho"><MeeshoForm handleSubmit={handleSubmit} onSubmit={onSubmit} control={control} ProductPhotoSrc1={ProductPhotoSrc1} productPhoto1={productPhoto1} ProductPhotoSrc2={ProductPhotoSrc2} productPhoto2={productPhoto2} ProductPhotoSrc3={ProductPhotoSrc3} productPhoto3={productPhoto3} ProductPhotoSrc4={ProductPhotoSrc4} productPhoto4={productPhoto4} errors={errors} watch={watch} setValue={setValue}/> </TabPanel>
//               <TabPanel value="others">Coming soon</TabPanel>
//             </TabContext>
//           </Box>
//         </div>
//       </div>
//     </>
//   );
// }



"use client"

import Loader from "@/components/Loader/Loader"
import { addProduct } from "@/redux/slice/productSlice"
import {
  Box,
  TextField,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
  styled,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { FiPlusCircle } from "react-icons/fi"
import { IoIosArrowRoundForward } from "react-icons/io"
import { IoIosCloseCircle } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import React from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"
import { useForm, Controller, Form } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { DataArray } from "@mui/icons-material"
import AmazonForm from "./FormGroup/AmazonForm"
import FlipkartForm from "./FormGroup/FlipkartForm"
import MeeshoForm from "./FormGroup/MeeshoForm"
import MyntraForm from "./FormGroup/MyntraForm"
import { SharedFormProvider } from "./FormGroup/SharedForm"
import FlipkartListingForm from "./FormGroup/FlipkartForm"
import * as XLSX from "xlsx";

// import { SharedFormProvider } from "../contexts/SharedFormContext"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
export default function AddProductPage() {
  const [platform, setPlatform] = useState("amazon")
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    message: "",
    severity: "success",
  })

  const [ProductPhotoSrc1, setProductPhotoSrc1] = useState("")
  const [ProductPhotoSrc2, setProductPhotoSrc2] = useState("")
  const [ProductPhotoSrc3, setProductPhotoSrc3] = useState("")
  const [ProductPhotoSrc4, setProductPhotoSrc4] = useState("") // Initialize product photo state
  const productPhoto1 = useRef(null)
  const productPhoto2 = useRef(null)
  const productPhoto3 = useRef(null)
  const productPhoto4 = useRef(null)

  const handleSnackbarClose = () => {
    setSnackbarState((prev) => ({ ...prev, open: false }))
  }

  const handleChange = (event) => {
    console.log(event.target.name, event.target.checked)
  }

  const dispatch = useDispatch()
  const navigate = useRouter()

  const { product, isLoading } = useSelector((state) => state.product)
  const userData = useSelector((state) => state?.user?.user?.user?.businessInformation)
  console.log(userData, "user")
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data) => {
    console.log(data)

    const payload = {
      productType: data.productType,
      sku: data.sku,
      requirements: data.requirements,
      marketplaceId: userData?.amazon.marketplace,
      sellerId: userData?.amazon?.sellerId,
      conditionType: data.conditionType,
      itemName: data.itemName,
      mainImage: {
        link: data.productPhoto1,
        height: 248,
        width: 300,
      },

      attributes: {
        color: [
          {
            language_tag: data.language_tag,
            value: data.color,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        item_type_name: [
          {
            language_tag: data.language_tag,
            value: data.itemTypeName,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        included_components: [
          {
            language_tag: data.language_tag,
            value: data.value,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        fulfillment_availability: [
          {
            fulfillment_channel_code: data.fulfillment_channel_code,
            quantity: data.quantity,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        manufacturer: [
          {
            language_tag: data.language_tag,
            value: data.manufacturer,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        item_weight: [
          {
            unit: data.unit,
            value: data.item_weight,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        recommended_browse_nodes: [
          {
            value: data.browserNodes,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        bullet_point: [
          {
            language_tag: data.language_tag,
            value: data.bulletPoint,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        product_description: [
          {
            language_tag: data.language_tag,
            value: data.description,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        brand: [
          {
            language_tag: data.language_tag,
            value: data.brandName,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        supplier_declared_has_product_identifier_exemption: [
          {
            value: data.value,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        country_of_origin: [
          {
            value: data.value,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        rtip_manufacturer_contact_information: [
          {
            value: data.manufacturerContactInfo,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        merchant_shipping_group: [
          {
            value: data.value,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        item_name: [
          {
            language_tag: data.language_tag,
            value: data.itemName,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        condition_type: [
          {
            value: data.condition_type,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        material: [
          {
            language_tag: data.language_tag,
            value: data.material,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        department: [
          {
            value: data.department,
          },
        ],
        model_name: [
          {
            value: data.modelName,
          },
        ],
        warranty_description: [
          {
            value: data.warranty_description,
          },
        ],
        item_dimensions: [
          {
            height: {
              unit: data.unit,
              value: data.item_dimensions,
            },
            length: {
              unit: data.unit,
              value: data.item_dimensions,
            },
            width: {
              unit: data.unit,
              value: data.item_dimensions,
            },
          },
        ],
        supplier_declared_dg_hz_regulation: [
          {
            value: data.value,
          },
        ],
        part_number: [
          {
            value: data.partNumber,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        external_product_information: [
          {
            entity: data.entity,
            value: data.external_product_information,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        unit_count: [
          {
            value: data.noOfPieces,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        packer_contact_information: [
          {
            language_tag: data.language_tag,
            value: data.packer_contact_information,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        other_product_image_locator_1: [
          {
            media_location: data.other_product_image_locator_1,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
        main_product_image_locator: [
          {
            media_location: data.main_product_image_locator,
            marketplace_id: userData?.amazon?.marketplace,
          },
        ],
      },

      fulfillmentAvailability: [
        {
          fulfillmentChannelCode: data.fulfillmentChannelCode,
          quantity: data.quantity,
        },
      ],
    }

    // Dispatch the action to add the product
    dispatch(addProduct(payload)).then((result) => {
      console.log(result, "result")
      if (result?.payload?.message === "Product created/updated successfully") {
        setSnackbarState((prev) => ({ ...prev, open: true, message: "Product Added Successfully" }))

        navigate.push("products?q=list")
      } else {
        const errorMessages = result?.payload?.details?.errors?.map((error) => error.message).join(", ")
        setSnackbarState((prev) => ({
          ...prev,
          open: true,
          message: errorMessages || "Unable to add product",
          severity: "error",
        }))
      }
    })
  }

  const handleFlipkartSubmit=()=>{

  }
  const handleTabChange = (event, newValue) => {
    setPlatform(newValue) // Update the platform state
  }

  useEffect(() => {
    if (product && product.success) {
      // Handle success if needed
    }
  }, [product])


const downloadSampleExcel = () => {
  const sampleData = [
    {
      productType: "",
      sku: "",
      requirements: "",
      conditionType: "",
      itemName: "",
      productPhoto1: "",
      language_tag: "",
      color: "",
      itemTypeName: "",
      value: "",
      fulfillment_channel_code: "",
      quantity: "",
      manufacturer: "",
      unit: "",
      item_weight: "",
      browserNodes: "",
      bulletPoint: "",
      description: "",
      brandName: "",
      manufacturerContactInfo: "",
      material: "",
      department: "",
      modelName: "",
      warranty_description: "",
      item_dimensions: "",
      partNumber: "",
      entity: "",
      external_product_information: "",
      noOfPieces: "",
      packer_contact_information: "",
      other_product_image_locator_1: "",
      main_product_image_locator: "",
    },
  ];

  const worksheet = XLSX.utils.json_to_sheet(sampleData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
  XLSX.writeFile(workbook, "Product_Template.xlsx");
};
  // const handleFileUpload = (file) => {
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const data = new Uint8Array(e.target.result);
  //     const workbook = XLSX.read(data, { type: "array" });
  //     const sheetName = workbook.SheetNames[0];
  //     const worksheet = workbook.Sheets[sheetName];
  //     const jsonData = XLSX.utils.sheet_to_json(worksheet);
  // console.log(jsonData,"json");
  // Form.setValue("productType",jsonData?.productType)
  // Form.setValue("itemName",jsonData?.itemName)
  //     // Map the Excel data to the payload structure
  //     const payload = jsonData.map((row) => ({

  //       productType: row.productType,
  //       sku: row.sku,
  //       requirements: row.requirements,
  //       marketplaceId: userData?.amazon.marketplace,
  //       sellerId: userData?.amazon?.sellerId,
  //       conditionType: row.conditionType,
  //       itemName: row.itemName,
  //       mainImage: {
  //         link: row.productPhoto1,
  //         height: 248,
  //         width: 300,
  //       },
  //       attributes: {
  //         color: [
  //           {
  //             language_tag: row.language_tag,
  //             value: row.color,
  //             marketplace_id: userData?.amazon?.marketplace,
  //           },
  //         ],
  //         // Add other fields similarly...
  //       },
  //       fulfillmentAvailability: [
  //         {
  //           fulfillmentChannelCode: row.fulfillment_channel_code,
  //           quantity: row.quantity,
  //         },
  //       ],
  //     }));
  
  //     // Set the payload in state
  //     // setPayload(payload);
  //   };
  //   reader.readAsArrayBuffer(file);
  // };

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
  
      console.log(jsonData, "Parsed Excel Data");
  
      if (jsonData.length > 0) {
        const firstRow = jsonData[0]; // Get the first row (single product)
        
        // Set form fields dynamically
        Object.keys(firstRow).forEach((key) => {
          setValue(key, firstRow[key] || ""); // Set default value if empty
        });
  
        // trigger(); // Ensure UI updates
      }
    };
    reader.readAsArrayBuffer(file);
  };
  
  return (
    <SharedFormProvider>
      <>
        {isLoading && <Loader />}
        <Snackbar
          open={snackbarState.open}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MuiAlert onClose={handleSnackbarClose} severity={snackbarState.severity} sx={{ width: "100%" }}>
            {snackbarState.message}
          </MuiAlert>
        </Snackbar>
        <div className="h-full w-full px-4 py-4 md:px-7 md:py-7">
          <div className="title flex flex-wrap justify-between items-center">
            <h1 className="md:text-3xl text-lg font-semibold ">Products</h1>
            <Button onClick={downloadSampleExcel} variant="contained" color="primary">
  Download Sample Excel
</Button>
            {/* <div className="">
            
                Upload using CSV
             
              <input
  type="file"
  accept=".xlsx, .xls"
  onChange={(e) => handleFileUpload(e.target.files[0])}
/>
            </div> */}
            <Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
>
  Upload files
  <VisuallyHiddenInput
    type="file"
    onChange={(e) => handleFileUpload(e.target.files[0])}

    multiple
  />
</Button>
          </div>

          <div className="box s flex mt-4 gap-4 flex-wrap bg-white rounded-xl">
            <Box className="w-full">
              <TabContext value={platform}>
                <Box>
                  <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                    <Tab label="Amazon" value="amazon" />
                    <Tab label="Flipkart" value="flipkart" />
                    {/* <Tab label="Myntra" value="myntra" />
                    <Tab label="Meesho" value="meesho" />
                    <Tab label="Others" value="others" /> */}
                  </TabList>
                </Box>
                <TabPanel value="amazon">
                  <AmazonForm
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    control={control}
                    ProductPhotoSrc1={ProductPhotoSrc1}
                    productPhoto1={productPhoto1}
                    ProductPhotoSrc2={ProductPhotoSrc2}
                    productPhoto2={productPhoto2}
                    ProductPhotoSrc3={ProductPhotoSrc3}
                    productPhoto3={productPhoto3}
                    ProductPhotoSrc4={ProductPhotoSrc4}
                    productPhoto4={productPhoto4}
                    errors={errors}
                    watch={watch}
                    setValue={setValue}
                  />
                </TabPanel>
                <TabPanel value="flipkart">
                  <FlipkartListingForm
                    // handleSubmit={handleFlipkartSubmit}
                    // onSubmit={onSubmit}
                    // control={control}
                    // ProductPhotoSrc1={ProductPhotoSrc1}
                    // productPhoto1={productPhoto1}
                    // ProductPhotoSrc2={ProductPhotoSrc2}
                    // productPhoto2={productPhoto2}
                    // ProductPhotoSrc3={ProductPhotoSrc3}
                    // productPhoto3={productPhoto3}
                    // ProductPhotoSrc4={ProductPhotoSrc4}
                    // productPhoto4={productPhoto4}
                    // errors={errors}
                    // watch={watch}
                    // setValue={setValue}
                  />
                </TabPanel>
                {/* <TabPanel value="flipkart"><FlipkartForm handleSubmit={handleSubmit} onSubmit={onSubmit} control={control} ProductPhotoSrc1={ProductPhotoSrc1} productPhoto1={productPhoto1} ProductPhotoSrc2={ProductPhotoSrc2} productPhoto2={productPhoto2} ProductPhotoSrc3={ProductPhotoSrc3} productPhoto3={productPhoto3} ProductPhotoSrc4={ProductPhotoSrc4} productPhoto4={productPhoto4} errors={errors} watch={watch} setValue={setValue}/></TabPanel> */}
                <TabPanel value="myntra">
                  <MyntraForm
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    control={control}
                    ProductPhotoSrc1={ProductPhotoSrc1}
                    productPhoto1={productPhoto1}
                    ProductPhotoSrc2={ProductPhotoSrc2}
                    productPhoto2={productPhoto2}
                    ProductPhotoSrc3={ProductPhotoSrc3}
                    productPhoto3={productPhoto3}
                    ProductPhotoSrc4={ProductPhotoSrc4}
                    productPhoto4={productPhoto4}
                    errors={errors}
                    watch={watch}
                    setValue={setValue}
                  />{" "}
                </TabPanel>

                <TabPanel value="meesho">
                  <MeeshoForm
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    control={control}
                    ProductPhotoSrc1={ProductPhotoSrc1}
                    productPhoto1={productPhoto1}
                    ProductPhotoSrc2={ProductPhotoSrc2}
                    productPhoto2={productPhoto2}
                    ProductPhotoSrc3={ProductPhotoSrc3}
                    productPhoto3={productPhoto3}
                    ProductPhotoSrc4={ProductPhotoSrc4}
                    productPhoto4={productPhoto4}
                    errors={errors}
                    watch={watch}
                    setValue={setValue}
                  />{" "}
                </TabPanel>
                <TabPanel value="others">Coming soon</TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </>
    </SharedFormProvider>
  )
}

