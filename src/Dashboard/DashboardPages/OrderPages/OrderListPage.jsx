
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAmazonOrders, fetchFlipkartOrders } from "@/redux/slice/orderSlice";
import Loader from "../../../components/widgets/Loader/Loader";
import OrderTable from "../../Common-Components/Table";
import FlipkartOrderTable from "../../Common-Components/FlipkartTable";
import { Tabs, Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function OrderListPage() {
  // const dispatch = useDispatch();
  // const { orders, isLoading, error } = useSelector((state) => state.orders);
  const [tabValue, setTabValue] = useState("amazon");

  // useEffect(() => {
  //   dispatch(fetchAmazonOrders());
  //   dispatch(fetchFlipkartOrders());
  // }, [dispatch]);

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
