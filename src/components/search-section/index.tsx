import { Box, Flex, Text } from '@vtex/brand-ui'
import type { DocDataElement, UpdatesDataElement } from 'utils/typings/types'

import styles from './styles'

interface SearchSectionProps {
  dataElement: DocDataElement | UpdatesDataElement | null
  index?: number
}

const SearchSection = ({ dataElement, index }: SearchSectionProps) => {
  return !dataElement ? (
    <Flex sx={styles.sectionContainer}>
      <Text className="search-section-title" sx={styles.allResultsText}>
        All results
      </Text>
      <Box className="search-section-count" sx={styles.sectionCount}>
        25
      </Box>
    </Flex>
  ) : (
    <Flex
      sx={styles.sectionContainer}
      key={`search-section-${dataElement.title}${index}`}
    >
      <Flex sx={styles.sectionIconTitleBox}>
        <dataElement.Icon sx={styles.sectionIcon} />
        <Text className="search-section-title" sx={styles.sectionTitle}>
          {dataElement.title}
        </Text>
      </Flex>
      <Box className="search-section-count" sx={styles.sectionCount}>
        100
      </Box>
    </Flex>
  )
}

export default SearchSection
