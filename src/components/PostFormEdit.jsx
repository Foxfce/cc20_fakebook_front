import { useState } from "react";
import usePostStore from "../stores/postStore"
import useUserStore from "../stores/userStore";
import Avatar from "./Avatar";
import AddPicture from "./AddPicture";
import { PictureIcon } from "../icons";
import { toast } from "react-toastify";

function PostFormEdit() {
  const user = useUserStore(state => state.user);
  const currentPost = usePostStore(state => state.currentPost);
  const updatePost = usePostStore(state=> state.updatePost);

  // const loading = usePostStore(state => state.loading);

  const [message, setMessage] = useState(currentPost.message);
  const [loading, setLoading] = useState(false);
  const [addPic, setAddPic] = useState(false);
  const [file, setFile] = useState(null);
  const [removePic, setRemovePic] = useState(false);

  const hdlUpdatePost = async () => {
    try {
      setLoading(true)
      const body = new FormData()
      body.append('message', message);
      if(file){
        body.append('image', file);
      }
      if(removePic){
        body.append('removePic', true);
      }

      // api call update
      const resp = await updatePost(currentPost.id, body)
      document.getElementById('editform-modal').close();
      
    } catch (error) {
      const errMsg = error.response?.data.error || error.message
      toast(errMsg);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2 bg-white">
      <h3 className="text-xl text-center">
        {loading && <span className="loading loading-dots loading-sm"></span>}
        Edit Post
      </h3>
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
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={message.split('\n').length < 12 ? message.split('\n').length : 12}
      ></textarea>

      {
        currentPost.image && !removePic && (
          <div className="flex justify-evenly items-center border relative">
            <img src={currentPost.image} alt="" className="h-[100px] object-contain" />
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0"
              onClick={() => setRemovePic(true)}
            >
              X</button>
          </div>
        )
      }
      {
        addPic &&
        <AddPicture file={file} setFile={setFile} />
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

      <button className="btn btn-primary"
        onClick={()=>hdlUpdatePost()}
        disabled={message.trim().length === 0 && !file}
      >Edit Post</button>

    </div>
  )
}
export default PostFormEdit