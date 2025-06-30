import { SearchIcon } from "../icons"
import Avatar from "./Avatar"
import MenuItem from "./MenuItem"

function SidebarContact() {
  return (
    <div className="fixed flex flex-col top-14 h-full min-w-[220px] w-[350px] pt-2 overflow-auto gap-2 right-0 max-xl:hidden">
      <div className="flex justify-between text-gray-500">
        <span>Contact</span>
        <div className="flex gap-2">
          <SearchIcon />
          ...
        </div>
      </div>
        <MenuItem
        icon = {Avatar}
        text = "Arm Codecamp20"
        className = "w-11 h-11 rounded-full bg-slate-200"
        imgSrc = "https://i1.sndcdn.com/artworks-tyLfiEixDjc2yIA1-4HG57Q-t500x500.jpg"
         />

        <MenuItem
        icon = {Avatar}
        text = "Arm Codecamp20"
        className = "w-11 h-11 rounded-full bg-slate-200"
        imgSrc = "https://i1.sndcdn.com/artworks-tyLfiEixDjc2yIA1-4HG57Q-t500x500.jpg"
         />

        <MenuItem
        icon = {Avatar}
        text = "Arm Codecamp20"
        className = "w-11 h-11 rounded-full bg-slate-200"
        imgSrc = "https://i1.sndcdn.com/artworks-tyLfiEixDjc2yIA1-4HG57Q-t500x500.jpg"
         />
    </div>
  )
}
export default SidebarContact