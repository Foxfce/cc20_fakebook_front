import { useState } from "react";
import { FriendIcon, PictureIcon } from "../icons";
import useUserStore from "../stores/userStore"
import Avatar from "./Avatar";
import AddPicture from "./AddPicture";

function PostForm() {
  const user = useUserStore(state => state.user);
  const [addPic, setAddPic] = useState(true);
  return (
    <div className="flex flex-col gap-2 bg-white">
      <h3 className="text-xl text-center">Create Post</h3>
      <div className="divider mt-1 mb-0" />
      <div className="flex gap-2">
        <Avatar
          className='w-11 rounded-full'
          imgSrc={user.fileImage}
        />
        <div className="flex flex-col justify-between">
          <span className="text-sm">{user.firstName} {user.lastName}</span>
          <select className="select bg-slate-200 select-xs h-full w-fit max-w-xs" >
            <option disabled>Who can see?</option>
            <option >Public</option>
            <option >Friends</option>
            <option >Only me</option>
          </select>
        </div>

      </div>

      <textarea
        className="textarea textarea-ghost w-full"
        placeholder={`What do you think ${user.firstName}?`}
      ></textarea>

      {
        addPic &&
        <AddPicture />
      }

      <div className="flex justify-between border rounded-lg p-2 items-center">
        <p>Add with your post?</p>
        <div
          className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-100"
          onClick={() => setAddPic(prv => !prv)}
        >
          <PictureIcon className='w-7' />
        </div>
      </div>
      <div className="divider mt-1 mb-0" />

      <button className="btn btn-primary">Create Post</button>

    </div>
  )
}
export default PostForm