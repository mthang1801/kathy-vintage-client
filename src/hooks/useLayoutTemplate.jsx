import React, { useContext } from "react"
import { LayoutTemplateContext } from "../templates/layout.template"
export const useLayoutTemplateStates = () => {
  const { states } = useContext(LayoutTemplateContext)
  return states
}

export const useLayoutTempateActions = () => {
  const { actions } = useContext(LayoutTemplateContext)
  return actions
}
