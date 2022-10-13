import React, { FC } from 'react'
import CardItem from '../card/CardItem'
import Link from 'next/link'

interface IProps {
  title: string
  subtitle: string
  image: string
  link: string
  handleActionClick: () => void
  isImageRounded?: boolean
}

const DynamicRowCollectionItem: FC<IProps> = ({
  link,
  image,
  subtitle,
  title,
  handleActionClick,
  isImageRounded
}) => {
  return (
    <Link passHref href={link}>
      <div>
        <CardItem
          title={title}
          subtitle={subtitle}
          image={image}
          isRounded={isImageRounded}
          handleActionClick={handleActionClick}
        />
      </div>
    </Link>
  )
}

export default DynamicRowCollectionItem
