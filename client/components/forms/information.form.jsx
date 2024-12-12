import { useForm, Controller, get } from 'react-hook-form'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'


//LEMBRAR DE TIRAR ESSE REGISTER
const InformationForm = () => {
   const form = useForm({
      defaultValues: {
        firstName: '',
        lastName: '',
        bio: ''
      }
    })
    const {handleSubmit, control, getValues, setValue, register, formState} = form
    const {errors} = formState
    const onSubmit = (data) => {
      console.log("dados: ", data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
      
                <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <div>
                    <Label>First Name</Label>
                    <Input placeholder='Oman' className='bg-secondary' {...register("firstName", {
                      minLength: {
                        value: 2,
                        message: "String must contain at least 2 character(s)"
                      },
                      required: {
                        value: true,
                        message: "String must contain at least 2 character(s)"
                      }
                    })}  />
                  
                    {errors?.firstName && <p>{errors?.firstName?.message}</p>}
                  </div>
                )} />
                <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <div>
      
                    <Label>Last Name</Label>
                    <Input placeholder='OAli' className='bg-secondary' {...register("lastName")}  />
                  </div>
                )} />

<Controller
                name="bio"
                control={control}
                render={({ field }) => (
                  <div>
                    <Label>Bio</Label>
                    <Textarea placeholder='Enter anyhting about yourself' className='bg-secondary' {...register("bio")} />
                  </div>
                )} />

                <Button type='submit' className='w-full'>Submit</Button>

    </form>
  )
}

export default InformationForm