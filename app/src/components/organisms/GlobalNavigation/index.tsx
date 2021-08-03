import React, { FC } from 'react'
import NavigationList from '../../molecules/Navigation/NavigationList'
import NavigationItem from '../../molecules/Navigation/NavigationItem'

const GlobalNavigation: FC = () => {
  return (
    <NavigationList modifier={'sidebar'}>
      <NavigationItem>Menu1</NavigationItem>
      <NavigationItem>Menu2</NavigationItem>
      <NavigationItem>Menu3</NavigationItem>
    </NavigationList>
  )
}

export default GlobalNavigation