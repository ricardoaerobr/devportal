import { Flex } from '@vtex/brand-ui'
import styles from 'styles/search-page'
import SearchSections from 'components/search-sections'
import Sidebar from 'components/sidebar'
import SearchContextProvider from 'utils/contexts/searchContext'
import SearchResults from 'components/search-results'

const SearchPage = () => {
  return (
    <SearchContextProvider>
      <Flex sx={styles.body}>
        <Sidebar sectionSelected={''} />
        <SearchSections />
        <SearchResults />
      </Flex>
    </SearchContextProvider>
  )
}

export default SearchPage
