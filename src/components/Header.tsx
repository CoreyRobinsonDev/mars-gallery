import { FaGlobe } from 'react-icons/fa';
import styled from '@emotion/styled';

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  color: #a9cec2;
  font-size: 3rem;
  background: #2e2e2e;
  box-shadow: 0 10px 15px 3px rgba(0,0,0,0.1),0 4px 6px 2px rgba(0,0,0,0.05);
  margin: 1rem;
  padding: .5rem;
  border-radius: 10px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const Button = styled.button`
  font-size: 2rem;
  &:hover {
    color: #DB9D7E;
  }
`

const Header = () => {
  return <Head>
    <FaGlobe />
    <ButtonWrapper>
      <Button>Curiosity</Button>
      <Button>Opportunity</Button>
      <Button>Spirit</Button>
    </ButtonWrapper>
  </Head>
}
export default Header;