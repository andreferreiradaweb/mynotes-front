import { Button } from './styled'

export default function ButtonComponent ({children, ...rest}) {
  return (
    <Button {...rest}>{children}</Button>
  )
}
