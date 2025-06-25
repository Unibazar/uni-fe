import React, { useEffect, useState } from "react";
import dashboardImage from "/images/dashboard-image1.png";
import StatCard from "../Common-Components/StatCard";
import { RiBox3Fill } from "react-icons/ri";
import { GiBackwardTime } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { FaUserGroup } from "react-icons/fa6";
import {Link} from "react-router-dom";
// import { GetFlipkartListing, loadProduct } from "@/redux/slice/productSlice";

export default function Dashboard() {
  const [isLinkAccountOpen, setIsLinkAccountOpen] = useState(false);
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);
  // const { orders, isLoading:orderLoading } = useSelector((state) => state.orders);
  // const { product , isLoading:productLoading ,error } = useSelector((state) => state.product);
  // const flipkartListing = useSelector(state => state?.product?.flipkartListing?.data?.listings);
  
  // useEffect(() => {
  //   dispatch(loadUser());
  //   dispatch(loadProduct());

  // }, [dispatch]);

  // useEffect(() => {
  //   if (
  //     user?.user?.hasOwnProperty("amazon") &&
  //     user.user.amazon?.clientId
  //   ) {
  //     setIsLinkAccountOpen(true);
  //   }
  //   if (user) {
  //     const payload = {
  //         accessToken: user?.user?.flipkart?.accessToken,
  //         status: "ACTIVE"
  //     }
  //     dispatch(GetFlipkartListing(payload));
  // }
  // }, [user]);

  const statCards = [
    {
      title: "Total Products",
      // count:product?.items?.length + flipkartListing?.length,
      count:0,
      icon: FaUserGroup,
      bgColor: "#FFFFFF",
      textColor: "#8280FF",
    },
    {
      title: "Total Orders",
      // count: orders?.length,
      count: 0,
      icon: RiBox3Fill,
      bgColor: "#FFFFFF",
      textColor: "#FEC53D",
      percentage: "+5.2%",
    },
    {
      title: "Total Sales",
      count: "INR 0",
      icon: GoGraph,
      bgColor: "#FFFFFF",
      textColor: "#4AD991",
    },
    {
      title: "Total Pending",
      count: 0,
      icon: GiBackwardTime,
      bgColor: "#FFFFFF",
      textColor: "#FFA583",
    },
  ];

  const recentOrders = [
    
  ];

  const recentProducts = [
    
  ];

  return (
    <>
      <div className="w-full flex justify-center md:justify-start items-center flex-col gap-5">
        {!isLinkAccountOpen ? (
          <>
            <div className="imageContainer w-[50vw] md:w-[50vh] mt-[5%]">
              <img src={dashboardImage} alt="dashboard_image" className="w-full h-full object-contain" />
            </div>
            <Link
              to="/dashboard/linkaccount"
              className="px-8 py-2 mt-[2%] bg-[#08A9A0] text-white rounded-md w-[50vw] md:w-[20vw] text-sm lg:text-lg text-center"
            >
              Add Account
            </Link>
          </>
        ) : (
          <div className="w-full px-4 py-4 md:px-7 md:py-7">
            <h1 className="md:text-3xl text-lg font-semibold text-[#008080]">
              Welcome {user?.user?.name}
            </h1>

            <div className="boxes flex gap-5 mt-10 flex-wrap">
              {statCards.map((card, index) => (
                <StatCard key={index} {...card} />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              <div className="bg-white p-5 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                
                {recentOrders.length > 0 ? (
      <ul>
        {recentOrders.map((order) => (
          <li key={order.id} className="border-b py-2">
            <span className="font-medium">{order.customer}</span> - {order.amount} ({order.status})
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-500">No data exists</p>
    )}
                
              </div>

              <div className="bg-white p-5 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Recent Products</h2>
                {recentProducts.length === 0 ? (
                <ul>
                  {recentProducts.map((product) => (
                    <li key={product.id} className="border-b py-2">
                      <span className="font-medium">{product.name}</span> - {product.price}
                    </li>
                  ))}
                </ul>
                ):(<p className="text-gray-500">No data exists</p>)}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
