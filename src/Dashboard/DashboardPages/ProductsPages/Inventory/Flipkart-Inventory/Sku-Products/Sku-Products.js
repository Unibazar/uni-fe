'use client'
import React, { useEffect, useState } from 'react'
import FlipkartTable from '../Flipkart-Table/FlipkartTable'
import { useSearchParams } from 'next/navigation';
import { GetFlipkartSKUProduct } from '@/redux/slice/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '@/redux/slice/userSlice';

function SkuProducts() {
  const searchParams = useSearchParams();
  const sku_id = searchParams.get('sku_id');
  const dispatch = useDispatch();
  const [flipkarProduct, setFlipkarProduct] = useState([])

  const user = useSelector(state => state?.user?.user?.user);
 

  useEffect(() => {
    dispatch(loadUser());
  }, [])

  useEffect(() => {
    if (user) {
      const payload = {
        accessToken: user?.flipkart?.accessToken,
        skuIds: sku_id
      }
      dispatch(GetFlipkartSKUProduct(payload)).then(data=>{
        setFlipkarProduct(Object.values(data?.payload?.data?.available));
      });
    }
  }, [user])

  return (
    <div className="h-full w-full px-4 py-4 md:px-7 md:py-7">
      <div className='title'>
        <h1 className='md:text-3xl text-lg font-semibold'>Products</h1>
      </div>

      <div className="boxs flex mt-7 gap-4 flex-wrap bg-white rounded-xl p-4 md:p-7">
        <FlipkartTable tableData={flipkarProduct} />

      </div>


    </div>
  )
}

export default SkuProducts