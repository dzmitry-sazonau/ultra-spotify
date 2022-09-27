import React, { FC } from 'react'
import CardItem from '../../../core/ui/card/CardItem'
import Link from 'next/link'
import { IDynamicRowCollectionItemProps } from '../interface'

const DynamicRowCollectionItem: FC<IDynamicRowCollectionItemProps> = ({
  link,
  image,
  subtitle,
  title,
  handleActionClick,
}) => {
  return (
    <Link passHref href={link}>
      <div>
        <CardItem
          title={title}
          subtitle={subtitle}
          image={image}
          handleActionClick={handleActionClick}
        />
      </div>
    </Link>
  )
}

export default DynamicRowCollectionItem
