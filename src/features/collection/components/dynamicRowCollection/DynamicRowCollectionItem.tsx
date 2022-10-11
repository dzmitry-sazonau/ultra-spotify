import React, { FC } from 'react'
import CardItem from '../../../../core/ui/card/CardItem'
import Link from 'next/link'
import { IDynamicCollectionItemProps } from '../../interface'

const DynamicRowCollectionItem: FC<IDynamicCollectionItemProps> = ({
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
