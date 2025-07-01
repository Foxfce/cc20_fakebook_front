import TimeAgo from "react-timeago";
import { CloseIcon, CommentIcon, LikeIcon, ShareIcon, ThreeDotIcon } from "../icons"
import usePostStore from "../stores/postStore";
import useUserStore from "../stores/userStore"
import Avatar from "./Avatar"
import { toast } from "react-toastify";

function PostItem({ post }) {
  const user = useUserStore(state => state.user);
  const token = useUserStore(state => state.token);
  const getAllPosts = usePostStore(state => state.getAllPosts);
  const deletePost = usePostStore(state => state.deletePost);
  const setCurrentPost = usePostStore(state => state.setCurrentPost);


  const hdlShowEditModal = () => {
    setCurrentPost(post);
    document.getElementById('editform-modal').showModal();
  }

  const hdlDelete = async () => {
    try {
      const resp = await deletePost(post.id);
      toast.success(resp.data.message);

    } catch (error) {
      const errMsg = error.response?.data.error || error.message
      toast(errMsg);
    }
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar
              className='w-11 rounded-full'
              imgSrc={post.user.profileImage}
            />
            <div className="flex flex-col justify-between">
              <span className="text-sm">{`${post.user.firstName} ${post.user.lastName}`}</span>
              <span className="text-xs opacity-70">
                <TimeAgo date={post.createdAt} />
              </span>
            </div>

          </div>

          <div className="flex gap-2 items-center relative -top-5">
            {post.userId === user.id &&
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role='button'>
                  <div className="avatar items-center cursor-pointer">
                    <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                      <ThreeDotIcon className='w-6' />
                    </div>
                  </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li onClick={hdlShowEditModal}><a>Edit</a></li>
                  <li onClick={hdlDelete}><a>Delete</a></li>
                </ul>
              </div>
            }

            <div className="avatar items-center cursor-pointer">
              <div
                className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200"
                onClick={null}
              >
                <CloseIcon className='w-6' />
              </div>
            </div>
          </div>

        </div>

        <p>{post.message}</p>
        {post.image &&
          <img
            src={post.image}
            alt="pic"
            className="p-2 max-h-full object-contain"
          />}

        {/* Like, comment, share button */}
        <div className="flex justify-between items-center pe-4">
          <div className="avatar items-center gap-1 cursor-pointer justify-center">
            <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-200">
              <LikeIcon className='w-5' />
            </div>
            <p>
              {post.likes.length > 1 ? `${post.likes.length} Likes` : `${post.likes.length} Like`}
            </p>
          </div>
          <div className="flex">
            <p className="opacity-60">
              {post.comments.length > 1 ? `${post.comments.length} Comments` : `${post.comments.length} Comment`}
            </p>
          </div>
        </div>

        <div className="divider h-0 my-0" />
        {/* Like Comment Share buttons */}
        <div className="flex gap-3 justify-between">

          <div className={`flex-1 flex items-center gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 text-lg font-medium ${Math.random() > 0.5 ? 'bg-blue-300' : ''}`}>
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