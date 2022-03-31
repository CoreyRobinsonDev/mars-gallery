import { FaGlobe } from 'react-icons/fa';
import styled from '@emotion/styled';

interface Props {
  handleClick: (newValue: string) => void;
}
const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color);
  font-size: 3rem;
  background: #2e2e2e;
  box-shadow: 0 10px 15px 3px rgba(0,0,0,0.1),0 4px 6px 2px rgba(0,0,0,0.05);
  margin: 1rem;
  padding: .5rem;
  border-radius: 10px;

  @media only screen and (max-width: 650px) {
    font-size: 1.5rem;
  }
  
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
  @media only screen and (max-width: 650px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 400px) {
    font-size: 1.2rem;
  }
`
const Anchor = styled.a`
  position: fixed;
  text-decoration: none;
  top: 105vh;
  left: 65vw;
  color: var(--text-color);
  background: #2e2e2e;
  padding: 10px;
  border-radius: 15px;
  z-index: 2;
`

const Header: React.FC<Props> = ({ handleClick }) => {
  
  return <>
    <Head id='header'>
      <FaGlobe />
      <ButtonWrapper>
        <Button onClick={(e) => handleClick((e.target as HTMLInputElement).innerText)}>Curiosity</Button>
        <Button onClick={(e) => handleClick((e.target as HTMLInputElement).innerText)}>Opportunity</Button>
        <Button onClick={(e) => handleClick((e.target as HTMLInputElement).innerText)}>Spirit</Button>
      </ButtonWrapper>
    </Head>
    <Anchor href='#header'>Back to Top</Anchor>
  </>
}
export default Header;