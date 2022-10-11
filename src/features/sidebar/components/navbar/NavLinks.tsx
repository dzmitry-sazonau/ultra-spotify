import React, { ReactNode } from 'react'
import styled from 'styled-components'
import {
  HomeFilled,
  HomeOutlined,
  RocketFilled,
  RocketOutlined,
  SecurityScanFilled,
  SecurityScanOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ILink {
  href: string
  title: string
  activeIcon: ReactNode
  inactiveIcon: ReactNode
  childHref?: string
}

const listLinks: ILink[] = [
  {
    href: '/',
    title: 'Home',
    activeIcon: <HomeFilled />,
    inactiveIcon: <HomeOutlined />,
  },
  {
    href: '/search',
    title: 'Search',
    activeIcon: <SecurityScanFilled />,
    inactiveIcon: <SecurityScanOutlined />,
  },
  {
    href: '/collection',
    childHref: '/playlists',
    title: 'Your Library',
    activeIcon: <RocketFilled />,
    inactiveIcon: <RocketOutlined />,
  },
]

const StyledNavLinks = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`

const StyledTextWrapper = styled.span<{ active: boolean }>`
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  & {
    color: ${(props) => (props.active ? '#fff' : '#b3b3b3')};
  }

  :hover {
    color: #fff;
  }
`

const StyledWrapperIcon = styled.div`
  & > span > svg {
    height: 24px;
    width: 24px;
    color: #b3b3b3;

    :hover {
      color: #fff;
    }
  }
`

const StyledWrapperLink = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 40px;
  cursor: pointer;
`

const NavLinks = () => {
  const { asPath } = useRouter()

  return (
    <StyledNavLinks>
      {listLinks.map(({ href, title, activeIcon, inactiveIcon, childHref = '' }) => (
        <Link key={href} href={href + childHref}>
          <StyledWrapperLink>
            <StyledWrapperIcon>
              {href === asPath ? activeIcon : inactiveIcon}
            </StyledWrapperIcon>
            <StyledTextWrapper active={href === asPath}>
              {title}
            </StyledTextWrapper>
          </StyledWrapperLink>
        </Link>
      ))}
    </StyledNavLinks>
  )
}

export default NavLinks
