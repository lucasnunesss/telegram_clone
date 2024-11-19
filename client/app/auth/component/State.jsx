'use client'

import Signin from "./Signin"
import Verify from "./Verify"
import { useAuth } from '@/hooks/use-auth'
const State = () => {
  const {step} = useAuth()
  return (
    <>
      {step === 'login' && <Signin />}
      {step === 'verify' && <Verify />} 
    </>
  )
}

export default State