import Link from 'next/link'
import { useContext } from 'react'
import { Box, Text } from '@vtex/brand-ui'

import { APIGuideContext } from 'utils/contexts/api-guide'

import styles from './styles'

interface SubItem {
  title: string
  slug: string
}

export interface Item extends SubItem {
  children: SubItem[]
}

const TableOfContents = () => {
  const { headers, activeItem, setActiveItem } = useContext(APIGuideContext)

  const Item = ({
    title,
    slug,
    level,
    active,
  }: {
    title: string
    slug: string
    level: number
    active: boolean
  }) => {
    return (
      <Link href={`#${slug}`}>
        <a
          onClick={() => {
            setActiveItem(({ item }) => ({
              item: level === 1 ? slug : item,
              subItem: level === 1 ? '' : slug,
            }))
          }}
        >
          <Text sx={styles.item(level, active)}>{title}</Text>
        </a>
      </Link>
    )
  }

  return (
    <Box sx={styles.itemsContainer}>
      {headers.map((item) => (
        <Box key={item.slug}>
          <Item
            title={item.title}
            slug={item.slug}
            level={1}
            active={item.slug === activeItem.item}
          />
          {item.slug === activeItem.item && (
            <Box sx={styles.subItemsContainer}>
              {item.children.map((subItem) => (
                <Item
                  key={subItem.slug}
                  title={subItem.title}
                  slug={subItem.slug}
                  level={2}
                  active={subItem.slug === activeItem.subItem}
                />
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default TableOfContents
