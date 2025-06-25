import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { RiMenuFold3Line } from "react-icons/ri";
import ProfileIcon from "../../components/widgets/ProfileIcon/ProfileIcon";

export default function DashboardNavbar({ setShowSidebar, showSidebar }) {
    return (
        <div className='flex items-center justify-between w-full p-4 sticky top-0 z-[99] bg-white'>
            <div className="left flex items-center gap-2 md:gap-4">
                <button className="p-1 rounded-full hover:bg-zinc-200" onClick={()=>setShowSidebar(prev=>!prev)}>
                    {!showSidebar?<IoIosMenu className='text-lg md:text-3xl' />:
                    <RiMenuFold3Line className='text-lg md:text-3xl'/>}
                </button>
                <div className="serachbox flex items-center bg-zinc-100 gap-4 py-1 md:py-2 rounded-full px-2 md:px-4">
                    <IoIosSearch />
                    <input type="text" className='bg-transparent outline-none md:w-80 w-full' placeholder='Search' />
                </div>
            </div>

            <div className="right flex items-center gap-2 md:gap-4">
                <FaBell className='text-lg md:text-2xl shrink-0' />
                <ProfileIcon/>
            </div>

        </div>
    )
}
