import { Link } from "react-router";
import { AppSettingIcon, BellIcon, CommunityIcon, FakebookLogo, HomeIcon, MarketIcon, MessengerIcon, PlayIcon, SearchIcon } from "../icons";
import useUserStore from "../stores/userStore"
import Avatar from "./Avatar";

function Header() {
  const logout = useUserStore(state => state.logout);
  const user = useUserStore(state => state.user);

  return (
    <>
      <div className="flex justify-between items-center  h-14 w-full shadow-lg fixed bg-white px-3 top-0
      z-10">

        {/* Search Bar */}
        <div className="flex-1 flex h-full gap-2 items-center">
          <FakebookLogo className='w-12' />

          <label className="input rounded-full">
            <input type="search" required placeholder="Search" />
            <SearchIcon />
          </label>

        </div>

        {/* Navigator */}
        <div className="flex-1 flex h-full gap-2 justify-center items-center max-lg:hidden">
          <Link to='/' className="flex justify-center w-20 hover:border-2 hover:border-blue-400">
            <HomeIcon className='w-1/2' /></Link>
          <Link to='/' className="flex justify-center w-20 hover:border-2 hover:border-blue-400">
            <PlayIcon className='w-1/2' /></Link>
          <Link to='/' className="flex justify-center w-20 hover:border-2 hover:border-blue-400">
            <MarketIcon className='w-1/2' /></Link>
          <Link to='/friends' className="flex justify-center w-20 hover:border-2 hover:border-blue-400">
            <CommunityIcon className='w-1/2' /></Link>
        </div>

        {/* Avatar */}
        <div className="flex-1 flex h-full gap-3 justify-end items-center">

          <div className="avatar justify-center items-center">
            <div className="w-10 h-10 rounded-full !flex justify-center bg-gray-300 hover:bg-gray-400">
              <AppSettingIcon className='w-1/2' />
            </div>
          </div>

          <div className="avatar">
            <div className="w-10 h-10 rounded-full !flex justify-center bg-gray-300 hover:bg-gray-400">
              <MessengerIcon className='w-6' />
            </div>
          </div>

          <div className="avatar">
            <div className="w-10 h-10 rounded-full !flex justify-center bg-gray-300 hover:bg-gray-400">
              <BellIcon className='w-6' />
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle">
              <Avatar menu className='w-10 h-10 rounded-full !flex justify-center bg-gray-300 hover:bg-gray-400'
                imgSrc={user.profileImage}
              />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><Link to='/profile'>Profile</Link></li>
              <li><a onClick={logout}>Logout</a></li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}
export default Header