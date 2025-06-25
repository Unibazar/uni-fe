import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { loadUser, updateUser } from "@/redux/slice/userSlice";
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
