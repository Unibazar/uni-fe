// 'use client'

// import Image from "next/image";
// import { useRef, useState, useEffect } from "react";
// import { FiPlusCircle } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import { loadUser } from "@/redux/slice/userSlice";
// import { saveCredentials } from "@/redux/slice/credentialSlice";
// import FormField from "@/baseComponents/FormField/FormField";
// import CustomButton from "@/baseComponents/CustomButton/CustomButton";

// export default function PersonalInformation() {
//   const dispatch = useDispatch();
//   const personalInfoFromStore = useSelector((state) => state.personalInfo.info);

//   const [userPhotoSrc, setUserPhotoSrc] = useState("");
//   const [userPhoto, setUserPhoto] = useState();
//   const userPhotoRef = useRef();

//   const [personalData, setPersonalData] = useState({
//     name: "",
//     email: "",
//     number: "",
//     logo: null,
//     description: ""
//   });

//   useEffect(() => {
//     dispatch(loadUser()).then(data => {
//       const user = data?.payload?.user;
//       const businessInformation = data?.payload?.user?.businessInformation
//       setPersonalData({
//         name: user?.name,
//         email: user?.email,
//         number: businessInformation?.number,
//         address: businessInformation?.address,
//         logo: null,
//         description: businessInformation?.description
//       })
//     });
//   }, [dispatch]);

//   // Set initial personal data from Redux store
//   useEffect(() => {
//     if (personalInfoFromStore) {
//       setPersonalData(personalInfoFromStore);
//     }
//   }, [personalInfoFromStore]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPersonalData(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Prepare the data to dispatch
//     const dataToSubmit = {
//       ...personalData,
//       logo: userPhoto // Include the logo file
//     };

//     // Dispatch the personal information to the Redux store
//     dispatch(saveCredentials(dataToSubmit));
//   };

//   return (
//     <div>
//       <form className="w-full p-7" onSubmit={handleSubmit}>
//         <div className="flex p-4 mt-2 gap-7 flex-wrap items-center">
//           <div className="relative w-[10rem] h-[10rem] border-2 rounded-full overflow-hidden bg-[#F5F7FA] flex items-center justify-center">
//             {userPhotoSrc && <Image src={userPhotoSrc} height={50} width={50} alt="Profile" className="w-full h-full object-cover" />}
//             {!userPhotoSrc && <FiPlusCircle className="text-2xl opacity-70" onClick={() => userPhotoRef.current.click()} />}
//             <input
//               type="file"
//               className="hidden"
//               name="logo"
//               ref={userPhotoRef}
//               onChange={(e) => {
//                 setUserPhoto(e.target.files[0]);
//                 setUserPhotoSrc(URL.createObjectURL(e.target.files[0]));
//               }}
//             />
//           </div>
//           <CustomButton 
//             onClick={() => userPhotoRef.current.click()} 
//             className="bg-[#E8F7FF] text-[#08A9A0]"
//             variant="outlined"
//           >
//             Choose Image
//           </CustomButton>
//         </div>

//         <div className="flex gap-7 flex-wrap">
//           <div className="flex-1">
//             <FormField
//               name="name"
//               type="text"
//               label="Full Name"
//               placeholder="Add Your Name"
//               value={personalData.name}
//               onChange={handleChange}
//               fullWidth
//             />
//           </div>
//           <div className="flex-1">
//             <FormField
//               name="number"
//               type="tel"
//               label="Phone Number"
//               placeholder="Phone"
//               value={personalData.number}
//               onChange={handleChange}
//               fullWidth
//             />
//           </div>
//         </div>

//         <div className="flex gap-7 flex-wrap mt-5">
//           <div className="flex-1">
//             <FormField
//               name="address"
//               type="text"
//               label="Location"
//               placeholder="Enter Address"
//               value={personalData.address}
//               onChange={handleChange}
//               fullWidth
//             />
//           </div>
//           <div className="flex-1">
//             <FormField
//               name="email"
//               type="email"
//               label="Email"
//               placeholder="Enter Your Email"
//               disabled
//               value={personalData.email}
//               onChange={handleChange}
//               fullWidth
//             />
//           </div>
//         </div>

//         <div className="mt-7">
//           <FormField
//             name="description"
//             type="text"
//             label="Biography"
//             placeholder="Write Something About Yourself"
//             value={personalData.description}
//             onChange={handleChange}
//             multiline
//             rows={6}
//             fullWidth
//           />
//         </div>

//         <div className="submitBtn mt-4 flex">
//           <CustomButton 
//             type="submit"
//             className="bg-[#08A9A0] text-white"
//           >
//             Save Changes
//           </CustomButton>
//         </div>
//       </form>
//     </div>
//   );
// }

// // 'use client';

// // import Image from "next/image";
// // import { useRef, useState, useEffect } from "react";
// // import { FiPlusCircle } from "react-icons/fi";
// // import { useDispatch, useSelector } from "react-redux";
// // import { loadUser } from "@/redux/slice/userSlice";
// // import { saveCredentials } from "@/redux/slice/credentialSlice";
// // import FormField from "@/baseComponents/FormField/FormField";
// // import CustomButton from "@/baseComponents/CustomButton/CustomButton";

// // export default function PersonalInformation() {
// //   const dispatch = useDispatch();
// //   const userFromStore = useSelector((state) => state.personalInfo.info);

// //   const [userPhotoSrc, setUserPhotoSrc] = useState("");
// //   const [userPhoto, setUserPhoto] = useState(null);
// //   const userPhotoRef = useRef();

// //   const [personalInfo, setPersonalInfo] = useState({
// //     name: "",
// //     phone: "",
// //     profilePic: "",
// //     biography: "",
// //     location: "",
// //   });

// //   const [email, setEmail] = useState("");

// //   useEffect(() => {
// //     dispatch(loadUser()).then(data => {
// //       const user = data?.payload?.user;
      
// //       setPersonalInfo({
// //         name: user?.personalInfo?.name || "",
// //         phone: user?.personalInfo?.phone || "",
// //         profilePic: user?.personalInfo?.profilePic || "",
// //         biography: user?.personalInfo?.biography || "",
// //         location: user?.personalInfo?.location || "",
// //       });

// //       setEmail(user?.email || ""); // Keep email separate & non-editable

// //       if (user?.personalInfo?.profilePic) {
// //         setUserPhotoSrc(user.personalInfo.profilePic);
// //       }
// //     });
// //   }, [dispatch]);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setPersonalInfo(prevState => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setUserPhoto(file);
// //       setUserPhotoSrc(URL.createObjectURL(file));
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();

// //     formData.append("personalInfo", JSON.stringify(personalInfo));
// //     if (userPhoto) {
// //       formData.append("profilePic", userPhoto);
// //     }

// //     dispatch(saveCredentials(formData));
// //   };

// //   return (
// //     <div>
// //       <form className="w-full p-7" onSubmit={handleSubmit}>
// //         <div className="flex p-4 mt-2 gap-7 flex-wrap items-center">
// //           <div className="relative w-[10rem] h-[10rem] border-2 rounded-full overflow-hidden bg-[#F5F7FA] flex items-center justify-center">
// //             {userPhotoSrc ? (
// //               <Image src={userPhotoSrc} height={50} width={50} alt="Profile" className="w-full h-full object-cover" />
// //             ) : (
// //               <FiPlusCircle className="text-2xl opacity-70" onClick={() => userPhotoRef.current.click()} />
// //             )}
// //             <input
// //               type="file"
// //               className="hidden"
// //               name="profilePic"
// //               ref={userPhotoRef}
// //               onChange={handleFileChange}
// //             />
// //           </div>
// //           <CustomButton
// //             onClick={() => userPhotoRef.current.click()}
// //             className="bg-[#E8F7FF] text-[#08A9A0]"
// //             variant="outlined"
// //           >
// //             Choose Image
// //           </CustomButton>
// //         </div>

// //         {/* Personal Info Fields */}
// //         <h2 className="text-lg font-semibold mt-6">Personal Information</h2>
// //         <div className="flex gap-7 flex-wrap">
// //           <FormField name="name" type="text" label="Full Name" placeholder="Add Your Name"
// //             value={personalInfo.name} onChange={handleChange} fullWidth />
// //           <FormField name="phone" type="tel" label="Phone Number" placeholder="Phone"
// //             value={personalInfo.phone} onChange={handleChange} fullWidth />
// //           <FormField name="location" type="text" label="Location" placeholder="Enter Address"
// //             value={personalInfo.location} onChange={handleChange} fullWidth />
// //           <FormField name="email" type="email" label="Email" placeholder="Enter Your Email" disabled
// //             value={email} fullWidth />
// //           <FormField name="biography" type="text" label="Biography" placeholder="Write Something About Yourself"
// //             value={personalInfo.biography} onChange={handleChange} multiline rows={6} fullWidth />
// //         </div>

// //         {/* Submit Button */}
// //         <div className="submitBtn mt-4 flex">
// //           <CustomButton type="submit" className="bg-[#08A9A0] text-white">
// //             Save Changes
// //           </CustomButton>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }



import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, updateUser, updateUserInfo } from "@/redux/slice/userSlice";
import { saveCredentials } from "@/redux/slice/credentialSlice";
import FormField from "@/baseComponents/FormField/FormField";
import CustomButton from "@/baseComponents/CustomButton/CustomButton";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material"; // Material-UI components

export default function PersonalInformation() {
  const dispatch = useDispatch();
  const personalInfoFromStore = useSelector((state) => state.personalInfo.info);
  const userId = useSelector((state) => state?.user?.user?.user?._id);

  const [userPhotoSrc, setUserPhotoSrc] = useState("");
  const [userPhoto, setUserPhoto] = useState();
  const userPhotoRef = useRef();

  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    phone: "",
    logo: null,
    location:"",
    description: "",
  });

  const [popup, setPopup] = useState({ visible: false, message: "", type: "" });
  // const userId = useSelector((state) => state?.user?.user?.user?._id)

  useEffect(() => {
    dispatch(loadUser()).then((data) => {
      const user = data?.payload?.user;
      const personalInfo = data?.payload?.user?.personalInfo;
      setPersonalData({
        name: user?.name,
        email: user?.email,
        phone: personalInfo?.phone,
        location: personalInfo?.location,
        logo: null,
        description: personalInfo?.description,
      });
    });
  }, [dispatch]);

  useEffect(() => {
    if (personalInfoFromStore) {
      setPersonalData(personalInfoFromStore);
    }
  }, [personalInfoFromStore]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevState) => ({ ...prevState, [name]: value }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();

 
  // Dispatch the updateUser thunk with FormData
  dispatch(updateUser({
    name:personalData?.name,
    email:personalData?.email,
    phone:personalData?.phone,
    location:personalData?.location,
    description:personalData?.description,
    id:userId,
    profilePic:userPhoto
  }))
    .then((result) => {
      if (updateUser.fulfilled.match(result)) {
        // Success case
        const user = result.payload.user;
       
        setPopup({
          visible: true,
          message: `Hi ${user.personalInfo?.name}, your personal information has been updated!`,
          type: "success",
        });
        dispatch(loadUser());
        // Update local state with the new user data
        setPersonalData({
          name: user.personalInfo?.name || "",
          email: user.email || "",
          number: user.personalInfo?.phone || "",
          address: user.personalInfo?.location || "",
          description: user.personalInfo?.description || "",
          logo: user.personalInfo?.profilePic || null,
        });

        if (user.personalInfo?.profilePic) {
          setUserPhotoSrc(user.personalInfo.profilePic);
        }
      } else if (updateUser.rejected.match(result)) {
        // Error case
        // setPopup({
        //   visible: true,
        //   message: result.payload || "Failed to update personal information",
        //   type: "error",
        // });
        console.log(result,"result")
      }
    })
    .catch((error) => {
      // Handle unexpected errors
      // setPopup({
      //   visible: true,
      //   message: "An error occurred while updating personal information",
      //   type: "error",
      // });
      // console.log(error,"error")
    });
};
  const handleClosePopup = () => {
    setPopup({ ...popup, visible: false });
  };

  return (
    <div>
      <form className="w-full p-7" onSubmit={handleSubmit}>
        <div className="flex p-4 mt-2 gap-7 flex-wrap items-center">
          <div className="relative w-[10rem] h-[10rem] border-2 rounded-full overflow-hidden bg-[#F5F7FA] flex items-center justify-center">
            {userPhotoSrc && (
              <Image
                src={userPhotoSrc}
                height={50}
                width={50}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            )}
            {!userPhotoSrc && (
              <FiPlusCircle
                className="text-2xl opacity-70"
                onClick={() => userPhotoRef.current.click()}
              />
            )}
            <input
              type="file"
              className="hidden"
              name="logo"
              ref={userPhotoRef}
              onChange={(e) => {
                setUserPhoto(e.target.files[0]);
                setUserPhotoSrc(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </div>
          <CustomButton
            onClick={() => userPhotoRef.current.click()}
            className="bg-[#E8F7FF] text-[#08A9A0]"
            variant="outlined"
          >
            Choose Image
          </CustomButton>
        </div>

        <div className="flex gap-7 flex-wrap">
          <div className="flex-1">
            <FormField
              name="name"
              type="text"
              label="Full Name"
              placeholder="Add Your Name"
              value={personalData.name}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="flex-1">
            <FormField
              name="phone"
              type="tel"
              label="Phone Number"
              placeholder="Phone"
              value={personalData.phone}
              onChange={handleChange}
              fullWidth
            />
          </div>
        </div>

        <div className="flex gap-7 flex-wrap mt-5">
          <div className="flex-1">
            <FormField
              name="location"
              type="text"
              label="Location"
              placeholder="Enter Address"
              value={personalData.location}
              onChange={handleChange}
              fullWidth
            />
          </div>
          <div className="flex-1">
            <FormField
              name="email"
              type="email"
              label="Email"
              placeholder="Enter Your Email"
              disabled
              value={personalData.email}
              onChange={handleChange}
              fullWidth
            />
          </div>
        </div>

        <div className="mt-7">
          <FormField
            name="description"
            type="text"
            label="Biography"
            placeholder="Write Something About Yourself"
            value={personalData.description}
            onChange={handleChange}
            multiline
            rows={6}
            fullWidth
          />
        </div>

        <div className="submitBtn mt-4 flex">
          <CustomButton type="submit" className="bg-[#08A9A0] text-white">
            Save Changes
          </CustomButton>
        </div>
      </form>

      {/* Material-UI Popup */}
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
    </div>
  );
}