import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema, registerSchema } from '../utils/validators';
import { useEffect } from 'react';


function Register({resetForm}) {
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(registerSchema)
  })

  const { isSubmitting, errors } = formState

  useEffect(()=>{
    reset();
  },[resetForm])

  const onSubmit = data => {
    alert(JSON.stringify(data, null, 2));
    document.getElementById("register-form").close()
    reset();
  }

  return (
    <>
      <div className="text-3xl text-center opacity-70">Create a new account</div>
      <div className="divider opacity-60"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7 p-4 pt-3">
        <div className="flex gap-3">
          <div className='w-full'>
            <input className="input w-full"
              type="text" placeholder="First name"
              {...register('firstName')} />
            <p className='text-sm text-error absolute'>{errors.firstName?.message}</p>
          </div>
          <div className='w-full'>
            <input className="input w-full"
              type="text" placeholder="Last name"
              {...register('lastName')} />
            <p className='text-sm text-error absolute'>{errors.lastName?.message}</p>
          </div>
        </div >
        <div className='w-full'>

          <input className="input w-full"
            type="text" placeholder="E-mail or mobile number"
            {...register('identity')} />
          <p className='text-sm text-error absolute'>{errors.identity?.message}</p>
        </div>
        <div className='w-full'>
          <input className="input w-full"
            type="password" placeholder="Password"
            {...register('password')} />
          <p className='text-sm text-error absolute'>{errors.password?.message}</p>
        </div>
        <div className='w-full'>
          <input className="input w-full"
            type="password" placeholder="Confirm Password"
            {...register('confirmPassword')} />
          <p className='text-sm text-error absolute'>{errors.confirmPassword?.message}</p>
        </div>
          <button className='btn btn-secondary text-xl text-white'>Sign up</button>
      </form>
    </>
  )
}
export default Register