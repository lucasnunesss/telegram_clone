import React from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useAuth } from "@/hooks/use-auth";
const Verify = () => {
  const {email} = useAuth()
  const { register, control, handleSubmit, formState: { errors, isSubmitted } } = useForm({
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = (data) => {
    console.log(data); // Manipule os dados enviados pelo formulário
  };

  return (
    <div className="w-full">
      <p className="text-center text-muted-foreground text-sm">
        We have sent you an email with a verification code to your email address. Please enter the code below.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">
      <Label>Email</Label>
        <Input  {...register("email", {
          required: {
            value: true,
            message: "Email is required"
          },
          pattern: {
            value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email format"
          },
        })} placeholder='info@gmail.ac' disabled className="h-10 bg-secondary" />
      { isSubmitted && errors?.email && <p className='startup-form_error'>{errors?.email?.message}</p>}
        <Label>One-Time Password</Label>
        <Controller
          name="otp"
          control={control}
          defaultValue=""
          rules={{
            required: "The OTP is required",
            minLength: {
              value: 6,
              message: "The OTP must be 6 characters long",
            },
            
          }}
          render={({ field }) => (
            <InputOTP maxLength={6} className="w-full" pattern={REGEXP_ONLY_DIGITS} {...field}>
              <InputOTPGroup className="w-full">
                <InputOTPSlot index={0} className="w-full  dark:bg-primary-foreground bg-secondary" />
                <InputOTPSlot index={1} className="w-full  dark:bg-primary-foreground bg-secondary" />
                <InputOTPSlot index={2} className="w-full  dark:bg-primary-foreground bg-secondary" />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup className="w-full">
                <InputOTPSlot index={3} className="w-full  dark:bg-primary-foreground bg-secondary" />
                <InputOTPSlot index={4} className="w-full  dark:bg-primary-foreground bg-secondary" />
                <InputOTPSlot index={5} className="w-full  dark:bg-primary-foreground bg-secondary" />
              </InputOTPGroup>
            </InputOTP>
          )}
        />
  
       
        <Button type="submit" className="w-full" size={'lg'}>Submit</Button>

        {isSubmitted && errors?.otp &&  <p className='startup-form_error'>{errors?.otp?.message}</p>}
      </form>
    </div>
  );
};

export default Verify;
