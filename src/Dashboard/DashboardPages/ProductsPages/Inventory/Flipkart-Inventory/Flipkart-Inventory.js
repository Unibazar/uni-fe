'use client'
import { GetFlipkartListing } from "@/redux/slice/productSlice";
import { loadUser } from "@/redux/slice/userSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function FlipkartInventory() {
    const dispatch = useDispatch();

    const user = useSelector(state => state?.user?.user?.user);

    const flipkartListing = useSelector(state => state?.product?.flipkartListing?.data?.listings);

    useEffect(() => {
        dispatch(loadUser());
    }, [])

    useEffect(() => {
        if (user) {
            console.log(user,"user")
            const payload = {
                accessToken: user?.user?.flipkart?.accessToken,
                status: "ACTIVE"
            }
            dispatch(GetFlipkartListing(payload));
        }
    }, [user])


    return (
        <div className="h-full w-full">
            <div className='title flex flex-wrap justify-between items-center'>
                <h1 className='md:text-3xl text-lg font-semibold '>Flipkart Inventory</h1>
                <div className=''>
                    <Link href="/dashboard/products?q=add-product" className="box p-3 bg-[#08A9A0] text-white rounded-l-md text-sm">
                        Add New Products
                    </Link>
                </div>
            </div>

            <div className="boxs flex flex-wrap gap-6 mt-8 bg-white rounded-xl p-6 md:p-10 shadow-lg">
                {flipkartListing?.length > 0 ? flipkartListing.map(product => (
                    <div key={product.sku_id} className="card flex flex-col justify-between w-full sm:w-[calc(50%-1rem)] lg:w-[calc(30%-1rem)] bg-gradient-to-br from-gray-100 to-gray-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Product Details</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="font-medium">Listing ID:</span>{product.listing_id}
                            </p>
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="font-medium">Product ID:</span> {product.product_id}
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                <span className="font-medium">SKU ID:</span> {product.sku_id}
                            </p>
                        </div>
                        <Link href={`/dashboard/flipkart?sku_id=${product.sku_id}`} className="bg-[#08A9A0] text-white px-4 py-2 rounded-md w-fit">View Product</Link>
                    </div>
                ))
                    : <p>No Product Available</p>
                }
            </div>


        </div>
    )
}
