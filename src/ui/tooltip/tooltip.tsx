import { FC, memo, useEffect, useRef } from 'react'

import { useTooltip } from '@hooks'

import * as S from './tooltip.styled'
import { TooltipProps } from './types'

export const Tooltip: FC<TooltipProps> = memo(({ content, children, href, isFull = false, isRight = false }) => {
  const tooltipRef = useRef<HTMLDivElement>(null)

  const { isTooltipVisible, isTooltipExiting, showTooltip, hideTooltip } = useTooltip({
    delayEntering: 300,
    delayExiting: 300,
  })

  const handleClick = () => {
    if (!isTooltipVisible) {
      showTooltip()
    }
  }

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isTooltipVisible &&
        tooltipRef.current &&
        wrapperRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        hideTooltip()
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [hideTooltip, isTooltipVisible])

  return (
    <S.Wrapper
      ref={wrapperRef}
      $isLink={!!href}
      $exiting={isTooltipExiting}
      $visible={isTooltipVisible}
      onClick={handleClick}
    >
      {children}
      <S.WrapperContent
        $isLink={!!href}
        $visible={isTooltipVisible}
        $exiting={isTooltipExiting}
        $isFull={isFull}
        $isRight={isRight}
      >
        <S.Content ref={tooltipRef} $isLink={!!href} $isFull={isFull}>
          {!href ? (
            content
          ) : (
            <a href={href} target="_black">
              {content}
            </a>
          )}
        </S.Content>
      </S.WrapperContent>
    </S.Wrapper>
  )
})

export default Tooltip
