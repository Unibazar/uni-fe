import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  Skeleton,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts';
import { motion } from 'framer-motion';
// import { useSelector, useDispatch } from 'react-redux';
// import { loadUser } from '@/redux/slice/userSlice';
// import { GetFlipkartDashboardAnalytics, GetFlipkartListing } from '@/redux/slice/productSlice';
// import { loadUser, GetFlipkartListing, GetFlipkartDashboardAnalytics } from './actions'; // Update with your actions

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AnalyticsDashboard = () => {
  // const dispatch = useDispatch();
  // const { orders, isLoading: orderLoading } = useSelector((state) => state.orders);
  // const { product, isLoading: productLoading, error } = useSelector((state) => state.product);
  // const user = useSelector((state) => state?.user?.user?.user);
  // const flipkartListing = useSelector((state) => state?.product?.flipkartListing?.data?.listings);
  // const dashboardAnalytics = useSelector((state) => state?.product?.dashboardAnalytics);
  const dashboardAnalytics =[];

  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [loading, setLoading] = useState(false);

  // const totalFlipkartListing = flipkartListing?.length || 0;
  // const totalProducts = (product?.numberOfResults || 0) + totalFlipkartListing;

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (user) {
  //     if (user?.flipkart) {
  //       const payload = {
  //         accessToken: user?.flipkart?.accessToken,
  //         status: 'ACTIVE',
  //       };
  //       dispatch(GetFlipkartListing(payload));

  //       const analyticalPayload = {
  //         accessToken: user?.flipkart?.accessToken,
  //       };
  //       dispatch(GetFlipkartDashboardAnalytics(analyticalPayload));
  //     }
  //     // Add similar logic for other platforms (Amazon, Myntra, Meesho)
  //   }
  // }, [user, dispatch]);

  // Filter data based on linked platforms
  const linkedPlatforms = [];
  // if (user?.flipkart) linkedPlatforms.push('Flipkart');
  // if (user?.amazon) linkedPlatforms.push('Amazon');
  // if (user?.myntra) linkedPlatforms.push('Myntra');
  // if (user?.meesho) linkedPlatforms.push('Meesho');

  const filteredData = dashboardAnalytics?.length > 0 ? dashboardAnalytics?.filter((data) => linkedPlatforms.includes(data.platform)) : [];

  const pieChartData = filteredData.map((data) => ({
    name: data.platform,
    value: data?.value.totalOrders,
  }));


  // console.log(filteredData);
// const pieChartData=[
//     {name:"Flipkart",value:1000},
//     {name:"Amazon",value:2000},
// ]
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Box sx={{ p: 3, backgroundColor:'#f5f5f5', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Seller Analytics Dashboard
        </Typography>
      </Box>

      {/* Search and Filter Options */}
      <Box sx={{ mb: 3 }}>
        <FormControl sx={{ minWidth: 200, mr: 2 }} size="small">
          <InputLabel>Platform</InputLabel>
          <Select value={selectedPlatform} onChange={(e) => setSelectedPlatform(e.target.value)} label="Platform">
            <MenuItem value="All">All Platforms</MenuItem>
            {linkedPlatforms.map((platform) => (
              <MenuItem key={platform} value={platform}>
                {platform}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField label="Search" variant="outlined" size="small" sx={{ minWidth: 200 }} />
      </Box>

      {loading ? (
        <Skeleton variant="rectangular" height={400} />
      ) : (
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={3}>
            {/* Total Orders Card */}
            <Grid item xs={12} md={6} lg={3}>
              <motion.div variants={itemVariants}>
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">Total Orders</Typography>
                  <Typography variant="h4" color="primary">
                    {/* {filteredData.reduce((acc, curr) => acc + curr.value.totalOrders, 0) || 0} */}
                    0
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* Shipped Orders Card */}
            <Grid item xs={12} md={6} lg={3}>
              <motion.div variants={itemVariants}>
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">Shipped Orders</Typography>
                  <Typography variant="h4" color="success.main">
                    {/* {filteredData.reduce((acc, curr) => acc + curr.value.shipped, 0) || 0} */}
                    0
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* Canceled Orders Card */}
            <Grid item xs={12} md={6} lg={3}>
              <motion.div variants={itemVariants}>
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">Canceled Orders</Typography>
                  <Typography variant="h4" color="error.main">
                    {/* {filteredData.reduce((acc, curr) => acc + curr.value.canceled, 0) || 0} */}
                    0
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* Delivered Orders Card */}
            <Grid item xs={12} md={6} lg={3}>
              <motion.div variants={itemVariants}>
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">Delivered Orders</Typography>
                  <Typography variant="h4" color="info.main">
                    {/* {filteredData.reduce((acc, curr) => acc + curr.value.delivered, 0) || 0} */}
                    0
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      )}

      {/* Bar Chart for Platform-wise Orders */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Platform-wise Orders
        </Typography>
        <Paper elevation={3} sx={{ p: 2 }}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={filteredData}>
              <XAxis dataKey="platform" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value.totalOrders" fill="#8884d8" name="Total Orders" />
              <Bar dataKey="value.shipped" fill="#82ca9d" name="Shipped Orders" />
              <Bar dataKey="value.canceled" fill="#ff4040" name="Canceled Orders" />
              <Bar dataKey="value.delivered" fill="#0088FE" name="Delivered Orders" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Box>

      {/* Pie Chart for Order Distribution */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Order Distribution
        </Typography>
        <Paper elevation={3} sx={{ p: 2 }}>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default AnalyticsDashboard;