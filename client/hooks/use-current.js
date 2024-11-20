

import { useState } from "react"

const useCurrentContact = () => {
  const [currentContact, setCurrentContact] = useState(null)
  return {currentContact, setCurrentContact}
}

export default useCurrentContact