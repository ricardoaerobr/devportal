import { Box, Flex, IconProps, Text } from '@vtex/brand-ui'

import styles from './styles'

interface SearchSectionProps {
  iconElement: { Icon: (props: IconProps) => JSX.Element; title: string }
  index: number
}

const SearchSection = ({ iconElement, index }: SearchSectionProps) => {
  return (
    <Flex
      sx={styles.sectionContainer}
      key={`section-${iconElement.title}${index}`}
    >
      <Flex sx={styles.sectionIconTitleBox}>
        <iconElement.Icon sx={styles.sectionIcon} />
        <Text sx={styles.sectionTitle}>{iconElement.title}</Text>
      </Flex>
      <Box sx={styles.sectionCount}>25</Box>
    </Flex>
  )
}

export default SearchSection
