import React, { FC, ReactNode } from 'react'

interface IInnerLayoutProps {
  children: ReactNode
}

const InnerLayout: FC<IInnerLayoutProps> = ({ children }) => (
  <div>
    InnerLayout
    {children}
  </div>
)

export default InnerLayout