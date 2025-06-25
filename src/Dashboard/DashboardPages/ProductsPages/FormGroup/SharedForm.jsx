import  React from "react"
import { createContext, useState, useContext } from "react"

// interface SharedFormData {
//   [key: string]: any
// }

// interface SharedFormContextType {
//   sharedData: SharedFormData
//   updateSharedData: (field: string, value: any) => void
// }

const SharedFormContext = createContext()

export const SharedFormProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState({})

  const updateSharedData = (field, value) => {
    setSharedData((prev) => ({ ...prev, [field]: value }))
  }

  return <SharedFormContext.Provider value={{ sharedData, updateSharedData }}>{children}</SharedFormContext.Provider>
}

export const useSharedForm = () => {
  const context = useContext(SharedFormContext)
  if (context === undefined) {
    throw new Error("useSharedForm must be used within a SharedFormProvider")
  }
  return context
}

