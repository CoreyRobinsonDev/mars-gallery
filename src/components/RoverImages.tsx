import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface Props {
  photos: string[];
  handleChange: (newValue: string) => void;
  value: string;
}

const Wrapper = styled.article`
  margin: 30px 15px;
`

const PhotoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background: black;
  border-radius: 10px;
  box-shadow: 0 10px 15px 3px rgba(0,0,0,0.1),0 4px 6px 2px rgba(0,0,0,0.05);
`
const Image = styled.img`
  width: 500px;
  height: 100%;

  @media only screen and (max-width: 650px) {
    width: 80vw;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 15px;
  color: var(--text-color);
  background: #2e2e2e;
  border-radius: 10px;
  box-shadow: 0 10px 15px 3px rgba(0,0,0,0.1),0 4px 6px 2px rgba(0,0,0,0.05);
`
const H3 = styled.h3`
  font-size: 2rem;
  
  
  @media only screen and (max-width: 650px) {
    font-size: 1.8rem;
  }
`
const Input = styled.input`
  width: 3.3rem;
  text-align: right;
  color: var(--text-color);
  background: #47494e;
  font-size: 1.3rem;
  
  &:focus {
    outline: none;
  }
`
const RoverImages: React.FC<Props> = ({ photos, handleChange, value }) => {
  
  return <Wrapper>
    <Header>
      <H3>Retrieve photos on a given Martian Day: </H3>
      <Input type='input' value={value} onChange={(e) => handleChange((e.target as HTMLInputElement).value)} />
    </Header>
    <PhotoWrapper>
      {photos.map((photo, key) => <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} whileTap={{ zIndex:2, scale: 2}}>
<Image key={key} src={photo} alt='' /></motion.div>)}
    </PhotoWrapper>
  </Wrapper>
}
export default RoverImages;