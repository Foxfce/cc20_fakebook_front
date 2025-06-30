import { PictureIcon } from "../icons"

function AddPicture() {
  return (
    <div className="flex flex-col p-2 border rounded-lg ">
      <div 
      className="bg-slate-100 min-h-40 w-full relative cursor-pointer hover:bg-slate-200"
      onClick={()=>document.getElementById('input-file').click()}
      >
        <input type="file" id='input-file' className="hidden" />
        <PictureIcon className=' absolute w-10 top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2' />
      </div>
    </div>
  )
}
export default AddPicture