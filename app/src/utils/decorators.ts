import { cloneElement, ReactElement } from "react";

type Style = {
  [key: string]: string
}

export const withStyle = (style: Style) => (
  (component: ReactElement) => cloneElement(component, { style })
)