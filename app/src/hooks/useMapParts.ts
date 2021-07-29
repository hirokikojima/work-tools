/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactElement, ReactNode } from "react"

const useMapParts = (partTypes: FC[], children: ReactNode) => {
  const parts: ReactElement[] = []

  React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    const index = partTypes.findIndex(partType => partType === child.type)
    if (index !== -1) parts[index] = child.props.children
  })

  return parts
}

export default useMapParts