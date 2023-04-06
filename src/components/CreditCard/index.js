// Write your code here
import {useState} from 'react'
import {
  MainDiv,
  CardDiv,
  CardHead,
  InnerCardDiv,
  CardNum,
  CardName,
  Cname,
  InpEle,
  PayDiv,
  PayHead,
  CnameDiv,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  return (
    <MainDiv>
      <CardDiv>
        <CardHead>CREDIT CARD</CardHead>
        <InnerCardDiv data-testid="creditCard">
          <CardNum>{cardNumber}</CardNum>
          <CnameDiv>
            <Cname>CARDHOLDER NAME</Cname>
            <CardName>{cardName.toUpperCase()}</CardName>
          </CnameDiv>
        </InnerCardDiv>
      </CardDiv>
      <PayDiv>
        <PayHead>Payment Method</PayHead>
        <InpEle
          type="text"
          value={cardNumber}
          placeholder="Card Number"
          onChange={e => {
            setCardNumber(e.target.value)
          }}
        />
        <InpEle
          type="text"
          value={cardName}
          placeholder="Cardholder Name"
          onChange={e => {
            setCardName(e.target.value)
          }}
        />
      </PayDiv>
    </MainDiv>
  )
}

export default CreditCard
