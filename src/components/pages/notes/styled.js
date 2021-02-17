import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1144px;
  margin: 0 auto;
  height: auto;
  position: relative;
`

export const Notes = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Note = styled.article`
  background: #fff;
  width: 360px;
  height: 180px;
  margin: 10px;
  -webkit-box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.58);
  -moz-box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.58);
  box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.58);
  border-radius: 10px;
  transition: .3s;

  &:hover {
    -webkit-box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.28);
    -moz-box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.28);
    box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.28);
  }
`

export const noteHead = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 30%;
  background: var(--gray);
  padding: 5px;

  > h1 {
    font-size: 20px;
  }
`

export const noteBody = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 55%;
  padding: 5px;

  > p {
    font-size: 13px;
  }
`

export const noteIcons = styled.div`
  width: 100%;
  height: 15%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > svg {
    margin-left: 7px;
    cursor: pointer;
    fill: var(--blue);
    background: transparent;
  }
  > svg:nth-child(2) {
    fill: #ec6cff;
  }
`
