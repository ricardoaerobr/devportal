import type { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  right: '20px',
  position: 'fixed',
  alignItems: 'flex-end',
  display: ['flex', 'flex', 'flex', 'flex', 'none'],
}

const contentContainer: SxStyleProp = {
  mr: '8px',
  width: '360px',
  padding: '16px',
  borderRadius: '8px',
  backgroundColor: 'white',
  border: '1px solid #CCCED8',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
}

const onThisPageTitle: SxStyleProp = {
  mb: '16px',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px',
  color: '#4A4A4A',
}

const buttonContainer: SxStyleProp = {
  cursor: 'pointer',
  alignItems: 'center',
  backgroundColor: 'muted.4',
  border: '1px solid #CCCED8',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
}

const iconContainer: SxStyleProp = {
  width: '32px',
  height: '32px',
  padding: '6px',
  boxSizing: 'initial',
  borderRadius: '8px',
  backgroundColor: 'white',
  borderLeft: '1px solid #CCCED8',
}

const title: SxStyleProp = {
  padding: '8px',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px',
  color: 'black',
}

export default {
  container,
  contentContainer,
  onThisPageTitle,
  buttonContainer,
  iconContainer,
  title,
}
