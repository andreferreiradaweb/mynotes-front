import styled from 'styled-components'

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContentBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const BContentBg = styled.p`
  background: var(--blue);
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 57%, 0 83%);
`