import React, { useState } from 'react'
import { useForm, Controller, get } from 'react-hook-form'
const EmailForm = () => {
  const [verify, setVerify] = useState(false)
  const form = useForm({
    defaultValues: {
      email: '',
      oldEmail: ''
    }
  })
  const {handleSubmit, control, getValues, setValue, register, formState} = form
  const {errors} = formState
  return (
    <div>EmailForm</div>
  )
}

export default EmailForm