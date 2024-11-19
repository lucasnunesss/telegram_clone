import { create } from 'zustand'

export const useAuth = create((set) => ({
  step: 'login',
  setStep: step => set({step}),
  email: '',
  setEmail: email => set({email})
}))

