import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1144px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  padding-top: 80px;
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

export const BContentBgImage = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const ContentTextTitle = styled.h1`
  color: var(--blue);
  font-size: 60px;
`

export const ContentTextDesc = styled.p`
  margin: 10px  0 20px;
  color: var(--font-color);
`

export const ContentImage = styled.div``

export const Image = styled.img`
  width: 450px;
  height: auto;
  -webkit-box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.58);
  -moz-box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.58);
  box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.58);
  border-radius: 10px;
`

