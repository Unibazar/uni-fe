'use client'
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { LuCalendar, LuLayoutGrid } from "react-icons/lu";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { useEffect, useState } from "react";
import TableLayout from "../ProductPage-Components/TableLayout";
import CardLayout from "../ProductPage-Components/CardLayout";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct } from "@/redux/slice/productSlice";



export default function AmazonInventory() {
  const [searchBoxText, setSearchBoxText] = useState("");
  const [lastDateModified, setLastDateModified] = useState("all-time");
  const [status, setStatus] = useState("all");
  const [layoutDetail, setLayoutDetail] = useState("list");
  const itemPerPage = 10;
  const [ProductData, setProductData] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [page, setPage] = useState(1);
  
  
    const dispatch = useDispatch();


   const { product , isLoading ,error } = useSelector((state) => state.product);
  
    useEffect(() => {
      dispatch(loadProduct(page));
    }, [page, dispatch]);
  
    useEffect(() => {
      setProductData(product || []);
      setTotalProducts(product?.numberOfResults)
    }, [dispatch,page,product])



  const toggleLayoutDetail = () => {
    setLayoutDetail(prev => prev == "list" ? "cards" : "list");
  }

  const handleNextPage= () => {
    if(page==Math.ceil(totalProducts / itemPerPage)){
      return;
    }
    
    setPage(page => page+1);
  }

  const handlePreviousPage= () => {
    if(page==1){
      return;
    }
    setPage(page => page-1);
  }

  


  return (
    <div className="h-full w-full">
      <div className='title flex flex-wrap justify-between items-center'>
        <h1 className='md:text-3xl text-lg font-semibold '>Amazon Inventory</h1>
        <div className=''>
          <Link href="/dashboard/products?q=add-product" className="box p-3 bg-[#08A9A0] text-white rounded-l-md text-sm">
            Add New Products
          </Link>
        </div>
      </div>

       <div className="boxs flex mt-7 gap-4 flex-wrap bg-white rounded-xl p-4 md:p-7">
        {/* searchbar section */}
        <div className="header flex w-full justify-between flex-wrap gap-5 lg:gap-10">
          <div className="searhbox flex w-[70%] md:w-[40%] items-center gap-2 py-1 md:py-2 rounded-lg px-2 border-2">
            <IoIosSearch />
            <input type="text" value={searchBoxText} onChange={(e) => setSearchBoxText(e.target.value)} className='bg-transparent outline-none w-full' placeholder='Search By Name or Description' />
          </div>

          {/* filter section  */}
          <div className="filters flex gap-4 items-center flex-wrap text-xs md:text-lg">
            <div className="border-2 rounded-full p-2 flex items-center gap-1">
              <LuCalendar />
              <h1>Last Modified:</h1>
              <select name="time" className="outline-none" value={lastDateModified} onChange={(e) => setLastDateModified(e.target.value)}>
                <option value="all-time">All Time</option>
                <option value="last-week">Last Week</option>
              </select>
            </div>
            <div className="border-2 rounded-full p-2 flex items-center gap-1">
              <LuListTodo />
              <h1>Status:</h1>
              <select name="status" className="outline-none" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="all">All</option>
                <option value="finished">Finished</option>
              </select>
            </div>

            <div className="w-[2px] h-1/2 bg-zinc-300"></div>
            <div className="advanceFilter">
              <button className="text-[#207A7A]">Advance Filter</button>
            </div>
          </div>
        </div>

        {/* pagination section  */}
        <div className="pageChanger flex justify-between items-center w-full flex-wrap mt-5 md:mt-0">
          <div className="pageChangeButton flex items-center md:gap-2 flex-wrap gap-5">
            <div className="textContainer">
              <h1 className="text-zinc-400">Showing Page {page} of {totalProducts}</h1>
            </div>
            <div className="pageChangeBtns flex border-2 rounded-lg ">
              <button className="left p-2 border-r-2 relative group disabled:text-zinc-300" disabled={page==1} onClick={handlePreviousPage}>
                <MdKeyboardArrowLeft />
                <span className="text-xs absolute -left-1/2 text-nowrap bg-zinc-300 text-black p-1 rounded-md pointer-events-none hidden group-hover:inline">Previous page</span>
              </button>
              <div className="left2 p-2 border-r-2">
                <MdKeyboardDoubleArrowLeft />
              </div>
              <button className="right p-2 border-r-2 relative group disabled:text-zinc-300" disabled={page==Math.ceil(totalProducts / itemPerPage)} onClick={handleNextPage}>
                <MdKeyboardArrowRight />
                <span className="text-xs absolute -left-1/2 text-nowrap bg-zinc-300 text-black p-1 rounded-md pointer-events-none hidden group-hover:inline">Next page</span>
              </button>
              <div className="right2 p-2 ">
                <MdKeyboardDoubleArrowRight />
              </div>
            </div>
          </div>


          <div className="menus flex items-center border-2 rounded-lg mt-5 md:mt-0 text-xs md:text-lg">
            <button onClick={toggleLayoutDetail} className={`box p-2 ${layoutDetail == "list" ? "bg-[#078680] text-white" : "bg-white text-black"}  rounded-l-md flex items-center gap-2`}>
              <FaListUl className='text-xs md:text-lg lg:text-xl' />
              <span>List</span>
            </button>
            <button onClick={toggleLayoutDetail} className={`box p-2 ${layoutDetail == "cards" ? "bg-[#078680] text-white" : "bg-white text-black"}  rounded-r-md flex items-center gap-2`}>
              <LuLayoutGrid className='text-xs md:text-lg lg:text-xl' />
              <span>Cards</span>
            </button>
          </div>
        </div>

        
        {layoutDetail == "list" ? <TableLayout tableData={ProductData} /> : <CardLayout data={ProductData} />}
        
      </div> 
      

    </div>
  )
}
