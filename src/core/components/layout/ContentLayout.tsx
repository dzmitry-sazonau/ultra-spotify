import React, { FC, ReactNode } from 'react'

interface IContentLayoutProps {
  children: ReactNode
}

const ContentLayout: FC<IContentLayoutProps> = ({ children }) => (
  <div>
    ContentLayout
    {children}
  </div>
)

export default ContentLayout