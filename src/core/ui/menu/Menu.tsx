import React, { FC, useState } from 'react'
import { IMenuProps } from './interface'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const StyledMenu = styled.div`
  display: flex;
  gap: 8px;
`

const Menu: FC<IMenuProps> = ({ items, defaultValue }) => {
  const [active, setActive] = useState(defaultValue || items[0].id)

  return (
    <StyledMenu>
      {items.map((item) => (
        <MenuItem
          key={item.id}
          isActive={active === item.id}
          setActive={setActive}
          {...item}
        />
      ))}
    </StyledMenu>
  )
}

export default Menu
