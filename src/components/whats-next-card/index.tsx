import Link from 'next/link'
import { Box, Flex, IconCaret, Text } from '@vtex/brand-ui'

import styles from './styles'

interface Props {
  title: string
  description: string
  link: {
    title: string
    to: string
  }
}

const WhatsNextCard = ({ title, description, link }: Props) => {
  return (
    <Link href={link.to}>
      <a>
        <Box sx={styles.container}>
          <Text sx={styles.title}>{title}</Text>
          <Text sx={styles.description}>{description}</Text>
          <Flex sx={styles.linkContainer}>
            <Text sx={styles.link}>{link.title}</Text>
            <IconCaret direction="right" size={16} />
          </Flex>
        </Box>
      </a>
    </Link>
  )
}

export default WhatsNextCard
