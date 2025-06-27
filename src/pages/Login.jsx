import { useState } from "react";
import { FakebookTitle } from "../icons"
import Register from "./Register"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../utils/validators";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const { handleSubmit, register, formState: { isSubmitting, errors }, reset } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const onLogin = async data => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const resp = await axios.post('http://localhost:5069/api/auth/login',data);
      console.log(resp);
      toast.success(resp.data.msg);
      // alert(JSON.stringify(data, null, 2));
      // reset();
    } catch (error) {
      const errMsg = error.response?.data?.error || error.message
      console.error(errMsg);
      
    }
  }

  const [resetForm, setResetForm] = useState(false);
  const onClose = () => {
    setResetForm(prv => !prv)
  }

  return (
    <>
      <div className="h-[700px] pt-20 pb-28 bg-[#f2f4f7]">
        <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between max-md:flex-col">
          <div className="flex flex-col max-md:items-center max-md:text-center gap-4 mt-20 basis-3/5 ">
            <div className="text-4xl font-extrabold"><FakebookTitle /></div>
            <h2 className="text-[30px] leading-8 mt-3 w-[514px]">
              Fakebook helps you connect and share with the people in your life
            </h2>
          </div>
          <div className="flex flex-col gap-4 mt-20 basis-2/5 h-[350px] bg-white min-w-fit">
            <div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
              <form onSubmit={handleSubmit(onLogin)}>
                <fieldset disabled={isSubmitting}>
                  <div className="card-body">

                    <div className="w-full">
                      <input className="input w-full"
                        type="text" placeholder="E-mail or Phone number"
                        {...register('identity')} />
                    </div>

                    <div className="w-full">
                      <input className="input w-full"
                        type="password" placeholder="Password"
                        {...register('password')} />
                      <p className='text-sm text-error'>
                        {(errors.identity || errors.password) ? (errors.identity?.message || errors.password?.message) : null}</p>
                    </div>

                    {!isSubmitting && <button className="btn btn-primary text-xl">Login</button>}
                    {isSubmitting && <button className="btn btn-primary text-xl">Login
                      <span className="loading loading-spinner text-info absolute right-2/6"></span></button>}

                    <p className="text-center cursor-pointer opacity-70">Forgoten password?</p>

                    <div className="divider my-0"></div>

                    <button type="button" className="btn btn-secondary text-lg w-3/5 mx-auto min-w-fit bg-[#43b82b] border-[#43b82b]"
                      onClick={() => document.getElementById("register-form").showModal()}>
                      Create new account
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <dialog id="register-form" className="modal" onClose={onClose}>
          <div className="modal-box">
            <Register resetForm={resetForm} />
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
        </dialog>
      </div>
    </>
  )
}
export default Login