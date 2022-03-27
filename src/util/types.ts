export type Rover = {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}

export type Camera = {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

export type Photo = {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

export type PhotoResponseData = {
  photos: Photo[]
}

export type ManifestPhoto = {
  cameras: string[];
  earth_date: string;
  sol: number;
  total_photos: number;
}

export type PhotoManifest = {
  landing_date: string;
  launch_date: string;
  max_date: string;
  max_sol: number;
  name: string;
  photos: ManifestPhoto[];
  status: string;
  total_photos: number;
}

export type ManifestResponseData = {
  photo_manifest: PhotoManifest
}