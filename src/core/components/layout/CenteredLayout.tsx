import type {ReactNode, FC} from 'react'
import styled from 'styled-components'

const StyledCenteredLayout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
`

const CenteredLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <StyledCenteredLayout>
    {children}
  </StyledCenteredLayout>
)

export default CenteredLayout