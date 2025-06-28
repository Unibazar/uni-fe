import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart, CartesianGrid } from "recharts";
import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableHead, TableRow, Box } from "@mui/material";
// import { loadProduct } from "@/redux/slice/productSlice";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const productPerformance = {
  name: ["product1", "product2", "product3", "product4", "product5", "product6"],
  amazon: [10, 20, 30, 40, 50, 60],
  flipkart: [20, 30, 40, 50, 60, 70],
};

export default function Analytics() {
//   const dispatch = useDispatch();
//   const { product, flipkartListing } = useSelector((state) => state.product);
//   const { orders } = useSelector((state) => state.orders);

//   useEffect(() => {
//     dispatch(loadProduct());
//   }, [dispatch]);

const product = {
  items: [
    { name: "Product A", sales: 120 },
    { name: "Product B", sales: 95 },
    { name: "Product C", sales: 150 },
    { name: "Product D", sales: 80 },
    { name: "Product E", sales: 110 },
    { name: "Product F", sales: 140 },
  ],
};

// Dummy flipkartListing state
const flipkartListing = [
  { name: "Product A", sales: 100, price: 500 },
  { name: "Product B", sales: 90, price: 700 },
  { name: "Product C", sales: 120, price: 650 },
  { name: "Product D", sales: 85, price: 400 },
  { name: "Product E", sales: 95, price: 800 },
  { name: "Product F", sales: 130, price: 900 },
];

// Dummy orders state
const orders = [
  { id: 1, amount: 1200 },
  { id: 2, amount: 1500 },
  { id: 3, amount: 1800 },
];

  const platformData = months.map((month, index) => ({
    month,
    amazon: product?.items?.[index]?.sales || 0,
    flipkart: flipkartListing?.[index]?.sales || 0,
  }));

  const productPerformance = product?.items?.map((item, index) => ({
    name: item.name || productPerformance.name[index], 
    amazon: item.sales || productPerformance.amazon[index], 
    flipkart: flipkartListing?.find((product) => product.name === item.name)?.sales ||productPerformance.flipkart[index], 
  }));

  const conversionData = [
    { platform: "Amazon", rate: 4.2, orders: orders?.length || 0, revenue: orders?.reduce((acc, order) => acc + order.amount, 0) || 0 },
    { platform: "Flipkart", rate: 3.8, orders: flipkartListing?.length || 0, revenue: flipkartListing?.reduce((acc, product) => acc + product.price, 0) || 0 },
  ];

  return (
    <Box className="space-y-6 space-x-6">
      <Box className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-6">
        <Card>
          <CardHeader title="Platform Growth" subheader="Average monthly growth" />
          <CardContent>
            <Box className="space-y-2">
              <Box className="flex items-center justify-between">
                <Box>Amazon</Box>
                <Box className="font-bold text-green-600">+15.2%</Box>
              </Box>
              <Box className="flex items-center justify-between">
                <Box>Flipkart</Box>
                <Box className="font-bold text-green-600">+12.8%</Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Total Orders" subheader="Across all platforms" />
          <CardContent>
            <Box className="text-2xl font-bold">{orders?.length || 0}</Box>
            <Box className="text-xs text-muted-foreground">+20.1% from last month</Box>
            <Box className="mt-4 h-4 w-full rounded-full bg-secondary">
              <Box className="h-4 rounded-full bg-teal-600" style={{ width: "20%" }} />
            </Box>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Conversion Rate" subheader="Average across platforms" />
          <CardContent>
            <Box className="text-2xl font-bold">3.6%</Box>
            <Box className="text-xs text-muted-foreground">+0.5% from last month</Box>
            <Box className="mt-4 h-4 w-full rounded-full bg-secondary">
              <Box className="h-4 rounded-full bg-teal-600" style={{ width: "1%" }} />
            </Box>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Average Order Value" subheader="All platforms" />
          <CardContent>
            <Box className="text-2xl font-bold">$42.50</Box>
            <Box className="text-xs text-muted-foreground">+$2.40 from last month</Box>
            <Box className="mt-4 h-4 w-full rounded-full bg-secondary">
              <Box className="h-4 rounded-full bg-teal-600" style={{ width: "4%" }} />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader title="Revenue by Platform" subheader="Monthly revenue comparison" />
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={platformData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="amazon" stroke="#0ea5e9" name="Amazon" />
                <Line type="monotone" dataKey="flipkart" stroke="#8b5cf6" name="Flipkart" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Product Performance" subheader="Sales by platform">
           
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={productPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 'dataMax + 10']} />
                <Tooltip />
                <Bar dataKey="amazon" fill="#0ea5e9" name="Amazon" />
                <Bar dataKey="flipkart" fill="#8b5cf6" name="flipkart" />
                
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Box>

      <Card>
        <CardHeader title="Platform Performance Metrics" subheader="Detailed conversion and revenue data" />
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Platform</TableCell>
                <TableCell>Conversion Rate</TableCell>
                <TableCell>Total Orders</TableCell>
                <TableCell className="text-right">Revenue</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {conversionData.map((item) => (
                <TableRow key={item.platform}>
                  <TableCell className="font-medium">{item.platform}</TableCell>
                  <TableCell>{item.rate}%</TableCell>
                  <TableCell>{item.orders}</TableCell>
                  <TableCell className="text-right">${item.revenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
}
