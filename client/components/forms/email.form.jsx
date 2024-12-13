import React, { useState } from 'react'
import { useForm, Controller, get } from 'react-hook-form'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { FormControl } from '../ui/form'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '../ui/input-otp'


//PAREI NO CONTROLOTP
const EmailForm = () => {
  const [verify, setVerify] = useState(false)
  const form = useForm({
    defaultValues: {
      email: '',
      oldEmail: 'info@mail.com'
    }
  })

  const otpForm = useForm({
    defaultValues: {
      otp: '',
      email: ''
    }
  })
  const {handleSubmit, control, getValues, setValue, register, formState} = form
  const {errors} = formState
  const {control: controlOtp} = otpForm
  function onEmailSubmit(values){
    console.log(values)
    otpForm.setValue('email', values.email)
    setVerify(true)
  }

  function onVerifySubmit(values){
    console.log(values)
  }

  return !verify ? (
     <form onSubmit={handleSubmit(onEmailSubmit)} className='space-y-2'>
          
                    <Controller
                    name="oldEmail"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Label>Current name</Label>
                        <Input  className='h-10 bg-secondary text-white' {...register("oldEmail", {
                          minLength: {
                            value: 2,
                            message: "String must contain at least 2 character(s)"
                          },
                          required: {
                            value: true,
                            message: "String must contain at least 2 character(s)"
                          },
                          pattern: {
                            value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid email format"
                          },
                        })} 
                          disabled
                        />     
                      </div>

                      
                    )} />

                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Label>Current name</Label>
                        <Input  className='h-10 bg-secondary' {...register("email", {
                          minLength: {
                            value: 2,
                            message: "String must contain at least 2 character(s)"
                          },
                          required: {
                            value: true,
                            message: "String must contain at least 2 character(s)"
                          },
                          pattern: {
                            value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid email format"
                          },
                        })}  />     
                                {errors?.email && <p>{errors?.email?.message}</p>}
                      </div>

                      
                    )} />

                    <Button type='submit' className='w-full'>
                      Verify email
                    </Button>
                </form>
  ) : (
    <form onSubmit={otpForm.handleSubmit(onVerifySubmit)} className='space-y-2'>
          
    <Controller
    name="otp"
    control={control}
    render={({ field }) => (
      <div>
        <Label>New Email</Label>
        <Input  className='h-10 bg-secondary text-white' 
          value={form.watch('email')}
          disabled
        />  

        <Label>One-Time Password</Label>
        
          <InputOTP maxLength={6} className='w-full'>
            <InputOTPGroup className='w-full'>
                <InputOTPSlot index={0} className='w-full dark:bg-primary-foreground bg-secondary' />
                <InputOTPSlot index={1} className='w-full dark:bg-primary-foreground bg-secondary' />
                <InputOTPSlot index={2} className='w-full dark:bg-primary-foreground bg-secondary' />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup className='w-full'>
                <InputOTPSlot index={3} className='w-full dark:bg-primary-foreground bg-secondary' />
                <InputOTPSlot index={4} className='w-full dark:bg-primary-foreground bg-secondary' />
                <InputOTPSlot index={5} className='w-full dark:bg-primary-foreground bg-secondary' />
            </InputOTPGroup>
          </InputOTP>
           

          <Button type='submit' className='w-full'>
                  Submit
          </Button>
      </div>

      
    )} />
    </form>
  )
}

export default EmailForm