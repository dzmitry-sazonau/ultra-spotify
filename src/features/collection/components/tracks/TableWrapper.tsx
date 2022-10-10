import React, { FC } from 'react'
import styled from 'styled-components'
import { StyledTableBodyRow } from '../../../../core/ui/table/TableBodyRow'
import { StyledHeartWrapper } from './TrackControl'
import { StyledArtistName } from './TrackInfo'
import { IClassName, IReactChildren } from '../../../../core/interface'
import Link from '../../../../core/ui/link/Link'
import { textEllipsis } from '../../../../core/mixins'

export const StyledLink = styled(Link)`
  && {
    font-size: 14px;
    font-weight: 500;
    ${textEllipsis()}
    color: #a7a7a7;
  }
`

const StyledTableWrapper = styled.div`
  ${StyledTableBodyRow} {
    :hover {
      ${StyledHeartWrapper} {
        opacity: 1;
      }
      ${StyledArtistName}, ${StyledLink} {
        color: #ffffff;
      }
    }
  }
`

const TableWrapper: FC<IReactChildren & IClassName> = ({
  children,
  className,
}) => <StyledTableWrapper className={className}>{children}</StyledTableWrapper>

export default TableWrapper
