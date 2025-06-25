"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FilterListIcon from "@mui/icons-material/FilterList";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function OrderManagementMUI() {
  const [densePadding, setDensePadding] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState("5");

  const orders = [
    { orderId: "405-6007193-2875505", platform: "Amazon.in", orderDate: "1/20/2025", shipDate: "01/20/2025", deliveryStatus: "delivered", settlementStatus: "settled on 21-mar-2025", settledAmount: "INR 2550.00" },
    { orderId: "403-2024676-9885180", platform: "Amazon.in", orderDate: "1/20/2025", shipDate: "01/20/2025", deliveryStatus: "delivered", settlementStatus: "settled on 21-mar-2025", settledAmount: "INR 71.00" },
    { orderId: "405-2222401-7661180", platform: "Amazon.in", orderDate: "1/24/2025", shipDate: "01/20/2025", deliveryStatus: "Canceled", settlementStatus: "pending on 21-mar-2025", settledAmount: "INR 5701.00" },
    { orderId: "408-8671500-1398751", platform: "Amazon.in", orderDate: "1/25/2025", shipDate: "01/20/2025", deliveryStatus: "Canceled", settlementStatus: "refund on 21-mar-2025", settledAmount: "INR 00.00" },
    { orderId: "405-6000710-5311521", platform: "Amazon.in", orderDate: "1/28/2025", shipDate: "01/20/2025", deliveryStatus: "returned", settlementStatus: "settled on 21-mar-2025", settledAmount: "INR 571.00" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <TextField label="Order ID" variant="outlined" className="flex-1" size="small" />
        <Button variant="contained" className="bg-blue-600 hover:bg-blue-700 h-10"> APPLY FILTERS </Button>
      </div>
      <Paper className="w-full mb-4">
        <Box className="flex items-center justify-between p-4 border-b">
          <Typography variant="h6">Orders</Typography>
          <IconButton size="small"><FilterListIcon /></IconButton>
        </Box>
        <TableContainer>
          <Table size={densePadding ? "small" : "medium"}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"><Checkbox /></TableCell>
                <TableCell>Order ID</TableCell>
                <TableCell>Platform</TableCell>
                <TableCell><Box className="flex items-center"> Order Date <ArrowUpwardIcon fontSize="small" className="ml-1" /></Box></TableCell>
                <TableCell>Ship Date</TableCell>
                <TableCell>Delivery Status</TableCell>
                <TableCell>Settlement Status</TableCell>
                <TableCell align="right">Settled Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell padding="checkbox"><Checkbox /></TableCell>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.platform}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>{order.shipDate}</TableCell>
                  <TableCell>{order.deliveryStatus}</TableCell>
                  <TableCell>{order.settlementStatus}</TableCell>
                  <TableCell align="right">{order.settledAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className="flex items-center justify-end p-4 border-t">
          <Box className="flex items-center space-x-6">
            <Typography variant="body2">Rows per page:</Typography>
            <FormControl size="small">
              <Select value={rowsPerPage} onChange={(e) => setRowsPerPage(e.target.value)}>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="20">20</MenuItem>
                <MenuItem value="50">50</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="body2">1-5 of 10</Typography>
            <IconButton size="small"><ChevronLeftIcon fontSize="small" /></IconButton>
            <IconButton size="small"><ChevronRightIcon fontSize="small" /></IconButton>
          </Box>
        </Box>
      </Paper>
      <FormControlLabel
        control={<Switch checked={densePadding} onChange={(e) => setDensePadding(e.target.checked)} />}
        label="Dense padding"
      />
    </div>
  );
}
