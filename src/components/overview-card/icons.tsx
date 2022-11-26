import type { IconProps } from '@vtex/brand-ui'
import { Icon } from '@vtex/brand-ui'

const StorageUnit = (props: IconProps) => (
  <Icon
    {...props}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    size={35}
  >
    <g
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="2"
      fill="#f71963"
      stroke="#f71963"
    >
      <rect
        x="15"
        y="15"
        width="18"
        height="15"
        fill="none"
        stroke="#142032"
        strokeMiterlimit="10"
      />
      <polyline
        points="2 12 24 2 46 12"
        fill="none"
        strokeMiterlimit="10"
        strokeLinecap="butt"
      />
      <line
        x1="24"
        y1="15"
        x2="24"
        y2="20"
        fill="none"
        stroke="#142032"
        strokeMiterlimit="10"
      />
      <rect
        x="6"
        y="30"
        width="18"
        height="15"
        fill="none"
        stroke="#142032"
        strokeMiterlimit="10"
      />
      <line
        x1="15"
        y1="30"
        x2="15"
        y2="35"
        fill="none"
        stroke="#142032"
        strokeMiterlimit="10"
      />
      <rect
        x="24"
        y="30"
        width="18"
        height="15"
        fill="none"
        stroke="#142032"
        strokeMiterlimit="10"
      />
      <line
        x1="33"
        y1="30"
        x2="33"
        y2="35"
        fill="none"
        stroke="#142032"
        strokeMiterlimit="10"
      />
    </g>
  </Icon>
)

const Board = (props: IconProps) => (
  <Icon
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    size={35}
  >
    <g
      stroke-linecap="square"
      stroke-linejoin="miter"
      stroke-width="2"
      fill="#f71963"
      stroke="#f71963"
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        fill="none"
        stroke="#142032"
        stroke-miterlimit="10"
      />
      <rect
        x="10"
        y="10"
        width="11"
        height="13"
        fill="none"
        stroke-miterlimit="10"
        data-color="color-2"
      />
      <rect
        x="10"
        y="29"
        width="11"
        height="9"
        fill="none"
        stroke-miterlimit="10"
        data-color="color-2"
      />
      <rect
        x="27"
        y="10"
        width="11"
        height="28"
        fill="none"
        stroke-miterlimit="10"
        data-color="color-2"
      />
    </g>
  </Icon>
)

const Composable = (props: IconProps) => (
  <Icon
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="25"
    height="25"
  >
    <g
      className="nc-icon-wrapper"
      stroke-linecap="square"
      stroke-linejoin="miter"
      stroke-width="2"
      fill="#f71963"
      stroke="#f71963"
    >
      <rect
        x="2"
        y="2"
        width="8"
        height="8"
        rx="1"
        fill="none"
        stroke="#142032"
        stroke-miterlimit="10"
      />
      <rect
        data-color="color-2"
        x="14.185"
        y="2.185"
        width="7.63"
        height="7.63"
        rx="0.954"
        transform="translate(1.029 14.485) rotate(-45)"
        fill="none"
        stroke-miterlimit="10"
      />
      <rect
        x="14"
        y="14"
        width="8"
        height="8"
        rx="1"
        fill="none"
        stroke="#142032"
        stroke-miterlimit="10"
      />
      <rect
        x="2"
        y="14"
        width="8"
        height="8"
        rx="1"
        fill="none"
        stroke="#142032"
        stroke-miterlimit="10"
      />
    </g>
  </Icon>
)
export { StorageUnit, Board, Composable }