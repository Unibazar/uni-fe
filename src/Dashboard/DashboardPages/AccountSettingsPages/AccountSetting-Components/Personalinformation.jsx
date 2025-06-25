import { useRef, useState, useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
// import { loadUser, updateUser, updateUserInfo } from "@/redux/slice/userSlice";
// import { saveCredentials } from "@/redux/slice/credentialSlice";
import FormField from "../../../../components/@base/formFields/formFields";
import CustomButton from "../../../../components/@base/customButton/customButton";
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
              <img
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