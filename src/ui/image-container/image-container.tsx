import { FC, memo, useState } from 'react'

import * as S from './image-container.styled'
import { ImageContainerProps } from './types'

export const ImageContainer: FC<ImageContainerProps> = memo(
  ({ src, alt, caption, children, offset, rotate = -5, side }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleImageClick = () => {
      setIsModalOpen(true)
    }

    const handleCloseModal = () => {
      setIsModalOpen(false)
    }

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === e.currentTarget) {
        handleCloseModal()
      }
    }
    return (
      <>
        <S.Wrapper onClick={handleImageClick} $isRight={offset === 'right'} $rotate={rotate} $side={side}>
          <S.Image>{children}</S.Image>
          {caption && <S.Figcaption>{caption}</S.Figcaption>}
        </S.Wrapper>

        {isModalOpen && (
          <S.ModalOverlay onClick={handleOverlayClick}>
            <S.ModalContent>
              <S.CloseButton onClick={handleCloseModal} />
              <S.ImageFull src={src} alt={alt} />
            </S.ModalContent>
          </S.ModalOverlay>
        )}
      </>
    )
  }
)
