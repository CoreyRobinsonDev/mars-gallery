import styled from '@emotion/styled';

interface Props {
  landing_date: string;
  launch_date: string;
  max_date: string;
  max_sol: number;
  name: string;
  status: string;
  total_photos: number;
}

const Wrappper = styled.section`
  display: flex;
  padding: 0 1rem 2rem 1rem;
  border-bottom: solid 3px #2E2E2E;
`
const Image = styled.img`
  width: 25rem;
  height: 100%;
  border-radius: 5px;
  margin-right: 1rem;
`
const BioWrapper = styled.div`
  color: #A9CEC2;
`
const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`
const H1 = styled.h1`
  font-size: 1.8rem;
  color: black;
`
const H2 = styled.h2`
  font-size: 1.2rem;
  color: black;
`
const Span = styled.span`
  font-style: italic;
`
const RoverInfo: React.FC<Props> = ({ landing_date, launch_date, max_date, max_sol, name, status, total_photos }) => { 
  return <Wrappper>
    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/PIA16239_High-Resolution_Self-Portrait_by_Curiosity_Rover_Arm_Camera.jpg/1200px-PIA16239_High-Resolution_Self-Portrait_by_Curiosity_Rover_Arm_Camera.jpg' alt='A self-portrait by the Curiosity rover arm camera.' />
    <BioWrapper>
      <H1>{name}</H1>
      <p><Span>Curiosity</Span> is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory (MSL) mission. <Span>Curiosity</Span> was launched from Cape Canaveral (CCAFS) on 26 November 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on 6 August 2012, 05:17:57 UTC. The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover's touchdown target after a 560 million km (350 million mi) journey.</p>
      <p>
      Mission goals include an investigation of the Martian climate and geology, assessment of whether the selected field site inside Gale has ever offered environmental conditions favorable for microbial life (including investigation of the role of water), and planetary habitability studies in preparation for human exploration.</p>
      <InfoWrapper><H2>Launch Date: </H2><span>{launch_date}</span></InfoWrapper>
      <InfoWrapper><H2>Landing Date: </H2><span>{landing_date}</span></InfoWrapper>
      <InfoWrapper><H2>Last Photo Taken On (Martian sol): </H2><span>{max_sol}</span></InfoWrapper>
      <InfoWrapper><H2>Last Photo Taken On (Earth date): </H2><span>{max_date}</span></InfoWrapper>
      <InfoWrapper><H2>Total Photos Taken: </H2><span>{new Intl.NumberFormat().format(total_photos)}</span></InfoWrapper>
      <InfoWrapper><H2>Status: </H2><span>{status}</span></InfoWrapper>
    </BioWrapper>
  </Wrappper>
}
export default RoverInfo;