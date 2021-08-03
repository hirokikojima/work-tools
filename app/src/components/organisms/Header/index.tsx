import React, { FC } from 'react'
import NavigationList from '../../molecules/Navigation/NavigationList'
import NavigationItem from '../../molecules/Navigation/NavigationItem'
import { withStyle } from '../../../utils/decorators'

const Header: FC = () => {
  const styles = {
    padding: '8px'
  }
  
  return (
    withStyle(styles)(
      <NavigationList modifier={'header'}>
        <NavigationItem>Menu1</NavigationItem>
        <NavigationItem>Menu2</NavigationItem>
        <NavigationItem>Menu3</NavigationItem>
      </NavigationList>
    )
  )
}

export default Header