export const rovers = [
  {
    name: "Curiosity",
    value: "curiosity",
    model: "https://mars.nasa.gov/gltf_embed/24584",
  },
  {
    name: "Opportunity",
    value: "opportunity",
    model: "https://mars.nasa.gov/gltf_embed/24883",
  },
  {
    name: "Spirit",
    value: "spirit",
    model: "https://mars.nasa.gov/gltf_embed/24883",
  },
];
export const roverCameras = [
  {
    id: 0,
    value: "FHAZ",
    name: "Front Hazard Avoidance Camera",
    rover: ["curiosity", "opportunity", "spirit"],
  },
  {
    id: 1,
    value: "RHAZ",
    name: "Rear Hazard Avoidance Camera",
    rover: ["curiosity", "opportunity", "spirit"],
  },
  {
    id: 2,
    value: "MAST",
    name: "Mast Camera",
    rover: ["curiosity"],
  },
  {
    id: 3,
    value: "CHEMCAM",
    name: "Chemistry and Camera Complex",
    rover: ["curiosity"],
  },
  {
    id: 4,
    value: "MAHLI",
    name: "Mars Hand Lens Imager",
    rover: ["curiosity"],
  },
  { id: 5, value: "MARDI", name: "Mars Descent Imager", rover: ["curiosity"] },
  {
    id: 6,
    value: "NAVCAM",
    name: "Navigation Camera",
    rover: ["curiosity", "opportunity", "spirit"],
  },
  {
    id: 7,
    value: "PANCAM",
    name: "Panoramic Camera",
    rover: ["opportunity", "spirit"],
  },
  {
    id: 8,
    value: "MINITES",
    name: "Miniature Thermal Emission Spectrometer",
    rover: ["opportunity", "spirit"],
  },
];
