import styled from '@emotion/styled';

interface Props {
  photos: string[];
  handleChange: (newValue: string) => void;
  value: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Image = styled.img`
  width: 500px;
  height: 100%;
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const H3 = styled.h3`
  font-size: 2rem;
`
const Input = styled.input`
  width: 2.1rem;
  text-align: right;
  color: var(--text-color);
  background: #47494e;
`
const RoverImages: React.FC<Props> = ({ photos, handleChange, value }) => {
  return <article>
    <Header>
      <H3>Retrieve photos on a given Martian Day: </H3>
      <Input value={value} onChange={(e) => handleChange((e.target as HTMLInputElement).value)} />
    </Header>
    <Wrapper>
    {photos.map((photo, key) => <Image key={key} src={photo} alt=''/>)}
    </Wrapper>
  </article>
}
export default RoverImages;