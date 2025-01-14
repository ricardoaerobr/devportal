import { SxStyleProp } from '@vtex/brand-ui'

const container: SxStyleProp = {
  width: '100%',
  paddingBottom: '16px',
  borderBottom: ['none', '1px solid #E7E9EE'],
  flexDirection: ['column', 'row'],
  alignItems: 'center',
  alignContent: ['initial', 'space-between'],
  marginBlock: '32px',
}

const question: SxStyleProp = {
  fontSize: ['16px', '16px', '16px', '16px', '16px', '16px', '22px'],
  lineHeight: '22px',
}

const likeContainer: SxStyleProp = {
  paddingBottom: ['16px', '0'],
  borderBottom: ['1px solid #E7E9EE', 'none'],
  mt: ['8px', '0'],
  mb: ['16px', '0'],
  width: ['100%', 'auto'],
  justifyContent: ['center', 'initial'],
}

const icon: SxStyleProp = {
  width: ['24px', '24px', '24px', '24px', '24px', '24px', '32px'],
  height: ['24px', '24px', '24px', '24px', '24px', '24px', '32px'],
}

const likeIcon: SxStyleProp = {
  ...icon,
  mr: '2px',
}

const dislikeIcon: SxStyleProp = {
  ...icon,
  mr: '2px',
  transform: 'rotateX(180deg) rotateY(180deg)',
}

const button: SxStyleProp = {
  ':hover': {
    cursor: 'pointer',
    color: '#000711',
    'svg > path': {
      stroke: '#000711',
    },
  },
}

const buttonActive: SxStyleProp = {
  cursor: 'pointer',
  color: '#000711',
  'svg > path': {
    stroke: '#000711',
  },
}

const selectedButton: SxStyleProp = {
  color: 'muted.1',
}

const box: SxStyleProp = {
  alignItems: 'center',
  color: 'muted.0',
  fontSize: ['16px', '16px', '16px', '16px', '16px', '16px', '22px'],
  lineHeight: '22px',
}

const editContainer: SxStyleProp = {
  ...box,
  ...button,
  ml: ['0', 'auto'],
  display: 'flex',
}

const editIcon: SxStyleProp = { ...icon, mr: '4px' }

export default {
  container,
  question,
  likeContainer,
  likeIcon,
  dislikeIcon,
  editContainer,
  editIcon,
  box,
  button,
  buttonActive,
  selectedButton,
}
