// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAmazonOrders } from '@/redux/slice/orderSlice';
// import OrderTableLayout from './OrderTableLayout';
// import Loader from '@/components/Loader/Loader';

// export default function OrderListPage() {
//   const [page, setPage] = useState(1);
//   const dispatch = useDispatch();

//   // Destructure data from Redux state
//   const { orders, isLoading, error } = useSelector((state) => state.orders);

//   // Extract Amazon-specific data
//   const amazonOrders = orders?.amazon?.orders?.payload?.Orders || [];
//   const amazonOrderLoading = isLoading?.amazon;

//   useEffect(() => {
//     // Fetch Amazon orders when the component mounts
//     dispatch(fetchAmazonOrders());
//   }, [dispatch]);

//   // Handle loading state
//   if (amazonOrderLoading) return <Loader />;

//   // Handle error state
//   if (error) return <div className="text-red-500">Error: {error}</div>;

//   return (
//     <div className="h-full w-full px-4 py-4 md:px-7 md:py-7">
//       {/* Title Section */}
//       <div className="title flex flex-wrap justify-between items-center">
//         <h1 className="md:text-3xl text-lg font-semibold">Orders</h1>
//       </div>

//       {/* Orders Table Section */}
//       <div className="boxs flex mt-7 gap-4 flex-wrap bg-white rounded-xl p-4 md:p-7">
//         {/* Render the OrderTableLayout component with Amazon orders */}
//         <OrderTableLayout orderData={amazonOrders} />
//       </div>
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAmazonOrders } from "@/redux/slice/orderSlice";
// import { getFlipkartOrders } from "@/redux/slice/orderSlice"; // Import the thunk for Flipkart orders
// import Loader from "@/components/Loader/Loader";
// import OrderTable from "../../Common-Components/Table";
// import OrderDetailsModal from "../../Common-Components/OrderDetailsModal";
// import FilterComponent from "../../Common-Components/FilterComponent";
// import { Tabs, Tab } from "@mui/material";

// export default function OrderListPage() {
//   const [page, setPage] = useState(1);
//   const dispatch = useDispatch();
//   const [filters, setFilters] = useState({
//     orderId: "",
//     fromDate: "",
//     toDate: "",
//     platform: "Amazon", // Default to Amazon
//   });
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetch data from Redux state
//   const { orders, isLoading, error } = useSelector((state) => state.orders);
//   const amazonOrderLoading = isLoading?.amazon;
//   const flipkartOrderLoading = isLoading?.flipkart;

//   useEffect(() => {
//     // Fetch Amazon orders when the component mounts
//     dispatch(fetchAmazonOrders());
//   }, [dispatch]);

//   // Handle tab change to fetch Flipkart orders
//   const handleTabChange = (event, newValue) => {
//     setFilters((prevFilters) => ({ ...prevFilters, platform: newValue }));
//     if (newValue === "Flipkart") {
//       dispatch(getFlipkartOrders()); // Fetch Flipkart orders when the tab is switched
//     }
//   };

//   // Handle filter changes
//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//   };

//   // Apply filters
//   const applyFilters = () => {
//     console.log("Filters applied:", filters);
//     // Implement filtering logic here if needed
//   };

//   // Handle row click to open modal
//   const handleRowClick = (order) => {
//     setSelectedOrder(order);
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Loading state
//   if (amazonOrderLoading || flipkartOrderLoading) return <Loader />;

//   // Error state
//   if (error) return <div className="text-red-500">Error: {error}</div>;

//   // Determine which orders to display based on the selected platform
//   const displayedOrders = filters.platform === "Amazon" 
//     ? orders?.amazon?.orders?.payload?.Orders || [] 
//     : orders?.flipkartOrders?.data?.orderItems || [];

//   return (
//     <div className="h-full w-full px-4 py-4 md:px-7 md:py-7 ">
//       {/* Title Section */}
//       <div className="title flex flex-wrap justify-between items-center mb-8">
//         <h1 className="md:text-3xl text-lg font-semibold">Orders</h1>
//       </div>
//       <Tabs value={filters.platform} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
//         <Tab label="Amazon" value="Amazon" />
//         <Tab label="Flipkart" value="Flipkart" />
//       </Tabs>

//       <div className="bg-white p-5 rounded-lg">
//         {/* Filter Section */}
//         <FilterComponent filters={filters} onFilterChange={handleFilterChange} onApplyFilters={applyFilters} />

//         {/* Orders Table Section */}
//         <div className="boxs flex mt-7 gap-4 flex-wrap rounded-xl p-4 md:p-7">
//           <OrderTable orders={displayedOrders} onRowClick={handleRowClick} />
//         </div>

//         {/* Modal for Order Details */}
//         <OrderDetailsModal open={isModalOpen} onClose={closeModal} order={selectedOrder} />
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAmazonOrders, fetchFlipkartOrders } from "@/redux/slice/orderSlice";
import Loader from "@/components/Loader/Loader";
import OrderTable from "../../Common-Components/Table";
import FlipkartOrderTable from "../../Common-Components/FlipkartTable";
import { Tabs, Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function OrderListPage() {
  const dispatch = useDispatch();
  const { orders, isLoading, error } = useSelector((state) => state.orders);
  const [tabValue, setTabValue] = useState("amazon");

  useEffect(() => {
    dispatch(fetchAmazonOrders());
    dispatch(fetchFlipkartOrders());
  }, [dispatch]);

  // Separate orders based on platform
  const amazonOrders = orders.filter(order => order.platform === "Amazon.in");
  const flipkartOrders = orders.filter(order => order.platform === "Flipkart");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} aria-label="E-commerce Orders">
            <Tab label="Amazon" value="amazon" />
            <Tab label="Flipkart" value="flipkart" />
          </TabList>
        </Box>

        {/* Amazon Orders Tab */}
        <TabPanel value="amazon">
          {isLoading?.amazon ? <Loader /> : <OrderTable orders={amazonOrders} />}
        </TabPanel>

        {/* Flipkart Orders Tab */}
        <TabPanel value="flipkart">
          {isLoading?.flipkart ? <Loader /> : <FlipkartOrderTable orders={flipkartOrders} />}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
