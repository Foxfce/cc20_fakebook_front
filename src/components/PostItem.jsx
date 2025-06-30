import { CloseIcon, CommentIcon, LikeIcon, ShareIcon, ThreeDotIcon } from "../icons"
import useUserStore from "../stores/userStore"
import Avatar from "./Avatar"

function PostItem() {
  const user = useUserStore(state => state.user)
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar
              className='w-11 rounded-full'
            />
            <div className="flex flex-col justify-between">
              <span className="text-sm">Someone Someday</span>
              <span className="text-xs opacity-70">1d ago</span>
            </div>

          </div>

          <div className="flex gap-2 items-center">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role='button'>
                <div className="avatar items-center cursor-pointer">
                  <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                    <ThreeDotIcon className='w-6' />
                  </div>
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Edit</a></li>
                <li><a>Delete</a></li>
              </ul>
            </div>
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                <CloseIcon className='w-6' />
              </div>
            </div>
          </div>

        </div>

        <p>I love coding</p>
        <img
          src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg"
          alt="pic"
          className="p-2 max-h-[200px] object-contain"
        />

        {/* Like, comment, share button */}
        <div className="flex justify-between items-center pe-4">
          <div className="avatar items-center gap-1 cursor-pointer justify-center">
            <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-200">
              <LikeIcon className='w-5' />
            </div>
            <p>69 Likes</p>
          </div>
          <div className="flex">
            <p className="opacity-60">3 Comments</p>
          </div>
        </div>

        <div className="divider h-0 my-0" />
        {/* Like Comment Share buttons */}
        <div className="flex gap-3 justify-between">

          <div className={`flex-1 flex items-center gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 text-lg font-medium ${Math.random()>0.5 ? 'bg-blue-300': ''}`}>
            <LikeIcon className='w-8' />
            Like
          </div>

          <div className="flex-1 flex items-center gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 text-lg font-medium">
            <CommentIcon className='w-8' />
            Comment
          </div>

          <div className="flex-1 flex items-center gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 text-lg font-medium">
            <ShareIcon className='w-8' />
            Share
          </div>

        </div>
      </div>
    </div>
  )
}
export default PostItem