import { useState } from "react"
import { create } from "zustand"

export const useCurrentContact = create((set) => ({
  currentContact: null,
  setCurrentContact: contact => set({currentContact: contact})
}))