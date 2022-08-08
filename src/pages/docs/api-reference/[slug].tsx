import Sidebar from 'components/sidebar'
import { Flex } from '@vtex/brand-ui'

import Script from 'next/script'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import SidebarContextProvider from 'utils/contexts/sidebar'

import styles from 'styles/documentation-page'
interface Props {
  slug: string
  matchPath: string
}
//<rapi-doc-mini spec-url={`/docs/api-reference/${slug}.json`} />
const APIPage: NextPage<Props> = ({ slug, matchPath }) => {
  return (
    <>
      <Script
        type="text/javascript"
        src="/rapidoc/rapidoc-min.js"
        strategy="beforeInteractive"
      />

      <SidebarContextProvider>
        <Flex sx={styles.container}>
          <Sidebar sectionSelected="API Reference" />
          <rapi-doc-mini
            spec-url={`/docs/api-reference/${slug}.json`}
            match-paths={matchPath}
            paths-expanded={true}
            layout="column"
            fill-request-fields-with-example={true}
            theme="light"
            bg-color="#FFFFFF"
            primary-color="#142032"
            regular-font="VTEX Trust Variable"
            mono-font="VTEX Trust Variable"
            load-fonts={false}
            schema-style="table"
            schema-description-expanded={true}
            id="the-doc"
          />
        </Flex>
      </SidebarContextProvider>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [
    {
      params: {
        slug: 'catalog',
      },
    },
    {
      params: {
        slug: 'checkout',
      },
    },
  ]

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const matchPath =
    params?.slug === 'catalog'
      ? 'get /api/catalog_system/pvt/products/GetProductAndSkuIds'
      : 'post /api/checkout/pub/orderForms/simulation'

  return {
    props: {
      slug: params?.slug,
      matchPath: matchPath,
    },
  }
}

export default APIPage
