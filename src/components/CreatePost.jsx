import Avatar from "./Avatar";
import useUserStore from "../stores/userStore"
import { FeelingIcon, PictureIcon, VideoIcon } from "../icons";
import { useEffect, useState } from "react";
import PostForm from "./PostForm";

function CreatePost() {
  const user = useUserStore(state => state.user);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    if(isOpen) {
      document.getElementById('postform-modal').showModal()
    }else{    
      document.getElementById('postform-modal').close()
    }
  },[isOpen]);

  return (
    <>
      <div className="card bg-base-1000 shadow-xl bg-white">
        <div className="card-body p-6">
          <div className="flex gap-2">
            <Avatar className='w-11 rounded-full'
              imgSrc={user.profileImage}
            />
            <button className="btn flex-1 rounded-full justify-start"
              onClick={() => setIsOpen(true)}
            >
              What do you think?
            </button>

          </div>
          <div className="divider mt-1 mb-0" />
          <div className="flex gap-3 justify-between">
            <div className="flex-1 flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 text-lg font-medium">
              <VideoIcon className='w-8' />
              Live video
            </div>

            <div className="flex-1 flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 text-lg font-medium">
              <PictureIcon className='w-8' />
              Photo/video
            </div>

            <div className="flex-1 flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 text-lg font-medium">
              <FeelingIcon className='w-8' />
              Feeling/activity
            </div>

          </div>
        </div>
      </div>

      <dialog id='postform-modal' className="modal" onClose={()=>setIsOpen(false)}>
        <div className="modal-box">
          <div>
            {isOpen && <PostForm />}
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
export default CreatePost