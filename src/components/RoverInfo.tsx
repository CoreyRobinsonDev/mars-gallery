import styled from '@emotion/styled';

interface Props {
  landing_date: string;
  launch_date: string;
  max_date: string;
  max_sol: number;
  name: string;
  status: string;
  total_photos: number;
  rover: string;
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
  box-shadow: 0 10px 15px 3px rgba(0,0,0,0.1),0 4px 6px 2px rgba(0,0,0,0.05);

  @media only screen and (max-width: 650px) {
    display: none;
  }
`
const BioWrapper = styled.div`
  color: var(--text-color);
  background: #2e2e2e;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 10px 15px 3px rgba(0,0,0,0.1),0 4px 6px 2px rgba(0,0,0,0.05);
`
const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #2e2e2e;
`
const H1 = styled.h1`
  font-size: 1.8rem;
  
`
const H2 = styled.h2`
  font-size: 1.2rem;
  
`
const Span = styled.span`
  font-style: italic;
`

const RoverInfo: React.FC<Props> = ({ landing_date, launch_date, max_date, max_sol, name, status, total_photos, rover }) => { 
  const roverBio = {
    Curiosity: {
      img: <Image src='rovers\1200px-PIA16239_High-Resolution_Self-Portrait_by_Curiosity_Rover_Arm_Camera.webp' alt='A self-portrait by the Curiosity rover arm camera.' />,
      bio: <><p><Span>Curiosity</Span> is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory (MSL) mission. <Span>Curiosity</Span> was launched from Cape Canaveral (CCAFS) on 26 November 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on 6 August 2012, 05:17:57 UTC. The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover's touchdown target after a 560 million km (350 million mi) journey.</p><br/>
      <p>
      Mission goals include an investigation of the Martian climate and geology, assessment of whether the selected field site inside Gale has ever offered environmental conditions favorable for microbial life (including investigation of the role of water), and planetary habitability studies in preparation for human exploration.</p><br/></>
    },
    Opportunity: {
      img: <Image src='rovers\oppty.webp' alt="An artist's portrayal of Opportunity on the surface of Mars." />,
      bio: <><p><Span>Opportunity</Span>, also known as MER-B (Mars Exploration Rover – B) or MER-1, and nicknamed Oppy, is a robotic rover that was active on Mars from 2004 until mid-2018. <Span>Opportunity</Span> was operational on Mars for 5110 sols (5250 days, or 14 years, 136 days). Launched on July 7, 2003, as part of NASA's Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin <Span>Spirit</Span> (MER-A) touched down on the other side of the planet. With a planned 90-sol duration of activity (slightly less than 92.5 Earth days), <Span>Spirit</Span> functioned until it got stuck in 2009 and ceased communications in 2010, while <Span>Opportunity</Span> was able to stay operational for 5111 sols after landing, maintaining its power and key systems through continual recharging of its batteries using solar power, and hibernating during events such as dust storms to save power. This careful operation allowed <Span>Opportunity</Span> to operate for 57 times its designed lifespan, exceeding the initial plan by 14 years, 46 days (in Earth time). By June 10, 2018, when it last contacted NASA, the rover had traveled a distance of 45.16 kilometers (28.06 miles).</p><br/><p>Mission highlights included the initial 90-sol mission, finding meteorites such as Heat Shield Rock (Meridiani Planum meteorite), and over two years of exploring and studying Victoria crater. The rover survived moderate dust storms and in 2011 reached Endeavour crater, which has been described as a "second landing site." The <Span>Opportunity</Span> mission is considered one of NASA's most successful ventures.</p><br/></>
    },
    Spirit: {
      img: <Image src='rovers\KSC-03PD-0786.webp' alt='The Mars Exploration Rover-2 (MER-2) during testing for mobility and maneuverability.' />,
      bio: <><p><Span>Spirit</Span>, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a Mars robotic rover, active from 2004 to 2010.<Span>Spirit</Span> was operational on Mars for 2208 sols or 3.3 Martian years (2249 days; 6 years, 77 days). It was one of two rovers of NASA's Mars Exploration Rover Mission managed by the Jet Propulsion Laboratory (JPL). <Span>Spirit</Span> landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, <Span>Opportunity</Span> (MER-B), which landed on the other side of the planet. Its name was chosen through a NASA-sponsored student essay competition. The rover got stuck in a "sand trap" in late 2009 at an angle that hampered recharging of its batteries; its last communication with Earth was on March 22, 2010.</p><br/><p>The rover completed its planned 90-sol mission (slightly less than 92.5 Earth days). Aided by cleaning events that resulted in more energy from its solar panels, <Span>Spirit</Span> went on to function effectively over twenty times longer than NASA planners expected. <Span>Spirit</Span> also logged 7.73 km (4.8 mi) of driving instead of the planned 600 m (0.4 mi), allowing more extensive geological analysis of Martian rocks and planetary surface features. Initial scientific results from the first phase of the mission (the 90-sol prime mission) were published in a special issue of the journal Science.</p><br/></>
    }
    
  }
  let img: JSX.Element = <></>;
  let bio: JSX.Element = <></>;

  if (rover === 'Curiosity') {
    img = roverBio.Curiosity.img;
    bio = roverBio.Curiosity.bio;
  } else if (rover === 'Opportunity') {
    img = roverBio.Opportunity.img;
    bio = roverBio.Opportunity.bio;
  } else {
    img = roverBio.Spirit.img;
    bio = roverBio.Spirit.bio;
  }
  return <Wrappper>
    {img}
    <BioWrapper>
      <H1>{name}</H1>
      {bio}
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