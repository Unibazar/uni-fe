import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const OrderDetailsModal = ({ open, onClose, order }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Order Details</DialogTitle>
      <DialogContent>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography variant="h6">Order ID: {order?.AmazonOrderId}</Typography>
            <Typography>Order Date: {new Date(order?.PurchaseDate).toLocaleString()}</Typography>
            <Typography>Status: {order?.OrderStatus}</Typography>
            <Typography>Total Amount: {`${order?.OrderTotal?.CurrencyCode} ${order?.OrderTotal?.Amount}`}</Typography>
            <Typography>Shipping Address: {order?.ShippingAddress?.City}, {order?.ShippingAddress?.StateOrRegion}</Typography>
          </Box>
        </motion.div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetailsModal;