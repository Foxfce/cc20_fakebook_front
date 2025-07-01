import { useState } from "react";
import { FriendIcon, PictureIcon } from "../icons";
import useUserStore from "../stores/userStore"
import Avatar from "./Avatar";
import AddPicture from "./AddPicture";
import usePostStore from "../stores/postStore";
import { toast } from "react-toastify";

function PostForm() {
  const user = useUserStore(state => state.user);
  const token = useUserStore(state => state.token);

  const loading = usePostStore(state => state.loading);
  const createPost = usePostStore(state => state.createPost);

  const [message, setMessage] = useState('');
  const [addPic, setAddPic] = useState(false);
  const [file, setFile] = useState(null);

  const hdlCreatePost = async () => {
    try {
      // new FormData create a form data structure for easily use
      const body = new FormData();
      // append create something like {message : message} ('objkey',value)
      body.append('message', message);
      if (file) {
        body.append('image', file);
      }

      // Way to log out the body Form
      // for(let el of body){
      //   console.log(el);
      // }
      const resp = await createPost(body, token, user)
      toast(resp.data.message);
      document.getElementById('postform-modal').close();

    } catch (error) {
      const errMsg = error.response?.data.error || error.message
      toast(errMsg);

    }
  }

  return (
    <div className="flex flex-col gap-2 bg-white">
      <h3 className="text-xl text-center">
        {loading && <span className="loading loading-dots loading-sm"></span>}
        Create Post
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
        onClick={hdlCreatePost}
        disabled={message.trim().length === 0 && !file}
      >Create Post</button>

    </div>
  )
}
export default PostForm