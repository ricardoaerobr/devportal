import { useEffect, useRef, useState } from 'react'
import { Flex, Text, Box } from '@vtex/brand-ui'
import Link from 'next/link'

import styles from './styles'
import type { SidebarSectionProps } from 'components/sidebar-section'
import type { DocDataElement, UpdatesDataElement } from 'utils/typings/types'
import { DocumentationTitle, UpdatesTitle } from 'utils/typings/unionTypes'
import {
  documentationData as docsIcons,
  updatesData as notesIcons,
} from 'utils/constants'

import SidebarSection from 'components/sidebar-section'
import Tooltip from 'components/tooltip'
import { iconTooltipStyle } from './functions'

interface SideBarSectionState {
  sectionSelected: DocumentationTitle | UpdatesTitle | ''
}

const Sidebar = ({ sectionSelected }: SideBarSectionState) => {
  const [activeSectionName, setActiveSectionName] = useState(sectionSelected)
  const [expandDelayStatus, setExpandDelayStatus] = useState(true)

  const sidebarDataMaster: SidebarSectionProps[] = [
    {
      documentation: 'API Guides',
      categories: [
        {
          name: 'Getting Started',
          slug: 'Getting-Started',
          origin: '',
          type: 'markdown',
          childrens: [
            {
              name: 'Introduction',
              slug: 'Introduction',
              origin: '',
              type: 'markdown',
              childrens: [
                {
                  name: 'Platform overview',
                  slug: 'Platform-overview',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'List of REST APIs',
                  slug: 'List-of-REST-APIs',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Authentication',
                  slug: 'Authentication',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Making your first request',
                  slug: 'Making-your-first-request',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
            {
              name: 'API Guides',
              slug: 'API-Guides',
              origin: '',
              type: 'markdown',
              childrens: [
                {
                  name: 'Item 1',
                  slug: 'Item-1',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Item 2',
                  slug: 'Item-2',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
            {
              name: 'Catalog',
              slug: 'Catalog',
              origin: '',
              type: 'markdown',
              childrens: [
                {
                  name: 'How to activate an SKU',
                  slug: 'How-to-activate-an-SKU',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'How to create a specification',
                  slug: 'How-to-create-a-specification',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Update SKU',
                  slug: 'Update-SKU',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
            {
              name: 'Checkout',
              slug: 'Checkout',
              origin: '',
              type: 'markdown',
              childrens: [
                {
                  name: 'Item 1',
                  slug: 'Item-1',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
            {
              name: 'Orders',
              slug: 'Orders',
              origin: '',
              type: 'markdown',
              childrens: [
                {
                  name: 'Item 1',
                  slug: 'Item-1',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Item 2',
                  slug: 'Item-2',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Item 3',
                  slug: 'Item-3',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
            {
              name: 'Promotions',
              slug: 'Promotions',
              origin: '',
              type: 'markdown',
              childrens: [
                {
                  name: 'Item 1',
                  slug: 'Item-1',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
                {
                  name: 'Item 2',
                  slug: 'Item-2',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
          ],
        },
        {
          name: 'Integration Guides',
          slug: 'Integration-Guides',
          origin: '',
          type: 'markdown',
          childrens: [
            {
              name: 'Back-office (ERP/PIM/WMS)',
              slug: 'Back-office-(ERP/PIM/WMS)',
              origin: '',
              type: '',
              childrens: [
                {
                  name: 'item 1',
                  slug: 'item-1',
                  origin: '',
                  type: 'markdown',
                  childrens: [],
                },
              ],
            },
            {
              name: 'External Marketplace',
              slug: 'External-Marketplace',
              origin: '',
              type: '',
              childrens: [
                {
                  name: 'Marketplace / Seller architecture',
                  slug: 'Marketplace-/-Seller architecture',
                  origin: '',
                  type: '',
                  childrens: [],
                },
                {
                  name: 'Store setup for VTEX Seller',
                  slug: 'Store-setup-for-VTEX-Seller',
                  origin: '',
                  type: '',
                  childrens: [],
                },
              ],
            },
            {
              name: 'External Seller',
              slug: 'External-Seller',
              origin: '',
              type: '',
              childrens: [
                {
                  name: 'Item 1',
                  slug: 'Item-1',
                  origin: '',
                  type: '',
                  childrens: [],
                },
              ],
            },
            {
              name: 'Gift Card',
              slug: 'Gift-Card',
              origin: '',
              type: '',
              childrens: [
                {
                  name: 'Item 1',
                  slug: 'Item-1',
                  origin: '',
                  type: '',
                  childrens: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      documentation: 'API Reference',
      categories: [
        {
          name: 'Catalog API',
          slug: 'Catalog-API',
          origin: '',
          type: 'openapi',
          childrens: [
            {
              name: 'SKU Service Value',
              slug: 'SKU-Service-Value',
              origin: '',
              type: '',
              childrens: [
                {
                  name: 'SKU Service Value',
                  slug: 'SKU-Service-Value-post',
                  origin: '',
                  type: 'openapi',
                  method: 'POST',
                  childrens: [],
                },
                {
                  name: 'SKU Service Value',
                  slug: 'SKU-Service-Value-put',
                  origin: '',
                  type: 'openapi',
                  method: 'PUT',
                  childrens: [],
                },
                {
                  name: 'SKU Service Value',
                  slug: 'SKU-Service-Value-delete',
                  origin: '',
                  type: 'openapi',
                  method: 'DELETE',
                  childrens: [],
                },
              ],
            },
            {
              name: 'teste',
              slug: 'teste',
              origin: '',
              type: '',
              childrens: [
                {
                  name: 'testezinho',
                  slug: 'testezinho',
                  origin: '',
                  type: 'openapi',
                  method: 'GET',
                  childrens: [],
                },
              ],
            },
          ],
        },
        {
          name: 'Checkout API',
          slug: 'Checkout-API',
          origin: '',
          type: 'openapi',
          childrens: [
            {
              name: 'Configuration',
              slug: 'Configuration',
              origin: '',
              type: '',
              childrens: [
                {
                  name: 'orderForm configuration',
                  slug: 'orderForm-configuration-get',
                  origin: '',
                  type: 'openapi',
                  method: 'GET',
                  childrens: [],
                },
                {
                  name: 'orderForm configuration',
                  slug: 'orderForm-configuration-put',
                  origin: '',
                  type: 'openapi',
                  method: 'PUT',
                  childrens: [],
                },
                {
                  name: 'window to change seller',
                  slug: 'window-to-change-seller-get',
                  origin: '',
                  type: 'openapi',
                  method: 'GET',
                  childrens: [],
                },
                {
                  name: 'window to change seller',
                  slug: 'window-to-change-seller-put',
                  origin: '',
                  type: 'openapi',
                  method: 'PUT',
                  childrens: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      documentation: 'VTEX IO',
      categories: [],
    },
    {
      documentation: 'FastStore',
      categories: [],
    },
    {
      documentation: 'WebOps',
      categories: [],
    },
    {
      documentation: 'Release Notes',
      categories: [],
    },
    {
      documentation: 'Documentation Updates',
      categories: [],
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setExpandDelayStatus(false), 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const SideBarIcon = (iconElement: DocDataElement | UpdatesDataElement) => {
    const [iconTooltip, setIconTooltip] = useState(false)
    const [tooltipLabel, setTooltipLabel] = useState(iconElement.title)
    const titleRef = useRef<HTMLElement>()

    useEffect(() => {
      const resizeObserver = new MutationObserver(function (entries) {
        const target = entries[0].target as HTMLElement
        if (target.offsetWidth < target.scrollWidth) setIconTooltip(true)
        else setIconTooltip(false)

        if (target.offsetWidth > 0)
          setTooltipLabel(target.innerText as DocumentationTitle | UpdatesTitle)
      })
      if (titleRef.current) {
        if (titleRef.current.offsetWidth < titleRef.current.scrollWidth)
          setIconTooltip(true)
        resizeObserver.observe(titleRef.current, {
          childList: true,
        })
      }
      return () => {
        resizeObserver.disconnect
      }
    }, [titleRef.current])

    return (
      <Box sx={styles.linkContainer}>
        <Tooltip
          sx={iconTooltipStyle(iconTooltip)}
          placement="right"
          label={tooltipLabel}
        >
          <Link href={iconElement.link}>
            <a
              onClick={() => {
                setActiveSectionName(iconElement.title)
              }}
            >
              <Flex
                sx={
                  activeSectionName === iconElement.title
                    ? styles.iconBoxActive
                    : styles.iconBox
                }
              >
                <iconElement.Icon
                  sx={
                    activeSectionName === iconElement.title
                      ? styles.iconActive
                      : styles.icon
                  }
                />
                <Text
                  className={expandDelayStatus ? 'iconDescriptionExpanded' : ''}
                  ref={titleRef}
                  sx={styles.iconTitle}
                >
                  {iconElement.title}
                </Text>
              </Flex>
            </a>
          </Link>
        </Tooltip>
      </Box>
    )
  }

  return (
    <Flex sx={styles.sidebar}>
      <Flex
        className={expandDelayStatus ? 'iconContainerExpanded' : ''}
        sx={styles.sidebarIcons}
      >
        <Flex sx={styles.sidebarIconsContainer}>
          {docsIcons.map((docsIconElement) => (
            <SideBarIcon
              {...docsIconElement}
              key={`sidebar-icon-${docsIconElement.title}`}
            />
          ))}
        </Flex>
        <Box sx={styles.sectionDivider}>
          <hr />
        </Box>
        <Flex sx={styles.sidebarIconsContainer}>
          {notesIcons.map((notesIconElement) => (
            <SideBarIcon
              {...notesIconElement}
              key={`sidebar-icon-${notesIconElement.title}`}
            />
          ))}
        </Flex>
      </Flex>
      {activeSectionName ? (
        <SidebarSection
          {...(sidebarDataMaster.find(
            (section) => section.documentation === activeSectionName
          ) as SidebarSectionProps)}
        />
      ) : null}
    </Flex>
  )
}

export default Sidebar
