

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";
import { useForm } from "react-hook-form";

const Signin = () => {
    const {setEmail, setStep} = useAuth()
    const form = useForm({
      defaultValues: {
        email: ""
      }
    })

    const {register, handleSubmit, formState} = form
    const {errors} = formState

    function onSubmit(values){
      setStep('verify')
      setEmail(values.email)
    }


  return (
    <div className="w-full">
      <p className='text-center text-muted-foreground text-sm'>Telegram is a messagin app with a focus an speed and security, it's super-fast, simple and free</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <label>Email</label>
        <Input  {...register("email", {
          pattern: {
            value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email format"
          },
        })} placeholder='info@gmail.ac' className="h-10 bg-secondary" />

       
       
       <Button type="submit" className="w-full" size={'lg'}>Submit</Button>


      </form>
      {errors?.email && onSubmit && <p className='startup-form_error'>{errors?.email?.message}</p>}
    </div>
  )
}

export default Signin