import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 1144px;
  padding-top: 30px;
  margin: 0 auto;
  height: 100%;
  position: relative;
`

export const Notes = styled.section`
  margin-top: 20px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const Note = styled.article`
  background: #fff;
  width: 360px;
  height: 180px;
  margin: 10px;
  box-shadow: 0px 7px 17px -6px rgba(0,0,0,0.58);
  border-radius: 10px;
  transition: .3s;
  border: none;
`

export const NoteHead = styled.div`
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 30%;
  background: var(--gray);
  padding: 5px;
  > h1 {
    font-size: 20px;
  }
`

export const NoteBody = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 55%;
  padding: 5px;
  > p {
    font-size: 13px;
  }
`

export const NoteIcons = styled.div`
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
`

export const NoteButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;

  > svg {
    fill: #ec6cff;
  }
`