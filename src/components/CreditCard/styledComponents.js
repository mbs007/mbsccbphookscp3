// Style your elements here
import styled from 'styled-components'

export const MainDiv = styled.div`
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const CardDiv = styled.div`
  height: 65vh;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#3b4b69, #344e7a);
  background-size: cover;
  @media screen and (min-width: 768px) {
    width: 50vw;
    height: 100vh;
  }
`

export const CardHead = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bolder;
  color: #ffffff;
  border-bottom: 3px solid #ffd773;
`

export const InnerCardDiv = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 70%;
  width: 90%;
  margin: auto;
  border-radius: 30px;
  padding-top: 50px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CardNum = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
`

export const CardName = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
`

export const Cname = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  color: #d3d9e0;
`

export const InpEle = styled.input`
  width: 90%;
  margin: auto;
  outline: none;
  border: 1px solid #c3cad9;
  background-color: #d3d9e0;
  color: #475569;
  padding: 10px;
  margin-bottom: 15px;
`

export const PayHead = styled(CardHead)`
  color: #344e7a;
  border-bottom: none;
`

export const PayDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 2px 2px #d3d9e0;
  border-radius: 15px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    align-self: center;
    width: 60%;
    height: 40%;
    margin-right: auto;
  }
`

export const CnameDiv = styled.div`
  font-family: 'Roboto';
`
