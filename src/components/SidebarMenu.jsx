import { Link } from "react-router";
import { AvatarIcon, BookmarkIcon, CommunityIcon, FriendIcon, HistoriesIcon, MoreIcon, PlayIcon } from "../icons";
import useUserStore from "../stores/userStore"
import MenuItem from "./MenuItem";
import Avatar from "./Avatar";

function SidebarMenu() {
const user = useUserStore(state => state.user);

  return (
    <div className="flex flex-col top-14 h-full min-w-[220px] w-[350px] pt-2 overflow-auto gap-2 border">
      <Link to='/profile'>
      <MenuItem 
      icon={Avatar} 
      text={`${user.firstName} ${user.lastName}`} 
      className='w-11 h-11 rounded-full bg-slate-200' 
      imgSrc={user.profileImage} />
      </Link>
      <MenuItem icon={FriendIcon} text='Friends' className='w-10' />
      <MenuItem icon={HistoriesIcon} text='Memories' className='w-10' />
      <MenuItem icon={BookmarkIcon} text='Save' className='w-10' />
      <MenuItem icon={CommunityIcon} text='Group' className='w-10' />
      <MenuItem icon={PlayIcon} text='Video' className='w-10' />
      <MenuItem icon={MoreIcon} text='More...' className='w-10' />
      <div>
      Avartar + MenuItem
      </div>

      <div>
        Friends
      </div>
      
    </div>
  )
}
export default SidebarMenu