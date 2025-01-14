import { useMediaQuery } from 'usehooks-ts'

const [mobileMediaQuery] = ['(max-width: 999.9px)'] as const

export const useCheckDevice = () => {
  const isMobile = useMediaQuery(mobileMediaQuery)

  if (!isMobile) {
    return {
      isMobile: window.innerWidth < 999.9,
    }
  }

  return { isMobile }
}
