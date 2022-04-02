import { useEffect, useState } from "react";
import { Global, css } from '@emotion/react';

import Header from "../components/Header";
import RoverInfo from "../components/RoverInfo";
import RoverImages from "../components/RoverImages";
import type { PhotoResponseData, ManifestResponseData } from "../util/types";

const api = typeof process.env.REACT_APP_API_KEY === 'string'
  ? process.env.REACT_APP_API_KEY
  : '';

const App: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoResponseData | undefined>(undefined);
  const [manifest, setManifest] = useState<ManifestResponseData | undefined>(undefined);
  const [rover, setRover] = useState<string>('Curiosity');
  const [sol, setSol] = useState<string>('1');

  const fetchPhotos = async () => {
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.toLowerCase()}/photos?sol=${sol}&api_key=${api}`);
    const data: PhotoResponseData = await response.json();
    setPhotos(data);
  }
  const fetchManifest = async () => {
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${api}`);
    const data: ManifestResponseData = await response.json();
    setManifest(data);
  }

  const handleClick = (newValue: string) => {
    setRover(newValue);  
  }
  const handleChange = (newValue: string) => {
    setSol(newValue);
  }

  useEffect(() => {
    fetchPhotos();
    fetchManifest();
  }, [rover, sol])
  
  useEffect(() => {
    fetchPhotos();
  }, [sol])

  return (
    <>
      <Global styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
        html {  
          box-sizing: border-box;   
          font-size: 100%;
          font-family: 'Red Hat Mono', monospace;
        }
        *, *:before, *:after {  
            box-sizing: inherit;  
            margin: 0;  
            padding: 0;
        }
        :root {
          --text-color: #6DA79B;
        }
        button {
          background: none;
          color: inherit;
          border: none;
          padding: 0;
          margin: 0;
          font: inherit;
          cursor: pointer;
          outline: inherit;
        }
        body {
          background: #585A65;
        }
      `} />
      <main>
        <Header handleClick={handleClick}/>
      {manifest
        ? <RoverInfo 
        landing_date={manifest?.photo_manifest.landing_date}
        launch_date={manifest?.photo_manifest.launch_date}
        max_date={manifest?.photo_manifest.max_date}
        max_sol={manifest?.photo_manifest.max_sol}
        name={manifest?.photo_manifest.name}
        status={manifest?.photo_manifest.status}
        total_photos={manifest?.photo_manifest.total_photos}
        rover={rover}    
        />
        : 'Loading...'
      }
      {photos
        ? <RoverImages photos={photos?.photos.map(photo => photo.img_src)} handleChange={handleChange} value={sol} />
        : 'Loading...'
      }    
      </main>
    </>
  )
  
}
export default App;
