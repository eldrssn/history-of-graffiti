import { FC, useEffect, useRef, useState } from 'react'

import * as S from './page-footer.styled'

export const PageFooter: FC = () => {
  const [isTeamShown, setIsTeamShown] = useState(false)
  const teamRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleTeam = () => {
    setIsTeamShown((value) => !value)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isTeamShown &&
        teamRef.current &&
        !teamRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsTeamShown(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isTeamShown])

  return (
    <>
      <S.Footer>
        <S.Text>
          <S.Link href="https://lifehacker.ru/" target="_blank">
            Лайфхакер
          </S.Link>{' '}
          © | XX.09.2024
        </S.Text>
        <S.Text>
          Реклама.{' '}
          <S.Link href="https://vkusnoitochka.ru/" target="_blank">
            ООО «Система ПБО»
          </S.Link>{' '}
          ИНН: 7710044140
        </S.Text>

        <S.TeamWrapper>
          <S.List $visible={isTeamShown} ref={teamRef}>
            <S.Row>
              <S.Block>Креатив:</S.Block>
              <S.Block>
                Сергей Габер,
                <br /> Юлия Локшина
              </S.Block>
            </S.Row>
            <S.Row>
              <S.Block>Автор:</S.Block>
              <S.Block>Евгений Колесов</S.Block>
            </S.Row>
            <S.Row>
              <S.Block>Редактор:</S.Block>
              <S.Block>Елена Авдеева</S.Block>
            </S.Row>
            <S.Row>
              <S.Block>Корректор: </S.Block>
              <S.Block>Елена Грицун</S.Block>
            </S.Row>
            <S.Row>
              <S.Block>Дизайн-директор:</S.Block>
              <S.Block> Валерий Гиневичус</S.Block>
            </S.Row>
            <S.Row>
              <S.Block>Менеджер проекта:</S.Block>
              <S.Block>Анастасия Новикова</S.Block>
            </S.Row>
            <S.Row>
              <S.Block>Менеджер по продажам:</S.Block>
              <S.Block> Валерия Леина</S.Block>
            </S.Row>
          </S.List>

          <S.Button ref={buttonRef} type="button" onClick={toggleTeam}>
            Команда проекта
          </S.Button>
        </S.TeamWrapper>
      </S.Footer>
    </>
  )
}

export default PageFooter
