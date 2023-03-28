import { View } from '@Views/index'
import { createContext, useContext } from 'react'

type setViewType = React.Dispatch<React.SetStateAction<View>>

interface ViewContext {
  view: View
  setView: setViewType
}

export const ViewContext = createContext<ViewContext | null>(null)

/**
 * Context for retrieving and setting app view (Home, Shop, etc...)
 * @returns {{view: View, setView: setViewType}} Returns the current view and a setView Hook
 */
const useNavigation = () => {
  const viewContext = useContext(ViewContext)

  if (!viewContext) {
    throw new Error('useNavigation has to be used within <ViewContext.Provider')
  }

  return viewContext
}

export default useNavigation
