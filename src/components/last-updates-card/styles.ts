import { SxStyleProp } from '@vtex/brand-ui'

const cardContainer: SxStyleProp = {
  mt: '24px',
  px: '24px',
  py: '64px',
  width: '100%',
  maxWidth: '1084px',
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '1px solid #E7E9EE',
  transition: 'all 0.3s ease-out',

  '.updateTitle, .updateDescription': {
    transition: 'all 0.3s ease-out',
  },

  ':active, :hover': {
    borderColor: '#CCCED8',
    transition: 'all 0.3s ease-out',

    '.updateTitle, .updateDescription': {
      transition: 'all 0.3s ease-out',
    },

    '.updateDescription': {
      color: 'muted.0',
    },
  },

  ':active': {
    '.updateTitle': {
      color: '#0C1522',
    },
  },

  ':hover': {
    '.updateTitle': {
      color: '#000711',
    },
  },
}

const updateContainer: SxStyleProp = {
  mr: '16px',
  padding: '8px',
  alignItems: 'flex-start',
}

const updateIcon: SxStyleProp = {
  my: '4px',
  mr: '8px',
  width: '24px',
  height: 'auto',
}

const updateTitle: SxStyleProp = {
  fontSize: '22px',
  fontWeight: '400',
  lineHeight: '32px',
  color: 'muted.0',
}

const updateDescription: SxStyleProp = {
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
  color: 'muted.1',
}

const actionContainer: SxStyleProp = {
  alignItems: 'flex-start',
}

const actionTypeContainer: SxStyleProp = {
  alignItems: 'center',
}

const actionIcon: SxStyleProp = {
  width: '16px',
  height: '16px',
  minWidth: 'initial',
  minHeight: 'initial',
}

const actionType: SxStyleProp = {
  ml: '8px',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '18px',
  color: '#4A4A4A',
}

const actionDescriptionContainer: SxStyleProp = {
  mt: '4px',
  ml: '8px',
  pl: '16px',
  borderLeft: '1px solid #CCCED8',
}

const actionDescription: SxStyleProp = {
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '24px',
  color: 'muted.0',
}

const actionTime: SxStyleProp = {
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '22px',
  color: 'muted.1',
}

export default {
  actionContainer,
  actionDescription,
  actionDescriptionContainer,
  actionIcon,
  actionTime,
  actionType,
  actionTypeContainer,
  cardContainer,
  updateContainer,
  updateDescription,
  updateIcon,
  updateTitle,
}