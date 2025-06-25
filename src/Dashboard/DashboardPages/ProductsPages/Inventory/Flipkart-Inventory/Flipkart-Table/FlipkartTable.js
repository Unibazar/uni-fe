'use client'
import { useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import Image from 'next/image';

export default function FlipkartTable({ tableData }) {

  const [showProductDetail, setShowProductDetail] = useState(false);
  const [productDetails, setProductDetails] = useState("");


  const handleClickOpen = (item) => {
    setShowProductDetail(true);
    setProductDetails(item);
  };

  const handleClose = () => {
    setShowProductDetail(false);
  };

  console.log(tableData);
  return (
    <>
      <div className="overflow-x-auto w-full shadow-md rounded-md">
        <table className="mainContainer rounded-md w-full">
          <thead className="MainHeader bg-zinc-100 text-zinc-500">
            <tr className="text-xs md:text-lg">
              <th className="p-2">Product Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>

          {tableData?.length > 0 ? (
            <tbody className="rowsContainer">
              {tableData?.map((item, index) => (
                <tr key={index} className="border-t-2 text-xs md:text-lg cursor-pointer hover:bg-zinc-100 text-center" onClick={() => handleClickOpen(item)}>
                  <td className="py-3 px-2">
                    <div className="flex items-center justify-center col-span-3 gap-2 text-center">
                      <div className="flex flex-col items-center">
                        <p className="uppercase border-2 rounded-full px-2 text-xs md:text-sm text-[#CC6D02] border-[#FFE7CC]">{item.product_id}</p>
                        <h1 className='whitespace-nowrap'>{item.product_title || 'N/A'}</h1>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2">{item.price.mrp || 'N/A'}</td>
                  <td className="py-3 px-2">{item.listing_status || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <div className="boxs flex gap-4 flex-wrap bg-white rounded-xl p-4 md:p-7">
              <h1 className="capitalize">No more products to show!</h1>
            </div>
          )}
        </table>
      </div>

      <Dialog onClose={handleClose} open={showProductDetail}>
        <DialogTitle>Product Detail</DialogTitle>
        <div className='p-1 w-full flex flex-col '>
        <div className='flex p-5 gap-4 flex-col md:flex-row'>
          <div className='details'>
            <h1> <span className="font-bold">Archived Status:</span> {productDetails.archived_status || 'N/A'}</h1>
            <h1><span className="font-bold">Fulfillment Profile:</span> {productDetails.fulfillment_profile || 'N/A'}</h1>
            <h1><span className="font-bold">Listing Id:</span> {productDetails.listing_id || 'N/A'}</h1>
            <h1><span className="font-bold">Listing Status:</span> {productDetails.listing_status || 'N/A'}</h1>
            <h1><span className="font-bold">Price:</span> {productDetails.price?.mrp || 'N/A'}</h1>
            <h1><span className="font-bold">Product Id:</span> {productDetails.product_id || 'N/A'}</h1>
            <h1><span className="font-bold">Product Title:</span> {productDetails.product_title || 'N/A'}</h1>
            <a className='text-blue-500 hover:underline' href={productDetails.product_url || 'N/A'}><span className="font-bold">Product Url:</span> {productDetails.product_url || 'N/A'}</a>
            </div>
        </div>
        <button type="button" onClick={handleClose} class="w-fit mx-auto focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Close</button>
        </div>
      </Dialog>
    </>
  );
}
