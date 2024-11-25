import { FaTelegram } from "react-icons/fa"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";
import { useForm } from "react-hook-form";

const AddContact = ({contactForm, onCreateContact}) => {
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
    <div className="h-screen w-full flex z-40 relative">
      <div className="flex justify-center items-center z-50 w-full">
        <div className="flex flex-col items-center gap-4">
            <FaTelegram size={120} className="dark:text-blue-400 text-blue-500" />
            <h1 className="text-3xl font-spaceGrotesk font-bold">Add contacts to start chatting</h1>
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
      </div>
    </div>
  )
}

export default AddContact