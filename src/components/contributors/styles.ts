import type { SxStyleProp } from '@vtex/brand-ui'

const title: SxStyleProp = {
  fontSize: ['12px', '12px', '12px', '12px', '12px', '16px'],
  fontWeight: '400',
  lineHeight: ['16px', '16px', '16px', '16px', '16px', '18px'],
  color: '#4A4A4A',
}

const count: SxStyleProp = {
  px: '8px',
  ml: '8px',
  width: '30px',
  height: '16px',
  borderRadius: '24px',
  backgroundColor: 'muted.4',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '16px',
  textAlign: 'center',
  color: '#4A4A4A',
}

const photosContainer: SxStyleProp = {
  mt: '16px',
  gap: '8px',
  gridTemplateColumns: [
    '1fr 1fr 1fr 1fr',
    '1fr 1fr 1fr 1fr',
    '1fr 1fr 1fr 1fr',
    '1fr 1fr 1fr 1fr',
    '1fr 1fr 1fr 1fr',
    '1fr 1fr 1fr 1fr 1fr',
  ],
}

const photo: SxStyleProp = {
  width: '32px',
  height: '32px',
  borderRadius: '100%',
  backgroundColor: 'gainsboro',
}

const collapseButton: SxStyleProp = {
  mt: '8px',
  height: '24px',
  ...title,
  color: 'muted.0',
  cursor: 'pointer',
  alignItems: 'center',

  ':active': {
    color: '#0C1522',
  },

  ':hover': {
    color: '#000711',
  },
}

export default {
  title,
  count,
  photosContainer,
  photo,
  collapseButton,
}
