import {
  Header as HeaderBrand,
  Link as VtexLink,
  Flex,
  Text,
  Box,
} from '@vtex/brand-ui'
import { useEffect, useRef, useState } from 'react'

import VTEXDevportalIcon from 'components/icons/vtex-devportal-icon'
import SearchIcon from 'components/icons/search-icon'
import { getFeedbackURL } from 'utils/get-url'
import { getMessages } from 'utils/get-messages'

import styles from './styles'
import Link from 'next/link'

const Header = () => {
  const [searchValue, setSearchValue] = useState('')
  const lastScroll = useRef(0)

  const [headerElement, setHeaderElement] = useState<HTMLElement | null>()

  const messages = getMessages()

  useEffect(() => {
    return setHeaderElement(document.getElementById('header'))
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (headerElement) {
        const headerHeight = headerElement.children[0].clientHeight
        if (
          window.scrollY > headerHeight &&
          window.scrollY > lastScroll.current
        ) {
          headerElement.style.top = `-${headerHeight}px`
        } else {
          headerElement.style.top = '0'
        }
        lastScroll.current = window.scrollY
      }
    }

    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [headerElement])

  return (
    <Box id="header" sx={styles.headerContainer}>
      <HeaderBrand sx={styles.headerBrand}>
        <HeaderBrand.Brand>
          <Link href="/">
            <a>
              <VTEXDevportalIcon sx={styles.logoSize} />
            </a>
          </Link>
        </HeaderBrand.Brand>

        <Box sx={styles.searchContainer}>
          <Flex sx={styles.searchBox}>
            <SearchIcon sx={styles.searchIcon} />
            <input
              style={styles.searchInput}
              className="searchComponent"
              type="text"
              placeholder="Search in Developers"
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
            />
          </Flex>
        </Box>

        <HeaderBrand.RightLinks sx={styles.rightLinks}>
          <Text sx={styles.docsDropDown}>
            {messages['landing_page_header_docs.message']}
          </Text>
          <VtexLink
            sx={styles.rightLinksItem}
            href={getFeedbackURL()}
            target="_blank"
          >
            <Text>{messages['landing_page_header_feedback.message']}</Text>
          </VtexLink>
        </HeaderBrand.RightLinks>
      </HeaderBrand>
    </Box>
  )
}

export default Header
