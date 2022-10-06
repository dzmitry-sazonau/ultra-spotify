import { css } from 'styled-components'

export const textEllipsis = () => css`
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: unset;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const dotBeforeElement = () => css`
  ::before {
    content: "•";
    margin: 0 4px;
  }
`