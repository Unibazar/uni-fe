// import OrderListPage from '@/components/Dashboard/DashboardPages/OrderPages/OrderListPage';
// import { GetFlipkartDashboardAnalytics, GetFlipkartListing } from '@/redux/slice/productSlice';
import StatCard from '../../Common-Components/StatCard';
import { FaUsers} from 'react-icons/fa';
import { GiBackwardTime } from 'react-icons/gi';
import { GoGraph } from 'react-icons/go';
import { RiBox3Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { loadUser } from '@/redux/slice/userSlice';
import StatCard2 from '../../Common-Components/StatCard2';
import AnalyticsDashboard from '../AanlyticsComponent/AnalyticsComponent';

// import OrderListPage from '../../components/Dashboard/DashboardPages/OrdersPages/OrderListPage';

function Overview() {
//   const dispatch = useDispatch();

//   const { orders, isLoading:orderLoading } = useSelector((state) => state.orders);
//   const { product , isLoading:productLoading ,error } = useSelector((state) => state.product);
//   const user = useSelector(state => state?.user?.user?.user);
//     const flipkartListing = useSelector(state => state?.product?.flipkartListing?.data?.listings);
//     const dashboardAnalytics = useSelector(state => state?.product?.dashboardAnalytics?.data);
// console.log(dashboardAnalytics,"dashboardAnalytics")
// console.log(flipkartListing,"flipkart listing2")
    // useEffect(() => {
    //     dispatch(loadUser());
    // }, [])

    // useEffect(() => {
    //     if (user) {
    //         const payload = {
    //             accessToken: user?.flipkart?.accessToken,
    //             status: "ACTIVE"
    //         }
    //         dispatch(GetFlipkartListing(payload));
    //         const analyticalPayload={
    //           accessToken: user?.flipkart?.accessToken,

    //         }
    //         dispatch(GetFlipkartDashboardAnalytics(analyticalPayload));
    //     }
    // }, [user])
    // const totalFlipkartListing=flipkartListing?.length;
    // const totalProducts=product?.numberOfResults+totalFlipkartListing
    // console.log(totalProducts,totalFlipkartListing,"totalProducts")
  return (
    <>
      <div className='w-full px-4 py-4 md:px-7 md:py-7'>
        <div className='title flex flex-wrap items-center'>
          <h1 className='md:text-3xl text-lg font-semibold '>Dashboard</h1>
        </div>

        <div className='boxes flex gap-5 mt-10 flex-wrap'>
          <StatCard
            title='Total Products'
            // count={ totalProducts || 0}
            count={0}
            bgColor='#FFFFFF'
            textColor='#8280FF'
            description='Increased from yesterday'
            Icon={FaUsers}
          />

          <StatCard
            title='Total Order'
            // count={orders?.length}
            count={0}
            bgColor='#FFFFFF'
            textColor='#FEC53D'
            description='Increased from yesterday'
            Icon={RiBox3Fill}
            textSize='3xl'
          />

          <StatCard2
            title='Today Analytics'
            count1Label="Today orders"
            // count1={dashboardAnalytics?.todayOrders}
            count1={0}
            count2Label="Today Listings"
            // count2={dashboardAnalytics?.todayListings}
            count2={1}
            count3Label="Today Shipped"
            // count3={dashboardAnalytics?.shippedOrders}
            count3={2}
            count4Label=" Delivered"
            // count4={dashboardAnalytics?.deliveredOrders}
            count4={3}
            count5Label=" Cancelled"
            // count5={dashboardAnalytics?.canceledOrders}
            count5={4}
            bgColor='#FFFFFF'
            textColor='#4AD991'
            description='Increased from yesterday'
            Icon={GoGraph}
            textSize='2xl'
          />

          <StatCard
            title='Total Pending'
            count='2040'
            bgColor='#FFFFFF'
            textColor='#FFA583'
            description='Increased from yesterday'
            Icon={GiBackwardTime}
            textSize='3xl'
          />
        </div>

        <div className='chart bg-white mt-10 rounded-lg overflow-hidden w-full'>
          {/* <h1 className='md:text-2xl font-semibold m-5 mb-0'>Sales Details</h1> */}
          <AnalyticsDashboard/>
          {/* <LineChart className="w-full p-2"
                height={400}
                series={[
                  { data: pData, label: 'pv' },
                  { data: uData, label: 'uv' },
                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}

                grid={{ horizontal: true }}
              /> */}
        </div>
      </div>
    </>
  );
}

export default Overview;
