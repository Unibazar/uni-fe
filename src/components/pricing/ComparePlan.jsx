// import React,{useEffect} from 'react'
// import { loadUser } from '@/redux/slice/userSlice';
// import { useDispatch, useSelector } from 'react-redux';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'

const plans = [
  {
    name: 'Free',
    price: '$0',
    subtitle: '/month',
    button: 'Sign Up for Free',
    showButtonIf: (user) => !user?.user.verified
  },
  {
    name: 'Pro',
    price: '$10',
    subtitle: '/month',
    button: 'Upgrade to Pro'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    subtitle: '',
    button: 'Contact Us'
  }
]

const features = [
  {
    name: 'Number of Linked Platforms',
    values: ['2', '5', 'Unlimited']
  },
  {
    name: 'Product Management Limit',
    values: ['50', '500', 'Unlimited']
  },
  {
    name: 'Dashboard Access',
    values: ['Basic', 'Advance', 'Full']
  },
  {
    name: 'Real-Time Analytics',
    values: ['No', 'Yes', 'Yes']
  },
  {
    name: 'Inventory Management',
    values: ['No', 'Yes', 'Yes']
  },
  {
    name: 'Customer Support Level',
    values: ['Basic', 'Priority', 'Premium']
  },
  {
    name: 'Customizable Reports',
    values: ['No', 'Yes', 'Yes']
  },
  {
    name: 'Dedicated Account Manager',
    values: ['No', 'No', 'Yes']
  }
]

const ComparePlan = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(state => state.user.user);
 
const user = { user: { verified: false } } // For demo. Replace with real selector.
 
//   useEffect(() => {
//     dispatch(loadUser());
//   }, [dispatch]);
  return (
    <div className="w-full py-5 md:mt-5">
      <div className='flex justify-center'>
        <p className='font-bold text-xl'>Our Pricing</p>
      </div>

      <div className="w-full px-5 py-10 overflow-y-auto">
        <Table className='w-auto outline outline-2 outline-gray-100'>
          <TableHead>
            <TableRow>
              <TableCell className='w-1/4 outline outline-1 outline-gray-100'>
                <p className='text-xl font-bold'>Compare Plans</p>
                <p className='text-sm text-gray font-normal'>
                  Choose your workspace plan according to<br /> your organisational plan
                </p>
              </TableCell>

              {plans.map((plan, idx) => (
                <TableCell key={idx} className='w-1/4 outline outline-1 outline-gray-100'>
                  <div className='flex flex-col items-center justify-center p-5'>
                    <p className='text-lg font-normal'>{plan.name}</p>
                    <p className='text-lg font-bold'>
                      {plan.price} <span className='font-normal'>{plan.subtitle}</span>
                    </p>
                  </div>
                  {(plan.showButtonIf ? plan.showButtonIf(user) : true) && (
                    <button className='bg-teal-600 hover:bg-teal-800 w-full text-center rounded py-2 text-white'>
                      {plan.button}
                    </button>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {features.map((feature, i) => (
              <TableRow key={i}>
                <TableCell className='min-w-[250px] outline outline-1 outline-gray-100 text-left'>
                  {feature.name}
                </TableCell>
                {feature.values.map((val, idx) => (
                  <TableCell
                    key={idx}
                    className='text-center min-w-[250px] outline outline-1 outline-gray-100'
                  >
                    <div className='flex justify-center items-center w-full'>{val}</div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default ComparePlan