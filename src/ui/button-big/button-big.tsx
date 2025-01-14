import { FC } from 'react'

import { Button } from './button-big.styled'
import { ButtonBigProps } from './types'

export const ButtonBig: FC<ButtonBigProps> = ({ children, href }) => {
  return (
    <Button target="_blank" href={href}>
      {children}
    </Button>
  )
}

export default ButtonBig
