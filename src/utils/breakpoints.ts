import { SCREEN_SIZES } from '@/utils/screensizes'

export const breakpoints = {
  small: `(max-width: ${SCREEN_SIZES.MEDIUM - 1}px)`,
  medium: `(min-width: ${SCREEN_SIZES.MEDIUM}px)`,
  mediumOnly: `(min-width: ${SCREEN_SIZES.MEDIUM}px) and (max-width: ${
    SCREEN_SIZES.LARGE - 1
  }px)`,
  large: `(min-width: ${SCREEN_SIZES.LARGE}px)`,
  xlarge: `(min-width: ${SCREEN_SIZES.XLARGE}px)`,
}