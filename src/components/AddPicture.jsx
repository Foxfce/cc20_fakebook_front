import { PictureIcon } from "../icons"

function AddPicture({ file, setFile }) {

  const hdlFileChange = e => {
    // console.dir(e.target.value);
    setFile(e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]));
  }

  const removePic = e => {
    e.stopPropagation();
    document.getElementById('input-file').value = ''
    setFile(null);
  }

  return (
    <div className="flex flex-col p-2 border rounded-lg ">
      <div
        className="bg-slate-100 min-h-40 w-full relative cursor-pointer hover:bg-slate-200"
        onClick={() => document.getElementById('input-file').click()}
      >
        <input type="file" id='input-file' className="hidden"
          onChange={hdlFileChange} />
        {file &&
        <>
          <img src={URL.createObjectURL(file)} className="h-full block mx-auto" />
          <button 
          className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0"
          onClick={removePic}
          >
            X</button>
        </>
        }
        {
          !file &&
          <PictureIcon className=' absolute w-10 top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2' />
        }
      </div>
    </div>
  )
}
export default AddPicture